import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../interfaces/student';

@Pipe({
    name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

    transform(value: student[], name: string): student[] {
        if (value.length == 0 || name == '') {
            name = name.toLowerCase();
            return value
        }
        const student: student[] = []
        for (let students of value) {
            if (students.name.toLowerCase().indexOf(name) != -1) {
                student.push(students)
            }
        }
        return student
    }

}