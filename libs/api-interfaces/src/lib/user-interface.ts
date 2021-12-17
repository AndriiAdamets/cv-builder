export interface UserLogin {
  username: string;
  password: string;
}

export interface UserSignUp extends UserLogin {
  confirmPassword: string;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
