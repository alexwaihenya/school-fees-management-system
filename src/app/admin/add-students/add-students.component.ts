import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  studentdetails: student = {
    name: "",
    student_class: "",
    gender: "",
    balance: 0
  }
  empty = false
  filter = ''

  constructor(private router: Router, public studentService: StudentService) { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.studentdetails.name == '' || this.studentdetails.student_class == '' || this.studentdetails.gender == '') {
      this.empty = true
      setTimeout(() => {
        this.empty = false
      }, 1000);
    }
    else {

      this.studentService.addStudent(this.studentdetails)
      console.log((this.studentdetails));

      this.router.navigate(['admin'])

    }

  }








}
