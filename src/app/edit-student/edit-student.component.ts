import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student = {
    id: 0,
    rollnumber: 0,
    name: '',
    section: '',
    assessments: [
      {
        type: '',
        marks: {
          physics: 0,
          chemistry: 0,
          social: 0
        }
      }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the index from the route parameter with null checks
    const indexParam = this.route.snapshot.paramMap.get('index');
    if (indexParam !== null) {
      const index = +indexParam;
      if (!isNaN(index)) {
        const storedData = localStorage.getItem('students');
        if (storedData) {
          const students: Student[] = JSON.parse(storedData);
          if (index >= 0 && index < students.length) {
            this.student = { ...students[index] };
          } else {
            // Handle the case where the index is out of bounds
            this.router.navigate(['/not-found']);
          }
        }
      } else {
        // Handle the case where the index is not a valid number
        this.router.navigate(['/not-found']);
      }
    } else {
      // Handle the case where the index parameter is null
      this.router.navigate(['/not-found']);
    }
  }

  onSubmit() {
    // Update the student's data in local storage
    const indexParam = this.route.snapshot.paramMap.get('index');
    if (indexParam !== null) {
      const index = +indexParam;
      if (!isNaN(index)) {
        const storedData = localStorage.getItem('students');
        if (storedData) {
          const students: Student[] = JSON.parse(storedData);
          if (index >= 0 && index < students.length) {
            students[index] = { ...this.student };
            localStorage.setItem('students', JSON.stringify(students));
            this.router.navigate(['/student-list']);
          } else {
            // Handle the case where the index is out of bounds
            this.router.navigate(['/not-found']);
          }
        }
      } else {
        // Handle the case where the index is not a valid number
        this.router.navigate(['/not-found']);
      }
    } else {
      // Handle the case where the index parameter is null
      this.router.navigate(['/not-found']);
    }
  }
}
