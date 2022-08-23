import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {



  constructor( private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }
  getAllStudents(){
    this.router.navigate(['admin'])
  }
  addStudent(){
    this.router.navigate(['admin/addstudent'])
  }
  studentsWithBalance(){
    this.router.navigate(['admin/balance'])
  }
  studentsWithNoBalance(){
    this.router.navigate(['admin/nobalance'])
  }



 
}
