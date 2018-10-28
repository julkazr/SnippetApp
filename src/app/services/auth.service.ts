import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, UserStatus } from '../models/user.model';
import * as firebase from 'firebase';
import { UserService } from './user.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _signedInUser$: Observable<firebase.User>;
  public signedInUser: firebase.User;
  user: User;
  constructor(private _afAuth: AngularFireAuth,
              private _userService: UserService,
              private _router: Router,
              private _location: Location) {
                this.tryToGetLoggedInUser();
              }

  signUpWithEmailAndPassword(newUser: User) {
    this._afAuth.auth.
    createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(firebaseResponse => {
      const user = firebaseResponse.user;
      newUser.id = user.uid;
      user.updateProfile({
        displayName: newUser.fullName,
        photoURL: ''
      });
      newUser.isAdmin = false;
      newUser.isBlocked = false;

      delete newUser.password;
      this._userService.createUser(newUser);
      this._userService.updateUserStatus(user.uid, UserStatus.Active);
      console.log(newUser);
      this._router.navigate(['/test-data-list']);
    });
  }

  tryToGetLoggedInUser(): Observable<firebase.User> {
    return new Observable(observer => {
      this._afAuth.authState.subscribe(firebaseUser => {
        if (firebaseUser) {
          observer.next(firebaseUser);
        } else {
          observer.next(null);
        }
      });
    });
  }

  // Login
  signInWithEmailAndPassword(email: string, password: string): Promise<void> {
    return this._afAuth.auth
    .signInWithEmailAndPassword(email, password).then(res => {
      const afSubscription: Subscription = this._afAuth.authState.subscribe(
        firebaseUser => {
          afSubscription.unsubscribe();
          this.signedInUser = firebaseUser;
          console.log(this.signedInUser);
          this._userService.updateUserStatus(firebaseUser.uid, UserStatus.Active);
          this.user = firebaseUser;
          console.log(this.user);
          if (this.user.isBlocked === false) {
            this._router.navigate(['/my-snippets']);
          }
        }
      );
    });
  }

  // Logout
  logOut(): void {
    let useruid = null;
    const afSub: Subscription = this._afAuth.authState.subscribe((firebaseUser) => {
      useruid = firebaseUser.uid;
      afSub.unsubscribe();
      this.user = firebaseUser;
      this._afAuth.auth.signOut().then(() => {
        this._userService.updateUserStatus(firebaseUser.uid, UserStatus.Inactive);
        (this._router.navigate(['/home']));
      });
    });
  }

  getSignedInUser() {
    return this._signedInUser$;
  }

  routeProtected(isLoginPage?: boolean): Observable<boolean> {
    return new Observable(observer => {
      this._afAuth.authState.subscribe(firebaseUser => {
        if (firebaseUser) {
          observer.next(true);
        } else {
          observer.next(false);
          if (isLoginPage) {
            this._location.back();
          }
        }
      });
    });
  }

  isAdmin(): Observable<boolean> {
    return new Observable(observer => {
      this._afAuth.authState.subscribe(firebaseUser => {
        this._userService.getUser(firebaseUser.uid).subscribe((user: User) => {
          if (user.isAdmin) {
            observer.next(user.isAdmin);
          } else {
              observer.next(false);
          }
        });
      });
    });
  }

  isBlocked(): Observable<boolean> {
    return new Observable(observer => {
      this._afAuth.authState.subscribe(firebaseUser => {
        this._userService.getUser(firebaseUser.uid).subscribe((user: User) => {
          if (user.isBlocked) {
            observer.next(user.isBlocked);
            this._router.navigate(['/home']);
          } else {
            this._router.navigate(['/my-snippets']);
            observer.next(false);
          }

        });
      });
    });
  }
}

