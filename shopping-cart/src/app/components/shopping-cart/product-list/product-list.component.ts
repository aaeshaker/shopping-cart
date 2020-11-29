import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private ProductService: ProductService) { } //this is called Dependency Injection DI

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((products) => {  //added to use apis
      this.productList = products;
    });
  }

}
