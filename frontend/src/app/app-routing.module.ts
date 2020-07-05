import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/create', component: ProductCreateComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}