import { Component, OnInit, VERSION } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public readonly name = 'Angular ' + VERSION.major;
  constructor(private readonly _userservice: UserService) {}

  ngOnInit() {
    this._userservice.getUsers().subscribe(x => console.log(x));
  }
}
