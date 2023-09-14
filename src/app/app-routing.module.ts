import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [
  {path:'addstudent',component:AddstudentComponent},
  {path:'student-details',component:StudentDetailComponent},
  { path: 'edit-student/:index', component: EditStudentComponent },
  {path:'',component:LoginComponent},
  {path:'userhome',component:UserhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
