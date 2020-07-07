import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/footer/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private route: Router,
    headerService: HeaderService
  ) {
      headerService.headerData = {
        title: 'Cadastro de produtos',
        icon: 'storefront',
        routerUrl: 'products'
      };
    }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(['/products/create']);
  }

}
