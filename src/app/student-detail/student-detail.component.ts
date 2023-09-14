import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  students: Student[] = [];
  selectedAssessmentType: string = 'All';

  constructor() {}

  ngOnInit(): void {
    this.retrieveStudentData();
  }

  retrieveStudentData() {
    const storedData = localStorage.getItem('students');
    if (storedData !== null) {
      this.students = JSON.parse(storedData);
    }
  }

  editStudent(index: number) {
    // Implement edit functionality here, e.g., open a modal or navigate to an edit page
    // You can access the student data by using this.students[index]
  }

  deleteStudent(index: number) {
    // Implement delete functionality here
    this.students.splice(index, 1); // Remove the student from the array
    localStorage.setItem('students', JSON.stringify(this.students)); // Update local storage
  }
}
