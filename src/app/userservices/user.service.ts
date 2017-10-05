import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Headers, Http } from "@angular/http";
import {User} from '../Model/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Login } from "../Model/login";
import { Router } from "@angular/router";
import { Register } from "../Model/register";

@Injectable()
export class UserService {

  constructor(private _httpClient:HttpClient,private _http:Http,private router:Router) { }


//User service

saveUser(user:User) {
      return this._httpClient.post("https://reqres.in/api/users",user);
  }
  Register(user:Register)
  {
    return this._httpClient.post("https://reqres.in/api/register",user);
  }

  Login(model) {
   
      return this._httpClient.post("https://reqres.in/api/login",model);

  }

  UserListing() {
    console.log('in list api');
      return this._httpClient.get("https://reqres.in/api/users?page=2");
  }

  getUserById(id:number) {
     return this._httpClient.get("https://reqres.in/api/users",{params: new HttpParams().set('id', id.toString())});
  }
  
  onDelete(Id:number){
     return this._httpClient.get("https://reqres.in/api/users");
     //this.router.navigate(['/home/UserListing']);
  }
onEdit(model)
{
  return this._httpClient.put("https://reqres.in/api/users",model);

}

}

