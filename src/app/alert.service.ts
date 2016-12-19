import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class AlertService {

  private alerts = [];
  private _alerts$: Subject<any>;
  public alerts$: Observable<any>;

  constructor() {
    // this.alerts.push({type: 'success', message: 'alert'});
    this._alerts$ = new Subject<any>();
    this.alerts$ = this._alerts$.asObservable();
  }

  newAlert(type, msg) {
    // this.alerts.push({type: type, message: msg});
    this._alerts$.next(new Date());
    // console.log(this._alerts$);
    // setTimeout(() => this.closeAlert(alert), 2000);
  }

  closeAlert(alert) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
      // console.log('close');
  }

}
