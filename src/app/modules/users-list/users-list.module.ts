import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListRoutingModule } from './users-list-routing.module';

/** Components */
import { UsersListComponent } from './users-list.component';
/** Shared Modules */
import { UserFormModule } from '../../shared/modules/user-form/user-form.module';
import { UserCardModule } from 'src/app/shared/modules/user-card/user-card.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UserFormModule,
    UserCardModule,
    UsersListRoutingModule,
  ]
})
export class UsersListModule { }
