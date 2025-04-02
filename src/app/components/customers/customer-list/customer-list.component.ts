import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];
  isAdmin: boolean = false;

  constructor(
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.isAdmin = this.authService.getUserRole() === 'Admin';
  }

  deleteCustomer(index: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(index);
      this.customers = this.customerService.getCustomers();
    }
  }
}
