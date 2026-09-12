import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface PaymentMethod {
  id: string;
  label: string;
}

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  // ─── Payment Methods ──────────────────────────────────────────────────────

  paymentMethods: PaymentMethod[] = [
    { id: 'card', label: 'Credit / Debit Card' },
    { id: 'upi',  label: 'UPI / QR' },
    { id: 'cod',  label: 'Cash on Delivery' }
  ];

  selectedMethod: string = 'card';

  // ─── Amount Summary ───────────────────────────────────────────────────────

  totalAmount: number = 73.99;
  amountNote: string = 'Includes taxes & standard shipping.';

  // ─── Footer Data ─────────────────────────────────────────────────────────

  footerQuickLinks: { label: string; href: string }[] = [
    { label: 'Home Page',        href: '/home' },
    { label: 'Catalog Products', href: '/products' },
    { label: 'About Our Store',  href: '/about' },
    { label: 'Customer Support', href: '#' }
  ];

  footerCategories: { label: string; href: string }[] = [
    { label: 'Brake Systems',          href: '#' },
    { label: 'Engine Components',      href: '#' },
    { label: 'Air & Oil Filters',      href: '#' },
    { label: 'Electrical & Batteries', href: '#' }
  ];

  constructor(private router: Router) {}

  selectMethod(id: string): void {
    this.selectedMethod = id;
  }

  /** Navigate back to Shipping */
  goBack(): void {
    this.router.navigate(['/shipping']);
  }

  /** Place order and navigate to Confirmation */
  placeOrder(): void {
    this.router.navigate(['/confirmation']);
  }
}
