import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  template: `
    <app-alert></app-alert>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
