import { TestBed } from '@angular/core/testing';

import { SenderServiceService } from './sender-service.service';

describe('SenderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenderServiceService = TestBed.get(SenderServiceService);
    expect(service).toBeTruthy();
  });
});
