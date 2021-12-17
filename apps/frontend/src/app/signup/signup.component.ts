import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserSignUp } from '@cv-maker/api-interfaces';

import { AuthService } from '../auth.service';

@Component({
  selector: 'cv-maker-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: UserSignUp = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  isSuccessfull: boolean | null = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isSuccessfull = null;
    this.errorMessage = '';

    this.form = {
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  onSubmit(form: NgForm): void {
    const { username, password, confirmPassword } = this.form;

    console.log({ form });

    this.authService.signup(username, password, confirmPassword).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessfull = true;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSuccessfull = false;
      },
    });
  }
}
