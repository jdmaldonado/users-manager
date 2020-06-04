import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/** Models */
import { User } from 'src/app/models/user';
/** Services */
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() onSaved = new EventEmitter<void>();

  public userForm: FormGroup;
  public submitted = false;

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    this.initForm();
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  private initForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get form() { return this.userForm.controls; }

  public async saveUserInfo(): Promise<void> {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    const data = this.userForm.value;

    try {
      if (this.user) {
        await this.userService.updateUser(this.user.id, data)
      } else {
        await this.userService.createUser(data);
      }
      this.userForm.reset();
      this.onSaved.emit();
      this.utilService.successMessage('¡Great!', 'Process complete successfully');
    } catch (error) {}
  }

}
