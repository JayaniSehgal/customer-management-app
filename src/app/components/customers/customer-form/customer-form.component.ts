import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  editingIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const storedCustomer = localStorage.getItem('editingCustomer');
    if (storedCustomer) {
      const customerData = JSON.parse(storedCustomer);
      this.customerForm.patchValue(customerData.customer);
      this.editingIndex = customerData.index;
    }
  }

  onSubmmit(): void {
    if (this.customerForm.valid) {
      if (this.editingIndex !== null) {
        this.customerService.editCustomer(
          this.editingIndex,
          this.customerForm.value
        );
      } else {
        this.customerService.addCustomer(this.customerForm.value);
      }
      localStorage.removeItem('editingCustomer');
      this.router.navigate(['/customers']);
    }
  }
}
