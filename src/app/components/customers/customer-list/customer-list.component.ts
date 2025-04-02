import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  // Fetch customers from local storage
  loadCustomers() {
    this.customers = this.customerService.getCustomers();
  }

  // Navigate to the customer form for editing
  editCustomer(index: number) {
    this.router.navigate(['/customer-form'], { queryParams: { index } });
  }

  // Delete customer with confirmation
  confirmDelete(index: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(index);
      this.loadCustomers(); // Refresh the list after deletion
    }
  }

  // Check if the logged-in user is an Admin
  isAdmin(): boolean {
    return this.authService.getUserRole() === 'Admin';
  }
}
