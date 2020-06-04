import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { UserFormModule } from '../user-form/user-form.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    
    UsersListRoutingModule,
    UserFormModule,
  ]
})
export class UsersListModule { }
