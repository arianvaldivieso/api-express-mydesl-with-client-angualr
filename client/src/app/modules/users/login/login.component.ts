import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


import { UserService } from '@users/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _user:UserService,
  ) {

    this.userForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]]
    });

  }

  ngOnInit(): void {
  }


  async onSubmit(){
    let payload = this.userForm.value;

    let response:any = await this._user.login(payload);

    console.log(response);

    if(response.status == 404){
      alert('usuario no existe');
    }else{

      localStorage.setItem('user-ir-test', response.data.id);
      localStorage.setItem('jwt-test', response.data.token);
      this._router.navigate(['/orders']);
    }

  }

}
