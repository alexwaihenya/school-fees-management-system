import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddStudentsComponent } from './admin/add-students/add-students.component';
import { AllStudentsComponent } from './admin/all-students/all-students.component';
import { StudentsWithBalanceComponent } from './admin/students-with-balance/students-with-balance.component';
import { StudentsWithNoBalanceComponent } from './admin/students-with-no-balance/students-with-no-balance.component';
import { HeaderComponent } from './navbar/header.component';
import { LoginComponent } from './homepage/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { HeaderDirective } from './custom-directives/header.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    AllStudentsComponent,
    StudentsWithBalanceComponent,
    StudentsWithNoBalanceComponent,
    HeaderComponent,
    LoginComponent,
    AdminDashboardComponent,
    HomepageComponent,
    ErrorComponent,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
