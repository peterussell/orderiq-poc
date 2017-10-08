import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { POListComponent } from './po-list/po-list.component';
import { POItemComponent } from './po-list/po-item/po-item.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

// Services & Guards
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard.service';
import { POEditComponent } from './po-edit/po-edit.component';
import { HeaderComponent } from './header/header.component';
import { POCreateComponent } from './po-create/po-create.component';

@NgModule({
  declarations: [
    AppComponent,
    POListComponent,
    POItemComponent,
    POCreateComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    POEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
