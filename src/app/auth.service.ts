import { Injectable } from '@angular/core';

import { UserService } from './user/user.service';
import { User } from './user/user.model';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private userService: UserService) {}

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  authenticate(username: string, password: string): User {
    const user = this.userService.getUserByUserName(username);
    if (user && user.password === password) {
      this.currentUser = user;
    } else {
      this.currentUser = null;
    }
    return this.currentUser;
  }

  logOut() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
