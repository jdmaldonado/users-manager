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
  userSelected: User;

  /** Flags */
  showFormModal = false;

  /** Swal */
  removeMessageOptions: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.removeMessageOptions = {
      icon: 'question',
      title: 'Remove User',
      text: 'Are you sure do you want to remove this user ?',
      confirmButtonColor: '#00d1b2',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'Cancel'
    }
  }

  private getUsers(): void {
    this.users = this.userService.getUsers();
  }

  openFormModal(user?: User): void {
    this.userSelected = user;
    this.showFormModal = true;
  }

  closeModal(): void {
    this.showFormModal = false;
    this.userSelected = null;
  }

  trackById(index: number, user: User): string {
    return user?.id;
  }

  onUserSaved(): void {
    this.getUsers();
    this.closeModal();
  }

}
