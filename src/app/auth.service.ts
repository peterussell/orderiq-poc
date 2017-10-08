import { Injectable } from '@angular/core';

import { UserService } from './user/user.service';
import { User } from './user/user.model';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  authenticate(username: string, password: string): User {
    const user = this.userService.getUserByUserName(username);
    if (user && user.password === password) {
      this.isLoggedIn = true;
      return user;
    } else {
      this.isLoggedIn = false;
      return null;
    }
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
