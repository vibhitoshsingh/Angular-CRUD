import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { User } from "../Model/User";
import { UserService } from "../userservices/user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editMode:boolean;
  UserId:number;
  userForm: FormGroup;
  currentUser;
  imageName='';

  constructor(private activatedRoute: ActivatedRoute,private userService:UserService,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
     this.createForm();
  }

createForm() {
   let name = '';
    let job = '';
     this.userForm = new FormGroup({
      'name' : new FormControl(name),
      'job' : new FormControl(job),
 
         });

      }
  RegisterUser(model)
{
  var data=this.userForm.value;
  
  this.userService.Register(model).subscribe(
    data=>{
      this.router.navigate(['dashboard/userListing']);
    });
}
}
