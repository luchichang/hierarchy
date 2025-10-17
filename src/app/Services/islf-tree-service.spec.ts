import { TestBed } from '@angular/core/testing';

import { IslfTreeService } from './islf-tree-service';

describe('IslfTreeService', () => {
  let service: IslfTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslfTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
