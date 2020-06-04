import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    TaskCardComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    TaskCardComponent,
  ],
})
export class TaskCardModule { }
