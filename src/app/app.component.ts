import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public readonly name = 'Angular ' + VERSION.major;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}
