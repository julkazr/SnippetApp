import { TestBed, async, inject } from '@angular/core/testing';

import { IsAdminGuardGuard } from './is-admin-guard.guard';

describe('IsAdminGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAdminGuardGuard]
    });
  });

  it('should ...', inject([IsAdminGuardGuard], (guard: IsAdminGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
