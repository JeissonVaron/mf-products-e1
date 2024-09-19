import { Component, OnInit } from '@angular/core';
import { ResponseProducts } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ResponseProducts[];

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAll().subscribe(
      (response: ResponseProducts[]) => {
        this.products = response;
      }
    )
  }
}
