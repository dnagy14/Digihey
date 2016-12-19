import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { AlertInterface } from './alert-interface';

@Component({
  selector: 'app-alert',
  template: `
    <p class="notification" *ngFor="let alert of alerts">
      <ngb-alert [dismissible]="true" [type]="alert.type" (close)="closeAlert(alert)">{{ alert.message }}</ngb-alert>
    </p>
  ` ,
styleUrls: ['./alert.component.sass'],

})
export class AlertComponent implements OnInit {

  private alerts = [];

  constructor( private _alertService: AlertService ) {

  }

  ngOnInit() {
    // this.alerts.push({type: 'danger', message: 'poruka'});
    this._alertService.alerts$.subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  closeAlert(alert) {
    this._alertService.closeAlert(alert);
  }
}
