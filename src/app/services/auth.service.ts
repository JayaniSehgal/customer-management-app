import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'admin@gmail.com', password: 'admin123', role: 'Admin' },
    { email: 'user@gmail.com', password: 'user123', role: 'User' },
  ];

  login(email: string, password: string): string | null {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user.role;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUserRole(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
