import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customers/customer-form/customer-form.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotfoundComponent } from './components/others/notfound/notfound.component';
import { AccessDeniedComponent } from './components/others/access-denied/access-denied.component';

import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CustomerListComponent,
    CustomerFormComponent,
    NavbarComponent,
    NotfoundComponent,
    AccessDeniedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
