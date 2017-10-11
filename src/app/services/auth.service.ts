import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  currentUser: User;

  private oiqTokenKey: string = 'oiq-token';
  private oiqExpiresKey: string = 'oiq-expires';

  constructor(private userService: UserService) {}

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  authenticate(username: string, password: string): User {
    const user = this.userService.getUserByUserName(username);
    if (user && user.password === password) {
      this.currentUser = user;

      // Store user session in localStorage
      const now: Date = new Date();
      localStorage.setItem(this.oiqTokenKey, user.id.toString());
      localStorage.setItem(this.oiqExpiresKey,
        (now.setMinutes(now.getMinutes()+30)).toString());

    } else {
      this.currentUser = null;
    }
    return this.currentUser;
  }

  logOut() {
    localStorage.removeItem(this.oiqTokenKey);
    localStorage.removeItem(this.oiqExpiresKey);
  }

  getCurrentUser() {
    const userToken = localStorage.getItem(this.oiqTokenKey);
    if (!userToken) {
      return null;
    }
    return this.userService.getUserById(+userToken);
  }
}
