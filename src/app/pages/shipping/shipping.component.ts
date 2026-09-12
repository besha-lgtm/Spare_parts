import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DeliveryOption {
  id: string;
  icon: string;
  label: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-shipping',
  standalone: false,
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {

  // ─── Form Options ─────────────────────────────────────────────────────────

  states: string[] = [
    'Telangana',
    'Andhra Pradesh',
    'Karnataka',
    'Tamil Nadu',
    'Maharashtra'
  ];

  countries: string[] = [
    'India',
    'United States',
    'United Kingdom'
  ];

  deliveryOptions: DeliveryOption[] = [
    {
      id: 'standard',
      icon: 'fa-truck',
      label: 'Standard Shipping',
      description: 'Delivery within 3–5 business days',
      price: 15.00
    },
    {
      id: 'express',
      icon: 'fa-bolt',
      label: 'Express Shipping',
      description: 'Delivery within 1–2 business days',
      price: 25.00
    }
  ];

  selectedDelivery: string = 'standard';

  // ─── Order Summary ────────────────────────────────────────────────────────

  orderSummary = {
    productName: 'Ceramic Performance Brake Pads',
    productImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=150&q=80',
    qty: 1,
    subtotal: 49.99,
    gst: 9.00,
    shipping: 15.00,
    grandTotal: 73.99
  };

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

  /** Navigate forward to Payment */
  goToPayment(): void {
    this.router.navigate(['/payment']);
  }

  /** Navigate back to Detail / Products */
  goBack(): void {
    this.router.navigate(['/products']);
  }

  selectDelivery(id: string): void {
    this.selectedDelivery = id;
  }
}
