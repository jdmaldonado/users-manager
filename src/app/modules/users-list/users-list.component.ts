import { Component, OnInit } from '@angular/core';
/** User */
import { User } from 'src/app/models/user';
/** Services */
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.users = this.userService.getUsers();
  }

  trackById(index: number, user: User): string {
    return user?.id;
  }

}
