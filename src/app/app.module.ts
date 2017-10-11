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
import { POCreateComponent } from './purchase-order/create/po-create.component';

// Services, Guards, Routing
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { BudgetService } from './services/budget.service';
import { PurchaseOrderService } from './services/purchase-order.service';
import { UserService } from './services/user.service';
import { SupplierService } from './services/supplier.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    POListComponent,
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
  providers: [
    AuthService,
    AuthGuard,
    BudgetService,
    PurchaseOrderService,
    SupplierService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
