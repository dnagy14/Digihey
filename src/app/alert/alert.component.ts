import { Component, OnInit } from '@angular/core';
import { AlertInterface } from './alert-interface';
import { NewAlertServiceService } from '../new-alert-service.service';

@Component({
  selector: 'app-alert',
  template: `
    <p class="notification">
      <ngb-alert *ngFor="let alert of (alerts | async); let i = index" [dismissible]="true" [type]="alert.type" (close)="closeAlert(i)">{{ alert.message }}</ngb-alert>
    </p>
  ` ,
styleUrls: ['./alert.component.sass'],

})
export class AlertComponent implements OnInit {

  private alerts = [];

  constructor( private _newAlertService: NewAlertServiceService ) {
  }

  ngOnInit() {
    // this._newAlertService.alertObs$.subscribe(
    //   (res) => {
    //     this.alerts = res;
    //   }
    // );
    this.alerts = this._newAlertService.alertObs$;
  }

  closeAlert(alert) {
    this._newAlertService.closeAlert(alert);
  }
}
