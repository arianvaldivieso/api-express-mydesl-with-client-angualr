import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '@products/services/product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  idOrder:any;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder,
    private _product: ProductService
  ) {


    this._route.queryParams
      .subscribe((params:any) => {
        this.idOrder = params.orderId;
      }
    );

    this.productForm = this.fb.group({
      IdOrder: [this.idOrder,[Validators.required]],
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
      NumberPackage: ['',[Validators.required]]
    });

  }

  ngOnInit(): void {
  }


  async onSubmit(){

    let payload = this.productForm.value;
    let response = await this._product.storeProduct(payload);

    this._router.navigate(['/products'],{ queryParams: { orderId: this.idOrder } })

  }

}
