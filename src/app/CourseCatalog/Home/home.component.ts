import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Controller/course.service';
import {_Course, _Department, _CarouselItem} from '../Model/dataModel';
import { error } from 'util';
import '../../../assets/js/AdditionalScript.js';
import { Router } from '@angular/router';

declare var ClientScripts: any;

@Component({
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css'],
      providers: [CourseService]
  })
export class HomeComponent implements OnInit {

  courses: _Course[];
  departments: _Department[];
  carouselItems: _CarouselItem[];
  departmentFilter: string;
  courseFilter: string;
  currentUser: string;

  constructor(private _courseService: CourseService, private router: Router) { }

  ngOnInit() {
    
    this._courseService.getCourses(10)
      .subscribe(
        data => {
          this.courses = data;
        },
        error => {
          console.log(error._body);
        }
      );

    // console.log("fetching Department Detail");
    this._courseService.getDepartments(10)
      .subscribe(_departments => this.departments = _departments);
    
    // console.log("fetching Carousel Items");
    this._courseService.getCarouselItems()
      .subscribe(_carourselItems => this.carouselItems = _carourselItems);

  }
  
  isUserLoggedIn(): boolean {
    this.currentUser = localStorage.getItem('currentUser')
    if(this.currentUser)
      return true;
    else
      return false;
  }

  gotoPage(Page: string) {
      if(Page == 'Course')
          this.router.navigate(['/courses']);
      else if(Page == 'Department')
          this.router.navigate(['/departments']);
  }

}