import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/product';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems = [
  //   { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
  //   { id: 2, productId: 3, productName: 'Test 3', qty: 5, price: 50 },
  //   { id: 3, productId: 1, productName: 'Test 2', qty: 3, price: 150 },
  //   { id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 200 }
  // ];

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) { } //because we use these two services down

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  //used to recieve msg from button after sending it from handleAddToCart() in product-item.component.ts
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  //used to display all added cart items 
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items; //to avoid empty cart after refreshing 
      this.calcCartTotal();
      // console.log(items);
    });
  }

  //used to calculate the total price
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    });
  }

  // addProductToCart(product: Product) {

  //   let productExists = false;

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++;
  //       productExists = true;
  //       break;
  //     }
  //   }

  //   if (!productExists) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     });
  //   }

  // this.cartTotal = 0;
  // //we write it here because we want to run it when the component is loaded
  // //this method used to calculate the total price
  // this.cartItems.forEach(item => {
  //   this.cartTotal += (item.qty * item.price)
  // });

  //   this.calcCartTotal();
  // }
}
