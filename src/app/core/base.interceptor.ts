import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {ConstantService} from '../service/constant.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {StorageService} from '../service/storage.service';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private constant: ConstantService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.startsWith('https')) {
      req = req.clone({
        url: req.url,
        setHeaders: {Authorization: this.constant.user.token ? 'Bearer ' + this.constant.user.token : ''}
      });
    }
    return next.handle(req).pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            if (!evt.ok) {
              this.constant.alert(evt.body);
            }
          }
        })
    );
  }
}
