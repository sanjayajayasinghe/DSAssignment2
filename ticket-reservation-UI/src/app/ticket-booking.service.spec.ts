import { TestBed, inject } from '@angular/core/testing';

import { TicketBookingService } from './ticket-booking.service';

describe('TicketBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketBookingService]
    });
  });

  it('should be created', inject([TicketBookingService], (service: TicketBookingService) => {
    expect(service).toBeTruthy();
  }));
});
