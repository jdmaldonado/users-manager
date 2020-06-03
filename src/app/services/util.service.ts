import { Injectable } from '@angular/core';
/** Services */
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private toastr: ToastrService) { }

  public successMessage(title: string, message: string): void {
    this.toastr.success(message, title);
  }

  public errorMessage(title: string, message: string): void {
    this.toastr.error(message, title);
  }
}
