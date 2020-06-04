import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/** Task */
import { Task } from 'src/app/models/task';
/** Services */
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  tasks: Observable<Task[]>
  taskSelected: Task;
  userId: string;

  /** Flags */
  showFormModal = false;
  showDeleteModal = false;

  /** Swal */
  removeMessageOptions: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap((params: ParamMap) => this.userId = params.get('userId')),
    ).subscribe(() => {
      if (this.userId) {
        this.getUserTasks();
      } else {
        this.utilService.errorMessage('¡Opps!', 'User not founD');
      }
    })
    this.removeMessageOptions = {
      icon: 'question',
      title: 'Remove Task',
      text: 'Are you sure do you want to remove this task ?',
      confirmButtonColor: '#00d1b2',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'Cancel'
    }
  }

  private getUserTasks(): void {
    this.tasks = this.taskService.getTasksByUserId(this.userId);
  }

  openModall(type: string, task?: Task): void {
    this.taskSelected = task;
    this[`show${type}Modal`] = true;
  }

  closeModal(type: string): void {
    this[`show${type}Modal`] = false;
    this.taskSelected = null;
  }

  trackById(index: number, task: Task): string {
    return task?.id;
  }

  onTaskSaved(): void {
    this.getUserTasks();
    this.closeModal('Form');
  }

  async deleteTask(): Promise<void> {
    try {
      await this.taskService.deleteTask(this.taskSelected.id);
      this.getUserTasks();
      this.utilService.successMessage('¡Great!', 'Task Removed successfully');
      this.closeModal('Delete');
    } catch (error) { }
  }

}
