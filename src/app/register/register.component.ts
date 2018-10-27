import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  @ViewChild('signupForm')
  signupForm: NgForm;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    this._authService.signUpWithEmailAndPassword(this.user);
  }


}
