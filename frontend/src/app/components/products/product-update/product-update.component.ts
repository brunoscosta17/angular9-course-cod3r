import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: IProduct = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id)
      .subscribe(product => this.product = product);
  }

  updateProduct(): void {
    this.productService.update(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto atualizado com sucesso!', 'msg_success');
        this.router.navigate(['products']);
      });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
