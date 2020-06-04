import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/** Model */
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
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
