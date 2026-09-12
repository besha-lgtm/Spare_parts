import { Component } from '@angular/core';

interface Product {
  id: number;
  brand: string;
  sku: string;
  title: string;
  description: string;
  price: number;
  image: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  discount?: number;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // ─── Filter Data ───────────────────────────────────────────────────────────

  categories: string[] = [
    'All Categories',
    'Brake Systems',
    'Engine Components',
    'Suspension',
    'Electrical'
  ];

  brands: string[] = [
    'Brembo', 'Bosch', 'Castrol', 'Denso', 'K&N', 'Philips'
  ];

  sortOptions: string[] = [
    'Relevance',
    'Price: Low to High',
    'Price: High to Low',
    'Newest Arrivals'
  ];

  // ─── Footer Data ───────────────────────────────────────────────────────────

  footerQuickLinks: { label: string; href: string }[] = [
    { label: 'Home Page', href: '/home' },
    { label: 'Catalog Products', href: '/products' },
    { label: 'About Our Store', href: '/about' },
    { label: 'Customer Support', href: '#' }
  ];

  footerCategories: { label: string; href: string }[] = [
    { label: 'Brake Systems', href: '#' },
    { label: 'Engine Components', href: '#' },
    { label: 'Air & Oil Filters', href: '#' },
    { label: 'Electrical & Batteries', href: '#' }
  ];

  // ─── Products ──────────────────────────────────────────────────────────────

  products: Product[] = [
    {
      id: 1,
      brand: 'BREMBO',
      sku: 'BRK-4091',
      title: 'SKF Bearing 6205',
      description: 'High-performance bearing suitable for industrial machinery.',
      price: 49.99,
      discount: 10,
      stockStatus: 'In Stock',
      image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F2868038-01'
    },
    {
      id: 2,
      brand: 'BOSCH',
      sku: 'BRK-8821',
      title: 'Proximity Sensor',
      description: 'Accurate sensor for machine monitoring and safety systems.',
      price: 89.50,
      stockStatus: 'In Stock',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8X9fifguEC5Lkw79AIb3kMSrsNpgtOXGQoOwUQ8uAkA&s=10'
    },
    {
      id: 3,
      brand: 'MANN-FILTER',
      sku: 'FLT-1002',
      title: 'Servo Motor',
      description: 'Reliable servo motor for automation and robotics systems.',
      price: 14.25,
      discount: 5,
      stockStatus: 'In Stock',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWISgQRAW_xCYovVBA9zADrs-tb2PBoVIDX0IdNltQQ&s=10'
    },
    {
      id: 4,
      brand: 'CASTROL',
      sku: 'OIL-5030',
      title: 'Hydraulic Pump',
      description: 'Durable pump designed for heavy-duty industrial use.',
      price: 42.00,
      discount: 20,
      stockStatus: 'In Stock',
      image: 'https://images.jdmagicbox.com/quickquotes/images_main/-4wvag6df.jpg'
    },
    {
      id: 5,
      brand: 'DENSO',
      sku: 'ENG-3321',
      title: 'ISO Standard Pneumatic Actuators (Air Cylinders)',
      description: 'Rugged, interchangeable ISO standard pneumatic actuators engineered for reliable, high-cycle industrial automation.',
      price: 145.00,
      stockStatus: 'Low Stock',
      image: 'https://www.smcworld.com/upfiles/etc/series/en-jp/img1-C85C75-G.jpg'
    },
    {
      id: 6,
      brand: 'BOSCH',
      sku: 'ENG-4112',
      title: 'Steam Boiler Valves',
      description: 'Precision-engineered flow and safety valves for critical steam boiler systems.',
      price: 98.75,
      discount: 5,
      stockStatus: 'Out of Stock',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWg70bUC8tWpr3WG8Ds1vntpqdHdNZhOBQ9iVtSnzaw&s=10'
    }
  ];
}