import { CartItem } from 'src/app/models/cart-item';
import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { cartUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //to use api, you should include HttpClient in the constructor of the service
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem properties (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      //here map method would iterate through each and every cart-item that we obtain inside the array
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          // let i "in" cartItems means that i is index not item 
          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  //used to send data after clicking the button to backend server (which is json-server in our case here)
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product }); //.post() used to send data
  }

}
