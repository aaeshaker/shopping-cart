import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product; //this is called input decorator

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handelAddToCart() {
    this.msg.sendMsg(this.productItem);
  }
}
