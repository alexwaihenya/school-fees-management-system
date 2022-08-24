import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/interfaces/data';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  staticdata: data = {
    email: "",
    password: ""
  }
  empty = false




  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('email','mercy@gmail.com')
    localStorage.setItem('password','alex')
  }
  onLogin() {
    // if (this.staticdata.email === this.authService.inputData.email && this.staticdata.password === this.authService.inputData.password) {

      localStorage.getItem('email')
      localStorage.getItem('password')
      localStorage.setItem('token','dfghjkl;rtyuiopdfgyuildfghjkl')


      this.router.navigate(['admin'])

      


    // } else {

    //   console.log('Invalid details');
    //   this.empty = true
    //   setTimeout(() => {
    //     this.empty = false
    //   }, 1000)

    // }


  }

}
