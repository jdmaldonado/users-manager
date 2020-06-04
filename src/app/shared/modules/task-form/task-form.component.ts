import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/** Models */
import { Task } from 'src/app/models/task';
/** Services */
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task;
  @Input() userId: string;
  @Output() onSaved = new EventEmitter<void>();

  public taskForm: FormGroup;
  public submitted = false;

  constructor( 
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    this.initForm();
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  private initForm(): void {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required],
      state: ['', Validators.required],
      user_id: [this.userId, Validators.required],
    })
  }

  get form() { return this.taskForm.controls; }

  public async saveTaskInfo(): Promise<void> {
    this.submitted = true;

    // stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }

    const data = this.taskForm.value;

    try {
      if (this.task) {
        await this.taskService.updateTask(this.task.id, data)
      } else {
        await this.taskService.createTask(data);
      }
      this.taskForm.reset();
      this.onSaved.emit();
      this.utilService.successMessage('¡Great!', 'Process complete successfully');
    } catch (error) {}
  }

}
