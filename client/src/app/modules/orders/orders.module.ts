import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';

import { SharedModule } from '@shared/shared.module';

import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderCreateComponent } from './order-create/order-create.component';

@NgModule({
  declarations: [
    OrderIndexComponent,
    OrderCardComponent,
    OrderEditComponent,
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    OrderIndexComponent,
    OrderCardComponent,
    OrderEditComponent,
    OrderCreateComponent
  ]
})
export class OrdersModule { }
