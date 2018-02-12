import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './CourseCatalog/Home/home.component';
import { DepartmentsComponent } from './CourseCatalog/Department/departments.component';
import { UserComponent} from './CourseCatalog/user/user.component';
import { AuthValidator } from './CourseCatalog/Controller/authValidator.service'
import { CourseDetailComponent } from './CourseCatalog/Department/coursedetail.component';
import { DepartmentDetailComponent } from './CourseCatalog/Department/departmentDetail.component';
import { CoursesComponent } from './CourseCatalog/Department/courses.component';
import { DashboardComponent } from './CourseCatalog/User/dashboard.component';
import { ProfileComponent } from './CourseCatalog/User/profile.component';
import { HistoryComponent } from './CourseCatalog/User/history.component';
import { AdminMgmtComponent } from './CourseCatalog/User/AdminMgmt.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'courses', component:CoursesComponent},
  { path: 'departments/:deptId', component: DepartmentDetailComponent },
  { path: 'departments/:deptId/:courseId', component: CourseDetailComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthValidator],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'adminMgmt', component: AdminMgmtComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
