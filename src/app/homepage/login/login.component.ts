import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/interfaces/data';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  staticdata:data={
    email:"",
    password:""
  }
  empty =false

 
  

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    if(this.staticdata.email==="alex@gmail.com" && this.staticdata.password==="12345678"){
     

      this.router.navigate(['admin'])
      // console.log(true);
   
      
      
    }else{
      
      console.log('Invalid details');
      this.empty = true
      setTimeout(()=>{
        this.empty = false
      },1000)
      
    }
   
    
  }

}
