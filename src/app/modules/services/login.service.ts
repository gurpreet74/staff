import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {

   }

   login(formData:any){
    return this.httpClient.post(this.url,formData);
  }

}
