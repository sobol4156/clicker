import { TestBed } from '@angular/core/testing';

import { ClickerService } from './clicker.service';

describe('ClickerService', () => {
  let service: ClickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
