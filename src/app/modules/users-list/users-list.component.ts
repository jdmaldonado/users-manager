import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/** User */
import { User } from 'src/app/models/user';
/** Services */
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

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
  showDeleteModal = false;

  /** Swal */
  removeMessageOptions: any;

  constructor(
    private userService: UserService,
    private utilService: UtilService,
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

  openModall(type: string, user?: User): void {
    this.userSelected = user;
    this[`show${type}Modal`] = true;
  }

  closeModal(type: string): void {
    this[`show${type}Modal`] = false;
    this.userSelected = null;
  }

  trackById(index: number, user: User): string {
    return user?.id;
  }

  onUserSaved(): void {
    this.getUsers();
    this.closeModal('Form');
  }

  async deleteUser(): Promise<void> {
    try {
      await this.userService.deleteUser(this.userSelected.id);
      this.getUsers();
      this.utilService.successMessage('¡Great!', 'User Removed successfully');
      this.closeModal('Delete');
    } catch (error) { }
  }

}
