import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user.model';
import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersList: Observable<User[]>;
  user: User;
  constructor(private _db: AngularFireDatabase) { }

  createUser(newUser: User): void {
    this._db.object(`user/${newUser.id}`).set(newUser);
  }

  public getUsers(): AngularFireList<User> {
    return this._db.list('/user', ref => ref.orderByChild('displayName'));
  }

  getUser(id: string): Observable<User> {
    return this._db.object<User>(`user/${id}`).valueChanges();
  }

  updateUserStatus(useruid, status): void {
      const firebaseDbSubscription: Subscription = this._db.object(`user/${useruid}`).valueChanges().subscribe((user: User) => {
        user.status = status;
        this._db.object(`user/${user.id}`).update(user);
        firebaseDbSubscription.unsubscribe();
      });
  }

  blockUser(useruid): void {
    const firebaseDbSubscription: Subscription = this._db.object(`user/${useruid}`).valueChanges().subscribe((user: User) => {
      user.isBlocked = true;
      this._db.object(`user/${user.id}`).update(user);
      firebaseDbSubscription.unsubscribe();
    });
  }

  unblockUser(useruid): void {
    const firebaseDbSubscription: Subscription = this._db.object(`user/${useruid}`).valueChanges().subscribe((user: User) => {
      user.isBlocked = false;
      this._db.object(`user/${user.id}`).update(user);
      firebaseDbSubscription.unsubscribe();
    });
  }
}
