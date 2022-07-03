import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
  },

  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
