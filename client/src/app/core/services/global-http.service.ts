import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpService {

  apiUrl:string = environment.apiUrl;

  constructor(
    public _http: HttpClient
  ) {

    console.log(this._http);

  }




}
