import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@products/model/product';
import { ProductService } from '@products/services/product.service';

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit {

  idOrder!:any;
  products:Product[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService
  ) { }

  ngOnInit(): void {

    this._route.queryParams
      .subscribe((params:any) => {
        this.idOrder = params.orderId;
        this.getProductsForOrder()

      }
    );


  }

  async getProductsForOrder(){
    let response:any = await this._product.getProductsForOrder(this.idOrder);

    this.products = response.data;

  }

  async deleteProduct(id:any){
    await this._product.delete(id);
    this.getProductsForOrder();

  }

}
