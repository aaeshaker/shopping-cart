import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../../../services/cart.service';

import { WishlistService } from './../../../../services/wishlist.service';
import { element } from 'protractor';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product; //this is called input decorator instead of creating another service for product-item

  addedToWishlist: boolean = false;0

  constructor(private msg: MessengerService, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    
    // this.loadWishlist();
  }

  //used to add product to cart after clicking and send msg 
  handelAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    });
  }

  //to change the color of heart after clicking
  // onClick(event) {
  //   event.target.classList.add('fa-heart-by-click')
  // }

  //used to add product to wishlist after clicking
  handelAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    });
  }

  handelRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    });
  }

  // loadWishlist() {
  //   this.wishlistService.getWishlist().subscribe((res: any) => {
  //     let index = res.findIndex(element => element.id === this.productItem.id)
  //     this.addedToWishlist = index === -1 ? false : true;
  //     // if (res.findIndex(element=>element.id===this.productItem.id)!==-1){
  //     //     this.addedToWishlist = true;
  //     // }
  //     // res.forEach(element => {
  //     //   if (element.id === this.productItem.id) {
  //     //  this.addedToWishlist = true;
  //     //   }
  //     // });
  //   })
  // }
}
