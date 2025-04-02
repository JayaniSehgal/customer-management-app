import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customers/customer-form/customer-form.component';
import { NotfoundComponent } from './components/others/notfound/notfound.component';
import { AccessDeniedComponent } from './components/others/access-denied/access-denied.component';

import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'customers',
    component: CustomerListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent,
    canActivate: [authGuard],
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
