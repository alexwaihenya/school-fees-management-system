import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './admin/add-students/add-students.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllStudentsComponent } from './admin/all-students/all-students.component';
import { StudentsWithBalanceComponent } from './admin/students-with-balance/students-with-balance.component';
import { StudentsWithNoBalanceComponent } from './admin/students-with-no-balance/students-with-no-balance.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './homepage/login/login.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomepageComponent, children:[
    {path:'login',component:LoginComponent},

  ]},
  
  {path:'admin',canActivate:[AuthGuard],component: AdminDashboardComponent,
  children:[
    {path: '',canActivate:[AuthGuard], component:AllStudentsComponent},
    {path:'addstudent',canActivate:[AuthGuard], component: AddStudentsComponent},
    {path: 'balance', canActivate:[AuthGuard], component:StudentsWithBalanceComponent},
    {path: 'nobalance',canActivate:[AuthGuard], component:StudentsWithNoBalanceComponent}

  ] },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
