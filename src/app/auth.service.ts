import { Injectable } from '@angular/core';

import { UserService } from './users/user.service';
import { User } from './users/user.model';

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
      return user;
    } else {
      return null;
    }
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
