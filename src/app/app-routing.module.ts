import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';


const routes: Routes = [
  // ✅ Redirect FIRST
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ✅ Login (public)
  { path: 'login', component: LoginComponent },

  // ✅ Main Menu (standalone)
  { path: 'main-menu', component: MainMenuComponent },

  // ✅ Home
  { path: 'home', component: HomeComponent },

  // ✅ Product
  { path: 'products', component: ProductsComponent },

  // ✅ About Us
  { path: 'about', component: AboutComponent },

  // ✅ FAQ
  { path: 'faq', component: FaqComponent },

  // ✅ Footer
  { path: 'footer', component: FooterComponent },
  // ✅ Cart
  { path: 'cart', component: CartComponent },
  // ✅ Shipping
  { path: 'shipping', component: ShippingComponent },
  // ✅ Payment
  { path: 'payment', component: PaymentComponent },
  // ✅ Confirmation
  { path: 'confirmation', component: ConfirmationComponent },
 // ✅ Header
  { path: 'header', component: HeaderComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}