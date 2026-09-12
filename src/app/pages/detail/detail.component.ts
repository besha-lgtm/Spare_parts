import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Spec {
  label: string;
  value: string;
}

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  product: any;

  // ─── Technical Specifications ────────────────────────────────────────────

  specs: Spec[] = [
    { label: 'Material Grade',        value: 'OEM Spec Heat Treated' },
    { label: 'Manufacturer Warranty', value: '24 Months / 24,000 Miles' },
    { label: 'Weight',                value: '1.85 kg' },
    { label: 'Origin',                value: 'Germany / Japan' }
  ];

  // ─── Footer Data ─────────────────────────────────────────────────────────

  footerQuickLinks: { label: string; href: string }[] = [
    { label: 'Home Page',        href: '/home' },
    { label: 'Catalog Products', href: '/products' },
    { label: 'About Our Store',  href: '/about' },
    { label: 'Customer Support', href: '#' }
  ];

  footerCategories: { label: string; href: string }[] = [
    { label: 'Brake Systems',         href: '#' },
    { label: 'Engine Components',     href: '#' },
    { label: 'Air & Oil Filters',     href: '#' },
    { label: 'Electrical & Batteries',href: '#' }
  ];

  // ─── Products (local lookup) ──────────────────────────────────────────────

  products = [
    {
      id: 1,
      brand: 'BREMBO',
      sku: 'BRK-4091',
      title: 'SKF Bearing 6205',
      description: 'High-performance bearing suitable for industrial machinery.',
      price: 49.99,
      image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F2868038-01',
      stock: 'In Stock',
      category: 'Brake System',
      rating: 4.8
    },
    {
      id: 2,
      brand: 'BOSCH',
      sku: 'BRK-8821',
      title: 'Proximity Sensor',
      description: 'Accurate sensor for machine monitoring and safety systems.',
      price: 89.50,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8X9fifguEC5Lkw79AIb3kMSrsNpgtOXGQoOwUQ8uAkA&s=10',
      stock: 'In Stock',
      category: 'Electrical',
      rating: 4.6
    },
    {
      id: 3,
      brand: 'MANN-FILTER',
      sku: 'FLT-1002',
      title: 'Servo Motor',
      description: 'Reliable servo motor for automation and robotics systems.',
      price: 14.25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWISgQRAW_xCYovVBA9zADrs-tb2PBoVIDX0IdNltQQ&s=10',
      stock: 'In Stock',
      category: 'Engine Components',
      rating: 4.7
    },
    {
      id: 4,
      brand: 'CASTROL',
      sku: 'OIL-5030',
      title: 'Hydraulic Pump',
      description: 'Durable pump designed for heavy-duty industrial use.',
      price: 42.00,
      image: 'https://images.jdmagicbox.com/quickquotes/images_main/-4wvag6df.jpg',
      stock: 'In Stock',
      category: 'Hydraulics',
      rating: 4.5
    },
    {
      id: 5,
      brand: 'DENSO',
      sku: 'ENG-3321',
      title: 'ISO Standard Pneumatic Actuators',
      description: 'Rugged pneumatic actuators engineered for reliable industrial automation.',
      price: 145.00,
      image: 'https://www.smcworld.com/upfiles/etc/series/en-jp/img1-C85C75-G.jpg',
      stock: 'Low Stock',
      category: 'Pneumatics',
      rating: 4.9
    },
    {
      id: 6,
      brand: 'BOSCH',
      sku: 'ENG-4112',
      title: 'Steam Boiler Valves',
      description: 'Precision-engineered valves for critical steam boiler systems.',
      price: 98.75,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWg70bUC8tWpr3WG8Ds1vntpqdHdNZhOBQ9iVtSnzaw&s=10',
      stock: 'Out of Stock',
      category: 'Engine Components',
      rating: 4.4
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // subscribe allows Detail → Detail navigation (re-uses component instance)
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.products.find(p => p.id === id);
    });
  }

  /** Navigate to Shipping page */
  goToShipping(): void {
    this.router.navigate(['/shipping']);
  }

  /** Navigate back to Products list */
  goBackToProducts(): void {
    this.router.navigate(['/products']);
  }
}