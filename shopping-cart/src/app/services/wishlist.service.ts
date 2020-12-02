import { Injectable } from '@angular/core';

import { wishlistUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  //used to get the wishlist and return it as an array not object
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = [];
        result.forEach(item => productIds.push(item.id));
        return productIds;
      })
    )
  }

  //add to wishlist
  addToWishlist(productId) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  //remove from wishlist
  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
