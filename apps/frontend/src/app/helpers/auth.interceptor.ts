import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../token-storage.service';

@Injectable({ providedIn: 'root' })
export class authInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    let authReq = req;

    if (token !== null) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(authReq);
  }
}

export const authInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: authInterceptor,
  multi: true,
};
