import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userName: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserName();
  }

  // Load the logged-in user's name
  loadUserName() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user?.email ? user.email.split('@')[0] : null; // Extract name from email
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  // Handle logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Redirect to login page
  }
}
