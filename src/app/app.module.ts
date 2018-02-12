import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import { HomeComponent} from './CourseCatalog/Home/home.component';
import { DepartmentsComponent } from './CourseCatalog/Department/departments.component';
import { UserComponent} from './CourseCatalog/user/user.component';
import { AuthValidator } from './CourseCatalog/Controller/authValidator.service'
import { AuthenticationService } from './CourseCatalog/Controller/authentication.service'
import { CourseFilterPipe, DepartmentFilterPipe } from './CourseCatalog/Home/filters.pipe';
import { CourseService } from './CourseCatalog/Controller/course.service';
import { ChartsModule } from 'ng2-charts';
import { CourseDetailComponent } from './CourseCatalog/Department/coursedetail.component';
import { DepartmentDetailComponent } from './CourseCatalog/Department/departmentDetail.component';
import { UserFilterPipe } from './CourseCatalog/User/userFilter.pipe'
import { CoursesComponent } from './CourseCatalog/Department/courses.component';
import { DashboardComponent } from './CourseCatalog/User/dashboard.component';
import { ProfileComponent } from './CourseCatalog/User/profile.component';
import { HistoryComponent } from './CourseCatalog/User/history.component';
import { AdminMgmtComponent } from './CourseCatalog/User/AdminMgmt.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, ChartsModule, routing ],
  declarations: [ AppComponent, HomeComponent, DepartmentsComponent,CoursesComponent, CourseDetailComponent, DepartmentDetailComponent, UserComponent, CourseFilterPipe, DepartmentFilterPipe, UserFilterPipe, DashboardComponent, ProfileComponent, HistoryComponent, AdminMgmtComponent, FileSelectDirective],
  providers: [ CourseService, AuthValidator, AuthenticationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
