import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnChanges, OnInit {

  products: IProduct[];
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnChanges(): void {
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): any {
    this.productService.read()
      .subscribe((response) => this.products = response);
  }

}
