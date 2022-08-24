import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-with-balance',
  templateUrl: './students-with-balance.component.html',
  styleUrls: ['./students-with-balance.component.css']
})
export class StudentsWithBalanceComponent implements OnInit {
  student!:student[]

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.getAllStudent().filter(v=>v.balance >0)

  }

}
