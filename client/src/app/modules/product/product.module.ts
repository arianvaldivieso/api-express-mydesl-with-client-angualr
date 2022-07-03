import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductsIndexComponent } from './products-index/products-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsIndexComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsIndexComponent
  ]
})
export class ProductModule { }
