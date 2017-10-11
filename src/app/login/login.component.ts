import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.authenticate(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    console.log(this.authService.isAuthenticated());
    this.loginForm.reset();
    this.router.navigate(['/']);
  }
}
