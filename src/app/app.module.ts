import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// View Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { POListComponent } from './purchase-order/list/po-list.component';
import { POItemComponent } from './purchase-order/list/item/po-item.component';
import { POCreateComponent } from './purchase-order/create/po-create.component';

// Services, Guards, Routing
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PurchaseOrderService } from './services/purchase-order.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    POListComponent,
    POItemComponent,
    POCreateComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, PurchaseOrderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
