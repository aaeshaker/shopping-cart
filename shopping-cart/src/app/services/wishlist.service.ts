import { Injectable } from '@angular/core';

import { wishlistUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  //used to load the wishlist
  getWishlist() {
    return this.http.get(wishlistUrl);
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
