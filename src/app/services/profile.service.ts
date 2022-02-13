

import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username ="sring";
  private clientid ='0a96488a01685c3a3b85';
  private clientsecret="c7f5c9aab272be46f8fcc4fa0589ef0662f2f3aa"
  

  constructor( private http: HttpClient) {
    console.log ("This service is now ready");
    this.username ="Michael-Musili"
  }
  getProfileInfo(){
     return this.http.get("https://api.github.com/users/" +this.username + "?client_id=" + this.clientid +"&client_secrets"   +  this.clientsecret )
    .map(res =>res );
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" +this.username + "/repos?client_id=" + this.clientid +"&client_secrets"   +  this.clientsecret )
    .map(res =>res );

  }

}
