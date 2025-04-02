import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  signup() {
    if (this.name.length < 3) {
      this.errorMessage = 'Name must be at least 3 characters long';
      return;
    }
    if (this.email.includes('a')) {
      this.errorMessage = 'Please enter a valid email';
      return;
    }
    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        email: this.email,
        password: this.password,
        role: 'User',
      })
    );
    alert('User added sucessfully!');
    this.router.navigate(['/']);
  }
}
