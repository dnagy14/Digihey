import { Injectable } from '@angular/core';
import { AlertInterface} from './alert/alert-interface';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AlertService {

  private alerts: Array<AlertInterface> = [];
  private _alerts$: BehaviorSubject<any>;
  public alerts$: Observable<any>;

  constructor() {
    // this.alerts.push({type: 'success', message: 'alert'});
    this._alerts$ = new BehaviorSubject<any>([]);
    this.alerts$ = this._alerts$.asObservable();
  }

  newAlert(type, msg) {
    this.alerts.push({type: type, message: msg});
    this._alerts$.next(this.alerts);
    console.log(this.alerts$);
    // setTimeout(() => this.closeAlert(alert), 2000);
  }

  closeAlert(alert) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
      // console.log('close');
  }

}
