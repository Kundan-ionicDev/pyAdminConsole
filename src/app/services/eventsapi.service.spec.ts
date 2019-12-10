import { TestBed } from '@angular/core/testing';

import { EventsapiService } from './eventsapi.service';

describe('EventsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsapiService = TestBed.get(EventsapiService);
    expect(service).toBeTruthy();
  });
});
