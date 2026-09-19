import { HttpResourceRef } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../core/layout/models/user.models';
import { TableTemplate } from '../../shared/table-template/table-template';
import { UserManagementApi } from './user-management.api';

@Component({
  selector: 'pgd-user-management',
  imports: [MatButtonModule, MatTableModule, TableTemplate],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement {
  protected displayedColumns: string[] = [
    'id',
    'email',
    'login',
    'password',
    'dateOfBirth',
  ];

  private userManagementApi = inject(UserManagementApi);

  private users: HttpResourceRef<User[] | undefined> =
    this.userManagementApi.usersResource;

  protected dataSource = computed(() => {
    return new MatTableDataSource<User>(this.users.value());
  });
}
