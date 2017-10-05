import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../userservices/user.service";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  UserId: number;
results:any = '';
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
   getAllUsers() {
    this.userService.UserListing().subscribe(data => {
      console.log('data', data);
      this.results='';
      this.results = data;
   });
  }

onDelete(UserId){
 this.UserId=2;
   this.userService.onDelete(this.UserId).subscribe(
     data=>{console.log('deleted');}
   );
    this.router.navigate(['home/userListing']);
}

  onEdit(UserId) {
     this.UserId=1;
     this.router.navigate(['edit']);
   }
}
