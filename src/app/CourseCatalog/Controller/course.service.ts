import { Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { _Department, _Course, _CourseDept, _User } from "../../CourseCatalog/Model/dataModel";
import { AuthenticationService } from '../Controller/authentication.service';
import { error } from 'util';

@Injectable()
export class CourseService
{

  serviceUrl = "http://localhost:2222/api";
  courseUrl = "/Course"
  departmentUrl = "/Department";
  registrationUrl = "/register";
  statusUrl = "/status"
  carouselUrl = "/CarouselItem";
  userUrl = "/user";
  trendUrl = "/Trend";
  uploadUrl= "/upload";

  constructor(private http:Http, private _AuthenticationService: AuthenticationService){}

  isRegistered(deptId:string, courseId?:string) {
     if(courseId)
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/registered/' + deptId + '/' + courseId)
        .map(res => JSON.parse(res.json()));
    else
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/registered/' + deptId)
      .map(res => JSON.parse(res.json()));
  }

  isCompleted(deptId:string, courseId?:string) {
    if(courseId)
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/completed/' + deptId + '/' + courseId)
        .map(res => JSON.parse(res.json()));
    else
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/completed/' + deptId)
      .map(res => JSON.parse(res.json()));
  }

  fetchRequest(requestType:string, url:string, data?:any) {
    var header = new Headers();
    header.append('Content-Type', 'application/json');

     switch (requestType) {
        case "GET": return this.http.get(url).map(res => res.json());
        case "POST": return this.http.post(url, data, {headers: header}).map(res => res.json());
     }
  }

  getStatus(deptId:string, courseId:string="none") {
    return this.http.get(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + deptId + '/' + courseId)
      .map(res => JSON.parse(res.json()));
  }
  
  getCourses(limit?:number, orderBy?:string) {
    console.log("fetching courses list");
    // let courses = JSON.parse(localStorage.getItem('courses'));
    // console.log("fetching courses list completed");
    // console.log(courses);
    // return courses;
    if(!limit && !orderBy) {
      return this.http.get(this.serviceUrl + this.courseUrl + '/get')
        .map(res => res.json());
    }
    else
    {
      if(!orderBy) {
        return this.http.get(this.serviceUrl + this.courseUrl + '/get/none/' + limit)
          .map(res => res.json());
      }
      else {
        return this.http.get(this.serviceUrl + this.courseUrl + '/get/'+ orderBy + '/' + limit)
          .map(res => res.json());
      }

    }
  }

  getCourse(id: string) {
    // let courses = JSON.parse(localStorage.getItem('courses'));
    // let Course:any = null;
    // for (let i = 0; i < courses.length; i++) {
    //   if (courses[i].id == id) {
    //     Course = courses[i];
    //     break;
    //   }
    // }
    // return Course;
      return this.http.get(this.serviceUrl + this.courseUrl + '/get/' + id)
        .map(res => res.json());
  }

  addCourse(Course: _Course) {
    // let courses = JSON.parse(localStorage.getItem('courses'));
    // courses.push(newCourse);
    // localStorage.setItem('Courses', JSON.stringify(courses));
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.courseUrl + '/new', Course, {headers: header})
      .map(res => res.json());
  }

  updateCourse(Course: _Course) {

    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.courseUrl + '/update', Course, {headers: header})
      .map(res => res.json());
    // let courses = JSON.parse(localStorage.getItem('courses'));
    // for (let i = 0; i < courses.length; i++) {
    //   if (courses[i].id == updatedCourse.id) {
    //     courses[i] = updatedCourse;
    //   }
    // }
    // localStorage.setItem('Courses', JSON.stringify(courses));
  }

  deleteCourse(id: string) {
    // let courses = JSON.parse(localStorage.getItem('courses'));
    // for (let i = 0; i < courses.length; i++) {
    //   if (courses[i].id == id) {
    //     courses.splice(i, 1);
    //   }
    // }
    // localStorage.setItem('Courses', JSON.stringify(courses));
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.courseUrl + '/delete', {'id': id }, {headers: header})
      .map(res => res.json());

  }

  registerIn(_deptId:string, _courseId:string = "none") {
    ///Register/:_user/:_deptId/:_courseId
    
    return this.http.get(this.serviceUrl + this.registrationUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId)
        .map(res => res.json());
  }

  setStatus(status:string, _deptId:string, _courseId:string = "none") {
    ///Register/:_user/:_deptId/:_courseId
    console.log(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId + '/' + status);
    return this.http.get(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId + '/' + status)
        .map(res => res.json());
  }

  getDepartments(limit?:number) {
    // console.log("fetching departments list");
    // let departments = JSON.parse(localStorage.getItem('departments'));
    // console.log("fetching departments list completed");
    // console.log(departments);
    // return departments;
    if(!limit)
      return this.http.get(this.serviceUrl + this.departmentUrl + '/get')
        .map(res => res.json());
    else
      return this.http.get(this.serviceUrl + this.departmentUrl + '/limit/' + limit)
        .map(res => res.json());
  }

  getDepartment(id: string) {
    // console.log("fetching department with Id : " + id);
    // let departments = JSON.parse(localStorage.getItem('departments'));
    // let department:any = null;
    // for (let i = 0; i < departments.length; i++) {
    //   if (departments[i].id == id) {
    //     department = departments[i];
    //     break;
    //   }
    // }
    // console.log(department);
    // return department;
    return this.http.get(this.serviceUrl + this.departmentUrl + '/get/' + id)
        .map(res => res.json());
  }

  addDepartment(Department: _Department) {
    // let departments = JSON.parse(localStorage.getItem('departments'));
    // departments.push(newDepartment);
    // localStorage.setItem('Courses', JSON.stringify(departments));
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.departmentUrl + '/new', Department, {headers: header})
      .map(res => res.json());
  }

  updateDepartment(Department: _Department) {
    // let departments = JSON.parse(localStorage.getItem('departments'));
    // for (let i = 0; i < departments.length; i++) {
    //   if (departments[i].id == updatedDepartment.id) {
    //     departments[i] = updatedDepartment;
    //   }
    // }
    // localStorage.setItem('Courses', JSON.stringify(departments));
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.departmentUrl + '/update', Department, {headers: header})
      .map(res => res.json());
  }

  deleteDepartment(id: string) {
    // let departments = JSON.parse(localStorage.getItem('departments'));
    // for (let i = 0; i < departments.length; i++) {
    //   if (departments[i].id == id) {
    //     departments.splice(i, 1);
    //   }
    // }
    // localStorage.setItem('Courses', JSON.stringify(departments));
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + this.departmentUrl + '/delete', {'id': id }, {headers: header})
      .map(res => res.json());
  }

  getCarouselItems() {
    // console.log("fetching Carousel Items list");
    // let carouselItems = JSON.parse(localStorage.getItem('carouselItems'));
    // console.log("fetching Carousel Items completed");
    // console.log(carouselItems);
    // return carouselItems;
    return this.http.get(this.serviceUrl + this.carouselUrl + '/get')
      .map(res => JSON.parse(res.json()));

  }

  getCoursesForDepartment(deptId: string, orderBy:string = "none") {
    return this.http.get(this.serviceUrl + this.courseUrl + this.departmentUrl + '/' + deptId + '/' + orderBy)
      .map(res => res.json());
  }

  clearData() {
    localStorage.clear();
  }

  getUserCourses(deptId?:string) {
    console.log(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/courses');
    if(!deptId)
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/courses')
        .map(res => res.json());
    else
      return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + deptId + '/courses')
        .map(res => res.json());
  }

  getTopCourses(deptId?:string, limit?:number) {
    if(!deptId)
      return this.http.get(this.serviceUrl + this.courseUrl + "/top")
        .map(res => res.json());
      // this.fetchRequest("GET", this.serviceUrl + this.courseUrl + "/top");
    return this.http.get(this.serviceUrl + this.courseUrl + "/top/" + deptId)
      .map(res => res.json());
    // this.fetchRequest("GET", this.serviceUrl + this.courseUrl + "/top/" + deptId);
  }

  getRegistrationTrend(type:string) {
    return this.http.get(this.serviceUrl +  this.trendUrl + '/' + type)
      .map(res => res.json());
  }

  uploadImage(htmlInputElement: HTMLInputElement) {
    let fileCount: number = htmlInputElement.files.length;
    let formData = new FormData();

    if (fileCount > 0) {
        //append the key name 'photo' with the first file in the element
            formData.append('objImage', htmlInputElement.files.item(0));
    }

    return this.http.post(this.serviceUrl + this.uploadUrl, formData)
      .map(res => res);

  }

}