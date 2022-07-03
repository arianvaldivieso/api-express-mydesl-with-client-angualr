import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsIndexComponent } from './products-index/products-index.component';

const routes: Routes = [
  {
    path:'',
    component: ProductsIndexComponent
  },
  {
    path:'create',
    component: ProductCreateComponent
  },
  {
    path:':idProduct',
    component: ProductEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
