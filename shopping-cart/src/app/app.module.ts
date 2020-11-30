import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';

import { HttpClientModule } from '@angular/common/http' //we should import it if you want to use api

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    FooterComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //added to use apis
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
