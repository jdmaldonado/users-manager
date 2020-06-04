import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/users-list/users-list.module').then(m => m.UsersListModule) },
  { path: 'tasks/:userId', loadChildren: () => import('./modules/tasks-list/tasks-list.module').then(m => m.TasksListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
