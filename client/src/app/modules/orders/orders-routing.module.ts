import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderIndexComponent } from './order-index/order-index.component';


const routes: Routes = [
  {
    path:'',
    component: OrderIndexComponent
  },

  {
    path:'create',
    component: OrderCreateComponent
  },

  {
    path:':orderId',
    component: OrderEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
