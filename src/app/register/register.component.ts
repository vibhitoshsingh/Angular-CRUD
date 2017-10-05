import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import {Login} from '../Model/Login';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from "../userservices/user.service";
import { Register } from "../Model/register";
//import { LoginService } from "../service/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  editMode:boolean;
  UserId:number;
  Email:string;
  password:string;
  RegForm: FormGroup;
  currentUser;

  constructor(private activatedRoute: ActivatedRoute, private userService:UserService,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
  }
  Register() {
    let user:Register= new Register();
    if(this.Email!= "" && this.Email!=null &&this.Email!=undefined) {
      user.Email=this.Email;
      user.Password=this.password;
      this.userService.Register(user).subscribe((data:Login) => {
       localStorage.setItem("isLoggedIn",data['token'])
      this.router.navigate(['/login']);
       
    });
       
    
  }
  
 }

}
