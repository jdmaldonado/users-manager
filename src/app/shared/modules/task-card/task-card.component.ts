import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/** Model */
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @Output() onEditClick = new EventEmitter<void>();
  @Output() onDeleteClick = new EventEmitter<void>();

  image: string;

  constructor() { }

  ngOnInit(): void {
    this.image = `https://i.picsum.photos/id/${this.getRamdomId()}/48/48.jpg`;
  }

  getRamdomId(): number {
    const number = Math.random() * 100
    return parseInt(number.toString(), 10)
  }

}
