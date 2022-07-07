import { Injectable } from '@angular/core';
import { Order } from '@orders/models/order';
import { GlobalHttpService } from '@services/global-http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GlobalHttpService{

  async getOrders():Promise<any>{
    return await this._http.get(`${this.apiUrl}/orders`,this.getHeaders()).toPromise();
  }

  async getOrder(id:number) {
    return await this._http.get(`${this.apiUrl}/orders/${id}`,this.getHeaders()).toPromise();
  }

  async storeOrder(paylaod:object){
    return await this._http.post(`${this.apiUrl}/orders`,paylaod,this.getHeaders()).toPromise();
  }

  async updateOrder(paylaod:Order){
    return await this._http.put(`${this.apiUrl}/orders/${paylaod.IdOrder}`,paylaod,this.getHeaders()).toPromise();
  }

  async delete(id:any){
    return await this._http.delete(`${this.apiUrl}/orders/${id}`).toPromise();
  }






}
