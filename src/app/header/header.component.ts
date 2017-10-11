import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  onLogInClick() {
    console.log('log in');
    this.router.navigate(['/login']);
  }

  onLogOutClick() {
    console.log('log out');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
