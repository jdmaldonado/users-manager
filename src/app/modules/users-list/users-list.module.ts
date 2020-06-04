import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListRoutingModule } from './users-list-routing.module';

/** Components */
import { UsersListComponent } from './users-list.component';
/** Shared Modules */
import { UserFormModule } from '../user-form/user-form.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UserFormModule,
    UsersListRoutingModule,
  ]
})
export class UsersListModule { }
