import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogIn() {
    console.log(`username: ${this.username} / password: ${this.password}`)
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['purchase-order']);
    } else {
      this.router.navigate(['']);
    }
  }
}
