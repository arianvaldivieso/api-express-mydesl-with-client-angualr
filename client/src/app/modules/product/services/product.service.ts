import { Injectable } from '@angular/core';
import { GlobalHttpService } from '@core/services/global-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GlobalHttpService {

  async getProductsForOrder(idOrder:number){
    return await this._http.get(`${this.apiUrl}/orders/${idOrder}/getProducts`).toPromise();
  }


  async getProduct(id:number){
    return await this._http.get(`${this.apiUrl}/products/${id}`).toPromise();
  }

  async delete(id:number){
    return await this._http.delete(`${this.apiUrl}/products/${id}`).toPromise();
  }

  async storeProduct(paylaod:any){
    return await this._http.post(`${this.apiUrl}/products`,paylaod).toPromise();
  }

  async updateProduct(paylaod:any){
    return await this._http.put(`${this.apiUrl}/products/${paylaod.IdOrdersProducts}`,paylaod).toPromise();
  }




}
