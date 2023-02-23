import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  router: Router = new Router();
  constructor(private http:HttpClient){}
  formData!:FormGroup
  showError = false;
  
  logIn(){
    this.http.post("http://localhost:3000/api/login", this.formData).subscribe((data: any) => {
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
