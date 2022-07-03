import { Injectable } from '@angular/core';
import { GlobalHttpService } from '@core/services/global-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GlobalHttpService{

  async getUsers():Promise<any>{
    return await this._http.get(`${this.apiUrl}/users`).toPromise();
  }

}
