import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GroundCoffeeMenuComponent } from './ground-coffee-menu/ground-coffee-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductService } from  'src/app/service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { BillingAddressComponent } from './order-summary/billing-address/billing-address.component';
import { GroundCoffeeItemComponent } from './ground-coffee-menu/ground-coffee-item/ground-coffee-item.component';
import { CartComponent } from './order-summary/cart/cart.component';
import { CartItemComponent } from './order-summary/cart/cart-item/cart-item.component';
import { MessengerService } from 'src/app/service/messenger.service';
import { PaymentComponent } from './order-summary/payment/payment.component';


const appRoutes : Routes = [
  {path : '' , component: HomeComponent},
   {path : 'groundcoffee' , component: GroundCoffeeMenuComponent,
   children: [{path: 'groundcoffeeitem', component:GroundCoffeeItemComponent}]},
   {path: 'story', component : StoryComponent},
   {path: 'checkout', component: CheckoutComponent},
   {path: 'ordersummary' , component: BillingAddressComponent},
   {path: 'payment', component: PaymentComponent},
   {path: 'ordersuccess', component: OrdersuccessComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    GroundCoffeeMenuComponent,
    StoryComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    NavbarComponent,
    BillingAddressComponent,
    GroundCoffeeItemComponent,
    CartComponent,
    CartItemComponent,
    PaymentComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiService, ProductService, MessengerService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
