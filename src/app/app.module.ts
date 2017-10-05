import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
;
import { UserListingComponent } from "./home/user-listing/user-listing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { UserService } from "./userservices/user.service";
import { guard } from "./guard/app.guard";
import { Http} from '@angular/http';
import { HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from "./user/user.component";
import { AdduserComponent } from './adduser/adduser.component';




const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent,canActivate: [guard]},
  { path: '', component: LoginComponent,canActivate: [guard] },
   
    {path:'edit',component:UserComponent},
    {path:'addUser',component:AdduserComponent},
  { path: 'home',component: HomeComponent,canActivate: [guard],
               children:[
                 {path:'',component:UserListingComponent},
                 {path:'userListing',component:UserListingComponent},
                  
                
                 
                  ] },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserListingComponent,
    RegisterComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule, HttpClientModule,ReactiveFormsModule,HttpModule
  
  ],
  providers: [UserService,guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
