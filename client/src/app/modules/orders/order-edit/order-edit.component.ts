import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { OrderService } from '@orders/services/order.service';
import { UserService } from '@users/services/user.service';

import { User } from '@users/models/user';
import { Order } from '@orders/models/order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  users:User[] = [];
  order!:Order;
  orderId!:number;

  orderForm: FormGroup;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _user:UserService,
    private _order: OrderService
  ) {

    this.orderForm = this.fb.group({
      IdOrder: ['',[Validators.required]],
      IdUser: ['', [Validators.required]],
      OrderNumber: ['',[Validators.required]],
      DateTime: ['',[Validators.required]],
      ProviderName: ['',[Validators.required]],
      DateCreated: ['',[Validators.required]],
      Observation: ['',[Validators.required]],
      TotalValue: ['',[Validators.required]],
      Status: ['',Validators.required],
      avergarePrice: ['']
    });
  }


  ngOnInit(): void {
    this._route.params
      .subscribe((params:any) => {
        this.orderId = params.orderId;
        this.getOrder()

      }
    );

    this.getUsers();
  }

  async getUsers(){
    let response:any = await this._user.getUsers();

    this.users = response.data;
  }

  async getOrder(){
    let response:any = await this._order.getOrder(this.orderId);

    this.order = response.data;

    for(let item in this.order){
      if(
        item != 'IsDeleted' &&
        item != 'user'
      ){
        this.orderForm.controls[item].setValue(response.data[item]);
      }
    }

  }

  async onSubmit(){
    let payload:Order = this.orderForm.value;

    let response = await this._order.updateOrder(payload);

    this._router.navigate(['/orders']);

  }

}
