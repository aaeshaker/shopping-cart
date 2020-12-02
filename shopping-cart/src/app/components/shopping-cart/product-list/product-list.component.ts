import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishlist: number[] = [];

  constructor(private ProductService: ProductService, private wishlistService: WishlistService) { } //this is called Dependency Injection DI

  //we should recieve data related to component in ngOnInit() 
  ngOnInit(): void {
    this.loadProducts();
    // this.ProductService.getProducts().subscribe((products) => {
    //   this.productList = products;
    //   this.wishlistService.getWishlist().subscribe((res: any) => {
    //     this.wishList = res;
    //     this.productList.forEach(element => {
    //       element['addedToWishlist'] = this.loadWishlist(element);
    //     })
    //   })
    // });
    this.loadWishlist();
  }

  loadProducts() {
    this.ProductService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  // loadWishlist(productItem) {
  //   let index = this.wishList.findIndex(element => element.id === productItem.id)
  //   return index === -1 ? false : true;
  //   // if (res.findIndex(element=>element.id===this.productItem.id)!==-1){
  //   //     this.addedToWishlist = true;
  //   // }
  //   // res.forEach(element => {
  //   //   if (element.id === this.productItem.id) {
  //   //  this.addedToWishlist = true;
  //   //   }
  //   // });
  // }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe((productIds) => {
      console.log(productIds);
      this.wishlist = productIds;
    });
  }
}
