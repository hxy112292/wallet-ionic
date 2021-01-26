import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {ConstantService} from '../service/constant.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {StorageService} from '../service/storage.service';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(
      private alertService: AlertService,
      private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.startsWith('http')) {
      req = req.clone({
        url: req.url,
        setHeaders: {Authorization: this.userService.user.token ? 'Bearer ' + this.userService.user.token : ''}
      });
    }
    return next.handle(req).pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            if (!evt.ok) {
              this.alertService.alert(evt.body);
            }
          }
        })
    );
  }
}
