import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit, OnDestroy {

  // ─── Countdown ────────────────────────────────────────────────────────────

  countdown: number = 5;
  private intervalId: any;

  // ─── Order Details ────────────────────────────────────────────────────────

  orderNumber: string = '#SP-' + Math.floor(100000 + Math.random() * 900000);

  orderDetails = {
    productName: 'Ceramic Performance Brake Pads',
    productImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=120&q=80',
    qty: 1,
    subtotal: 49.99,
    gst: 9.00,
    shipping: 15.00,
    grandTotal: 73.99,
    estimatedDelivery: '3–5 Business Days'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Start countdown and auto-navigate to /home
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.goHome();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goHome(): void {
    clearInterval(this.intervalId);
    this.router.navigate(['/home']);
  }
}
