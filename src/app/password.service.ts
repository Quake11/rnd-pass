import { Injectable } from '@angular/core';

@Injectable()
export class PasswordService {

  password: string = "test_password";

  getPassword(): string {
    return Math.random().toString(36).slice(-8);
  }

  constructor() { }

}
