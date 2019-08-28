import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order/orderconfirmation.component";
import { ShoppingCartComponent } from "./components/shopping/shoppingcart.component";
import { StoreFrontComponent } from "./components/store/storefront.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populatedcart.route-gaurd";
import { DeliveryOptionsDataService } from "./services/deliveryoptions.service";
import { ProductsDataService } from "./services/products.service";
import { ShoppingCartService } from "./services/shoppingcart.service";
import { LocalStorageServie, StorageService } from "./services/storage.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
