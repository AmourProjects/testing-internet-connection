import { TestBed } from '@angular/core/testing';

import { InternetConnectionPreloadingStrategyService } from './internet-connection-preloading-strategy.service';

describe('InternetConnectionPreloadingStrategyService', () => {
  let service: InternetConnectionPreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternetConnectionPreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
