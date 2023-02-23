import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet
  router: Router = new Router();
  constructor(private http:HttpClient){}
  user = {
    "email": "",
    "password": ""
  }
  showError = false;
  
  logIn(){
    this.http.post("http://localhost:3000//auth/login", this.user).subscribe((data: any) => {
      sessionStorage.setItem("jwt", data);
      if (data) {
        this.showError = false;
        this.router.navigate(['/home']);
      }
      else this.showError=true
    })
  }
  createUser() { 
    this.router.navigate(['/createuser']);
  }
}
