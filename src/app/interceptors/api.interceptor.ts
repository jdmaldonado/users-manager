import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
/** Services */
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private utilService: UtilService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: event.body?.data || [] })
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          if (error.error?.error) {
            errorMessage = `Error: ${error.error.error}`;
          } else {
            errorMessage = `Error Code: ${error.status},  Message: ${error.message}`;
          }
        }
        this.utilService.errorMessage('¡Oops!', errorMessage)
        return throwError(errorMessage);
      }),
    );
  }
}