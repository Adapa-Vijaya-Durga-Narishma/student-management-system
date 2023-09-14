import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private students: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor() {
    try {
      const storedStudents = localStorage.getItem('students');
      if (storedStudents) {
        const parsedStudents = JSON.parse(storedStudents);
        if (Array.isArray(parsedStudents)) {
          this.students.next(parsedStudents);
        } else {
          console.error('Stored data is not an array:', parsedStudents);
        }
      }
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  }

  getStudents(): Observable<Student[]> {
    return this.students.asObservable();
  }

  addStudent(student: Student): void {
    const currentStudents = this.students.value;
    currentStudents.push(student);
    this.students.next(currentStudents);
    localStorage.setItem('students', JSON.stringify(currentStudents));
  }

  getStudentById(studentId: number): Student | null {
    const students = this.students.value;
    return students.find(student => student.id === studentId) || null;
  }
}
