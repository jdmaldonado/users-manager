import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import { TasksListComponent } from './tasks-list.component';

const routes: Routes = [
  { path: '', component: TasksListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksListRoutingModule { }
