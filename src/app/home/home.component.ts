import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  public isBlocked: Observable<boolean>;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isBlocked = this._authService.isBlocked();
  }

}
