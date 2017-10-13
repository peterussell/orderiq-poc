import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService, AuthResult } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  lastError: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.lastError = '';

    const result: AuthResult = this.authService.authenticate(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    if (result.success) {
      this.router.navigate(['/']);
    } else {
      this.lastError = result.error;
    }
  }
}
