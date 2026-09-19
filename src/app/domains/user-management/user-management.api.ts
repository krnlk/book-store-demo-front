import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../core/layout/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserManagementApi {
  // private baseURL = 'http://localhost:8080/';
  private baseURL = '/api'; // proxy for localhost to avoid CORS

  readonly usersResource: HttpResourceRef<User[] | undefined> = httpResource(
    () => `${this.baseURL}/users`,
  );
}
