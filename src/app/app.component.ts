import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AlertService } from './alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  template: `
    <app-alert></app-alert>
    <router-outlet></router-outlet>
  `,
  // providers: [AlertService]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
