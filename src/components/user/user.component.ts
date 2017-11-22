import {Component, Inject, OnInit} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service/user.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;
  private userName: string;

  constructor(@Inject('MyUserService') public userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(1)
      .subscribe(user => {
        this.user = user;
        this.userName = user.userName;
      });
  }
}
