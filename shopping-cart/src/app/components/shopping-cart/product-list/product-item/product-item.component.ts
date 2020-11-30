import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';

import { CartService } from './../../../../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product; //this is called input decorator instead of creating another service for product-item

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  //used to add product to cart after clicking and send msg 
  handelAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    });
  }

  //to change the color of heart after clicking
  onClick(event) {
    event.target.classList.add('fa-heart-by-click');

  }
}
