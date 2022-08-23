import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-with-no-balance',
  templateUrl: './students-with-no-balance.component.html',
  styleUrls: ['./students-with-no-balance.component.css']
})
export class StudentsWithNoBalanceComponent implements OnInit {

  student!:student[]
  filter=''
  nobalance=''

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.getAllStudent().filter(v=>v.balance ===0)
  }

}
