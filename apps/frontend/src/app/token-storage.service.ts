import { Injectable } from '@angular/core';
// import { config } from 'dotenv';

// config();

const TOKEN_KEY = 'cvMakerToken';
const USER_KEY = 'cvMakerUser';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any) {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : {};
  }
}
