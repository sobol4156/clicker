import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isOpenAuth = false;
  isRegister = true;

  toggleAuth() {
    this.isOpenAuth = !this.isOpenAuth
  }
  
  handleForm(){
    this.isRegister = !this.isRegister
  }
}
