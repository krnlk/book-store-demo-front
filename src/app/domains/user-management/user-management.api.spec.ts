import { TestBed } from '@angular/core/testing';

import { UserManagementApi } from './user-management.api';

describe('UserManagementApi', () => {
  let service: UserManagementApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagementApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
