import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListRoutingModule } from './tasks-list-routing.module';

/** Components */
import { TasksListComponent } from './tasks-list.component';
/** Shared Modules */
import { TaskFormModule } from 'src/app/shared/modules/task-form/task-form.module';
import { TaskCardModule } from 'src/app/shared/modules/task-card/task-card.module';

@NgModule({
  declarations: [
    TasksListComponent,
  ],
  imports: [
    CommonModule,
    TaskFormModule,
    TaskCardModule,
    TasksListRoutingModule,
  ]
})
export class TasksListModule { }
