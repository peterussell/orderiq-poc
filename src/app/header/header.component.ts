import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    if (!this.authService.isAuthenticated()) { return false };
    return this.currentUser.isAdmin();

  }

  onLogInClick() {
    this.router.navigate(['/login']);
  }

  onLogOutClick() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  getUserName() {
    const currentUser = this.authService.getCurrentUser();
    return currentUser ? currentUser.getName() : '';
  }
}
