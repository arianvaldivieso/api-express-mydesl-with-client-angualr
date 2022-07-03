import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '@products/services/product.service';
import { Product } from '@products/model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  idProduct:any;
  product!:Product;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder,
    private _product: ProductService
  ) {


    this._route.params
      .subscribe((params:any) => {
        this.idProduct = params.idProduct;
        this.getProduct();
      }
    );

    this.productForm = this.fb.group({
      IdOrdersProducts: [this.idProduct,[Validators.required]],
      IdOrder: ['',[Validators.required]],
      ValueUnit: ['',[Validators.required]],
      Unit: ['',[Validators.required]],
      Description: ['',[Validators.required]],
      SKU: ['',[Validators.required]],
      Quantity: ['',Validators.required],
      QtyBox: ['',Validators.required],
      Weight: ['',Validators.required],
      Volumen: ['',Validators.required],
      Mark: ['',Validators.required],
      Status: ['',Validators.required],
    });

  }

  ngOnInit(): void {

  }


  async getProduct(){
    let response:any = await this._product.getProduct(this.idProduct);

    this.product = response.data;

    for(let item in this.product){
      if(
        item != 'IsDelete'
      ){
        this.productForm.controls[item].setValue(response.data[item]);
      }
    }

  }


  async onSubmit(){

    let payload = this.productForm.value;
    let response = await this._product.updateProduct(payload);

    this._router.navigate(['/products'],{ queryParams: { orderId: this.product.IdOrder } })

  }

}
