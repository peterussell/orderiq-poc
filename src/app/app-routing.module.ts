import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { POListComponent } from './purchase-order/list/po-list.component';
import { POCreateComponent } from './purchase-order/create/po-create.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BudgetComponent } from './admin/budget/budget.component';
import { SupplierComponent } from './admin/supplier/supplier.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  // TODO: use child guards
  // Admin
  { path: 'admin', children: [
    { path: 'budget', component: BudgetComponent },
    { path: 'supplier', component: SupplierComponent }
  ]},

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'purchase-order', canActivate: [AuthGuard], children: [
    { path: '', component: POListComponent, canActivate: [AuthGuard] },
    { path: 'new', component: POCreateComponent, canActivate: [AuthGuard] }
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
