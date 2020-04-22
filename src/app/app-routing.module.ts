import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GroundCoffeeMenuComponent } from './ground-coffee-menu/ground-coffee-menu.component';
import { WholeBeanMenuComponent } from './whole-bean-menu/whole-bean-menu.component';
import { StoryComponent } from './story/story.component';
import { CartComponent } from './order-summary/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { BillingAddressComponent } from './order-summary/billing-address/billing-address.component';
import { MapComponent } from './map/map.component';



const appRoutes : Routes = [
  {path : '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
   {path : 'groundcoffee' , component: GroundCoffeeMenuComponent},
   {path : 'wholebean' , component: WholeBeanMenuComponent},
   {path: 'story', component : StoryComponent},
   {path: 'checkout', component: CheckoutComponent},
   {path: 'revieworder', component: CartComponent},
   {path: 'billing' , component: BillingAddressComponent},
   {path: 'ordersuccess', component: OrdersuccessComponent},
   {path: 'storelocator', component: MapComponent},
   {path : '**', redirectTo : ''}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false, scrollPositionRestoration: 'top' })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
