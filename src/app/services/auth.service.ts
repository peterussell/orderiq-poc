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

  authenticate(username: string, password: string): AuthResult {
    this.currentUser = null; // reset
    const user = this.userService.getUserByUserName(username);

    // No user found
    if (!user) {
      return new AuthResult(false, 'User not found');
    }

    // Incorrect password
    if (user.password !== password) {
      return new AuthResult(false, 'Incorrect password');
    }

    // Success
    this.currentUser = user;
    // Store user session in localStorage
    const now: Date = new Date();
    localStorage.setItem(this.oiqTokenKey, user.id.toString());
    localStorage.setItem(this.oiqExpiresKey,
      (now.setMinutes(now.getMinutes()+30)).toString()
    );
    return new AuthResult(true, '');
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

export class AuthResult {
  constructor(
    public success: boolean,
    public error?: string
  ) {}
}
