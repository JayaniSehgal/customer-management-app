import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: any[] = JSON.parse(
    localStorage.getItem('customers') || '[]'
  );

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: any) {
    this.customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  editCustomer(index: number, updatedCustomer: any) {
    this.customers[index] = updatedCustomer;
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
}
