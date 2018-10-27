import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  email: string;
  password: string;
  errorMessage: string;
  @ViewChild('loginForm')
  loginForm: NgForm;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logIn(): void {
    this._authService
      .signInWithEmailAndPassword(this.user.email, this.user.password).then()
      .catch(error => {
        this.errorMessage = error.message;
      });
  }


}
