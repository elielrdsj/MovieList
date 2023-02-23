import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  constructor (private http : HttpClient) {}
  user = {
    "name":"",
    "email":"",
    "password":"",
    "confirmpassword":""
  }
  showError = false
  errorMessage = ""
  createUser() {
    this.http.post("http://localhost:3000/auth/register", this.user).subscribe((data: any) => {

    }, (err) => {
      this.showError=true;
      this.errorMessage= err.errorMessage
    });
  }
}
