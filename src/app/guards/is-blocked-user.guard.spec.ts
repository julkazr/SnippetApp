import { TestBed, async, inject } from '@angular/core/testing';

import { IsBlockedUserGuard } from './is-blocked-user.guard';

describe('IsBlockedUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsBlockedUserGuard]
    });
  });

  it('should ...', inject([IsBlockedUserGuard], (guard: IsBlockedUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
