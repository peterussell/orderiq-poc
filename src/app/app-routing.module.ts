import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { POListComponent } from './po-list/po-list.component';
import { POItemComponent } from './po-list/po-item/po-item.component';
import { POEditComponent } from './po-edit/po-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  // TODO: use child guards
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // Working here: child paths don't seem to be working
  { path: 'purchase-order', children: [
    { path: 'list', component: POListComponent, canActivate: [AuthGuard] },
    { path: ':id', component: POItemComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: POEditComponent, canActivate: [AuthGuard] }
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
