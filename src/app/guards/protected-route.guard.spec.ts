import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectedRouteGuard } from './protected-route.guard';

describe('ProtectedRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectedRouteGuard]
    });
  });

  it('should ...', inject([ProtectedRouteGuard], (guard: ProtectedRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
