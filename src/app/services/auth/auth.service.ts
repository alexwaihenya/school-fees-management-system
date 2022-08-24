import { Injectable } from '@angular/core';
import { data } from '../../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // loggedIn=false

  

  inputData:data={
    email:"alex@gmail.com",
    password:"12345678"

  }
  isLoggedIn(){
    return this.inputData
    
  }

  authenticated(){
    return  localStorage.getItem('email')===this.isLoggedIn().email && localStorage.getItem('password')===this.isLoggedIn().password
  }

  constructor() { }
}
