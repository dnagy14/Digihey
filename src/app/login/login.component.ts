import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  template: `
    <a href="javascript:void(0);" class="btn btn-link" (click)="goBack()">Go back</a>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    history.back();
  }

}
