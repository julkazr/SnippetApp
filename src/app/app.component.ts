import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TestDataService } from './services/test-data.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, TestDataService, UserService]
})
export class AppComponent {
  title = 'snippet-app';
}
