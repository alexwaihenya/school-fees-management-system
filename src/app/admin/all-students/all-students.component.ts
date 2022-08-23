import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  
})
export class AllStudentsComponent implements OnInit {
  student!:student[]
  filter=''

  constructor(private studentService:StudentService ) { }

  ngOnInit(): void {
    this.student = this.studentService.getAllStudent()
      console.log(this.student);
      
  }
  

}
