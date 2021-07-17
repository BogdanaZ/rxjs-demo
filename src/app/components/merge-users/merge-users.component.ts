import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-merge-users',
  templateUrl: './merge-users.component.html',
  styleUrls: ['./merge-users.component.css']
})
export class MergeUsersComponent implements OnInit {
  users: User[];
  constructor(private readonly _userservice: UserService) {}

  ngOnInit() {
    this._userservice.getUsers().subscribe(users => (this.users = users));
  }
}
