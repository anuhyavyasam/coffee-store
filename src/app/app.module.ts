import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GroundCoffeeMenuComponent } from './ground-coffee-menu/ground-coffee-menu.component';
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
import { WholeBeanMenuComponent } from './whole-bean-menu/whole-bean-menu.component';
import { WholeBeanItemComponent } from './whole-bean-menu/whole-bean-item/whole-bean-item.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import {StorageServiceModule} from 'angular-webstorage-service';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import {AlertModule} from './_alert';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    CartNotificationComponent,
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
    WholeBeanMenuComponent,
    WholeBeanItemComponent,
    LoginComponent,
    MapComponent,
    
  ],

  imports: [
    AlertModule,
    BrowserModule,
    AppRoutingModule, 
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    NgxPageScrollCoreModule
  ],
  providers: [ApiService, ProductService, MessengerService, ScrollTopService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
