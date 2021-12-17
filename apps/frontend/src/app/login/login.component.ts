import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserLogin } from '@cv-maker/api-interfaces';

import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'cv-maker-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = {
    username: '',
    password: '',
  };
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log('loggen in');
    }
    this.errorMessage = '';
  }

  onSubmit(form: NgForm): void {
    const { username, password } = this.user;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.access_token);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
