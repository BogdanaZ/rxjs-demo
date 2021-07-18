import { Component, OnInit } from '@angular/core';
import { UserAge } from '../../user.model';
import { API, UserService } from '../../user.service';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {
  users: UserAge[] = [];
  public loading = true;
  constructor(private readonly _userservice: UserService) {}

  ngOnInit() {
    combineLatest(
      this._userservice.getUsers(),
      this._userservice.getUsers(API.usersApiSecond).pipe(delay(5000)),
      this._userservice.getAges()
    ).subscribe(([usersAPI, usersApiSecond, ages]) => {
      const users = [...usersAPI, ...usersApiSecond];
      users.forEach(user => {
        const mergeData = user as UserAge;
        const userAge = ages.find(age => user.id === age.id);
        mergeData.age = userAge.age;
        this.users.push(mergeData);
      });
      this.loading = false;
    });
  }
}
