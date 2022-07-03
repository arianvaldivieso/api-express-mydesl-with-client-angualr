import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';



import { Order } from '@orders/models/order';
import { OrderService } from '@orders/services/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  @Input() order!:Order;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit(): void {
  }

  deleteOrder(){
    this._order.delete(this.order.IdOrder);
    this.delete.emit(this.order.IdOrder);
  }

}
