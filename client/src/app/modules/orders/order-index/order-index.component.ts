import { Component, OnInit } from '@angular/core';
import { OrderService } from '@orders/services/order.service';

import { Order } from '@orders/models/order';

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.scss']
})
export class OrderIndexComponent implements OnInit {

  orders:Order[] = [];

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }


  async getOrders(){
    let response:any = await this._order.getOrders();
    this.orders = response.data;
  }


  async deleteOrder(id:any){
    await this._order.delete(id);
    this.getOrders();
  }


}
