import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { OrderService } from '@orders/services/order.service';
import { UserService } from '@users/services/user.service';

import { User } from '@users/models/user';
import { Order } from '@orders/models/order';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  users:User[] = [];
  order!:Order;
  orderId!:number;

  orderForm: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _user:UserService,
    private _order: OrderService
  ) {

    this.orderForm = this.fb.group({
      IdUser: ['', [Validators.required]],
      OrderNumber: ['',[Validators.required]],
      DateTime: ['',[Validators.required]],
      ProviderName: ['',[Validators.required]],
      Observation: ['',[Validators.required]],
      TotalValue: ['',[Validators.required]],
      Status: ['',Validators.required]
    });

  }

  ngOnInit(): void {

    this.getUsers();

  }

  async getUsers(){
    let response:any = await this._user.getUsers();

    this.users = response.data;
  }


  async onSubmit(){
    let payload = this.orderForm.value;

    let response:any = await this._order.storeOrder(payload);

    this._router.navigate(['/orders',response.id]);

  }
}
