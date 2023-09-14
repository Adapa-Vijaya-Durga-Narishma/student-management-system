import { Component } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms';
  selectedStudent: Student | null = null;
}
