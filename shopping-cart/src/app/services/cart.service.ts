import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { cartUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem properties (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map(item => { //here map method would iterate through each and every cart-item that we obtain inside the array
        console.log(item);
        return item;
      })
    ); //.get() used to receive data
  }
  
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product }); //.post() used to send data
  }

}
