import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public signedIn: Observable<boolean>;
  private _userSub: Subscription;
  user: firebase.User;
  public isAdmin: Observable<boolean>;
  public isBlocked: Observable<boolean>;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.signedIn = this._authService.routeProtected();
    this.isAdmin = this._authService.isAdmin();
    this.isBlocked = this._authService.isBlocked();
    this._userSub = this._authService.tryToGetLoggedInUser().subscribe(firebaseUser => {
      this.user = firebaseUser;
    });

  }

  logOut() {
    this._authService.logOut();
  }


}
