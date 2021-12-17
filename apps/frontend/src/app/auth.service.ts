import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService // public jwtHelper: JwtHelperService
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/auth/login', { username, password });
  }

  signup(username: string, password: string, confirmPassword: string) {
    return this.http.post('/api/auth/signup', {
      username,
      password,
      confirmPassword,
    });
  }

  isAuthenticated(): boolean {
    const token = this.tokenStorage.getToken();

    // return !this.jwtHelper.isTokenExpired(token || undefined);
    return !!token;
  }
}
