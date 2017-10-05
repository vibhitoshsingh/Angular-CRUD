import { Component, OnInit } from '@angular/core';
import { UserService } from "../userservices/user.service";
import { Router } from "@angular/router";
import { User } from "../Model/User";
import { Login } from "../Model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
 
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  logIn() {
    var model={
      email:this.email,
      password:this.password
    }

     
      this.userService.Login(model).subscribe(data => {
        console.log(data);
        localStorage.setItem("isLoggedIn",data['token'])
      this.router.navigate(['/home']);
    
         });
       
    
  
 }
}
