import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskStatePipe } from './task-state.pipe';

@NgModule({
  declarations: [
    TaskStatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskStatePipe,
  ]
})
export class PipesModule { }
