import { TestBed } from '@angular/core/testing';

import { PrivateKeyService } from './private-key.service';

describe('PrivateKeyService', () => {
  let service: PrivateKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
