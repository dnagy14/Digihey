/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewAlertServiceService } from './new-alert-service.service';

describe('NewAlertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewAlertServiceService]
    });
  });

  it('should ...', inject([NewAlertServiceService], (service: NewAlertServiceService) => {
    expect(service).toBeTruthy();
  }));
});
