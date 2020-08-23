import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicService } from './http-intercepter-basic.service';

describe('HttpIntercepterBasicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterBasicService = TestBed.get(HttpIntercepterBasicService);
    expect(service).toBeTruthy();
  });
});
