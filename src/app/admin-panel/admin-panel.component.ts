import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  user: User;
  public searchString: string;
  public usersList: Observable<User[]>;
  p: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersList = this.userService.getUsers().valueChanges();
  }
  onBlock(id: string) {
    this.userService.blockUser(id);
  }

  unblockUser(id: string) {
    this.userService.unblockUser(id);
  }

}
