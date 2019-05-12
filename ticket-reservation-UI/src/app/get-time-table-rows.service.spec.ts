import { TestBed, inject } from '@angular/core/testing';

import { GetTimeTableRowsService } from './get-time-table-rows.service';

describe('GetTimeTableRowsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTimeTableRowsService]
    });
  });

  it('should be created', inject([GetTimeTableRowsService], (service: GetTimeTableRowsService) => {
    expect(service).toBeTruthy();
  }));
});
