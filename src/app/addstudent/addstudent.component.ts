import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  student: Student = {
    rollnumber: 0,
    name: '',
    section: '',
    assessments: [],
    id: 0
  };

  constructor(private studentDataService: StudentDataService) {}

  addAssessment() {
    // Create a new assessment object with default values
    const newAssessment = {
      type: 'quarterly', // Default to quarterly assessment
      marks: {
        physics: 0,
        chemistry: 0,
        social: 0,
      },
    };

    // Add the new assessment to the student's assessments array
    this.student.assessments.push(newAssessment);
  }

  saveStudentData() {
    // Add the current student data to local storage using the service
    this.studentDataService.addStudent(this.student);

    // Reset the form after saving data
    this.student = {
      rollnumber: 0,
      name: '',
      section: '',
      assessments: [],
      id:0
    };
  }

}
