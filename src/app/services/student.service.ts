import { Injectable } from '@angular/core';
import { student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private students:student[]=[
    {
      name:'alex',
      balance:2000,
      student_class:'form 3',
      gender:"male"

    },
    {
      name:'alex',
      balance:2000,
      student_class:'form 3',
      gender:"male"

    },
    {
      name:'alex',
      balance:2000,
      student_class:'form 3',
      gender:"male"

    }
  ]
  getStudent(index:number){
    return this.students[index]
  }

  getAllStudent(){
    return this.students
  }
 
  addStudent(student : student){
    return this.students.push(student)
  }
  studentBalance(){
    this.students.filter(v=> v.balance)
  }
  studentWithNoBalance(){
     this.students.filter(v=>v.balance ===0)
  }
}
