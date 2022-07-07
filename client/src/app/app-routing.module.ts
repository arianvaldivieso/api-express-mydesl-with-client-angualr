import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
  },

  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },

  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
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
