import { Url } from "url";
import {_User, _Course, _Department, _Registration, _CourseDept, _CarouselItem} from './dataModel'

export class Init {
  
  load() {

    //Course
    if (localStorage.getItem('courses') === null || localStorage.getItem('courses') == undefined) {
      console.log("Creating the initial set of books ...");
      var courses = [
        {
          id: "COUR00001",
          title: "Calculus",
          shortDetail: "A Course on Calculus",
          description: "Description text",
          credits: "50",
          totalRegistration: 0,
          imageURL: "https://oneclassblog.com/wp-content/uploads/2017/12/bigstock-123382757.jpg",
          department: "DEPT00001"
        },
        {
          id: "COUR00002",
          title: "Elementary Physics",
          shortDetail: "A Course on Elementarty Physics",
          description: "Description text",
          credits: "10",
          totalRegistration: 0,
          imageURL: "https://images-na.ssl-images-amazon.com/images/I/51leqJMvzZL._SX384_BO1,204,203,200_.jpg",
          department: "DEPT00001"
        },
        {
          id: "COUR00003",
          title: "HTML 101",
          shortDetail: "Basics of HTML",
          description: "Description text",
          credits: "20",
          totalRegistration: 0,
          imageURL: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300",
          department: "DEPT00003"
        },
        {
          id: "COUR00004",
          title: "CSS",
          shortDetail: "Cascading Style Sheets",
          description: "Description text",
          credits: "10",
          totalRegistration: 0,
          imageURL: "http://www.codekul.com/images/logo_css.png",
          department: "DEPT00004"
        },
        {
          id: "COUR00005",
          title: "Grey's Anatomy",
          shortDetail: "Gray's Anatomy is an English-language textbook of human anatomy",
          description: "Description text",
          credits: "10",
          totalRegistration: 0,
          imageURL: "https://images-na.ssl-images-amazon.com/images/I/91%2Bi4%2BEzYWL._SL1500_.jpg",
          department: "DEPT00002"
        }
      ];
      localStorage.setItem('courses', JSON.stringify(courses));
    }
    else {
      console.log("Loaded the course from local storage ...");
    }

    //Department
    if (localStorage.getItem('departments') === null || localStorage.getItem('departments') == undefined) {
      console.log("Creating the initial set of books ...");
      var departments = [
        {
          id: "DEPT00001",
          name: "Mechanical",
          description: "Courses for Student registered into Mechanical Engineering",
          detail: "Mechanical Course Detail",
          numberOfCourses: 2,
          imageURL: "https://images-na.ssl-images-amazon.com/images/I/91%2Bi4%2BEzYWL._SL1500_.jpg"
        },
        {
          id: "DEPT00002",
          name: "Medical",
          description: "Courses for Student registered into Medical Engineering",
          detail: "Medical Course Detail",
          numberOfCourses: 1,
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXMjx9UN46MoNgcapF78yoZHmAMLUaiu-fceOORxX8KskYPGa"
        },
        {
          id: "DEPT00003",
          name: "Information Technology",
          description: "Courses for Student registered into Information Technology",
          detail: "Information Technology Course Detail",
          numberOfCourses: 1,
          imageURL: "http://78.media.tumblr.com/6e1fc9f5cacd9c4d12f9be7c73eba036/tumblr_inline_n6ganv4LAy1ritnqy.png"
        },
        {
          id: "DEPT00004",
          name: "Computer Science",
          description: "Courses for Student registered into Computer Science",
          detail: "Computer Science Course Detail",
          numberOfCourses: 1,
          imageURL: "https://thumb1.shutterstock.com/display_pic_with_logo/2730316/501705679/stock-photo-line-web-concept-for-computer-science-banner-for-education-501705679.jpg"
        },
        {
          id: "DEPT00005",
          name: "Mechanical",
          description: "Courses for Student registered into Mechanical Engineering",
          detail: "Mechanical Engineering",
          numberOfCourses: 1,
          imageURL: "https://thumb1.shutterstock.com/display_pic_with_logo/2730316/501705679/stock-photo-line-web-concept-for-computer-science-banner-for-education-501705679.jpg"
        }
      ];
      localStorage.setItem('departments', JSON.stringify(departments));
    }
    else {
      console.log("Loaded the department from local storage ...");
    }

    //Registerations
    if (localStorage.getItem('registrations') === null || localStorage.getItem('registrations') == undefined) {
      console.log("Creating the initial set of books ...");
      var registrations = [

      ];
      localStorage.setItem('registrations', JSON.stringify(registrations));
    }
    else {
      console.log("Loaded the registrations from local storage ...");
    }

    //User
    if (localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
      console.log("Creating the initial set of books ...");
      var users = [
        {
          id: 1,
          name: "USER01",
          dob: "01-01-1990",
          email: "USER01@gmail.com",
          password: "123456789",
          admin: 1
        },
        {
          id: 2,
          name: "USER02",
          dob: "01-01-1990",
          email: "USER02@gmail.com",
          password: "123456789",
          admin: 1
        },
        {
          id: 3,
          name: "USER03",
          dob: "01-01-1990",
          email: "USER03@gmail.com",
          password: "123456789",
          admin: 0
        },
        {
          id: 4,
          name: "USER04",
          dob: "01-01-1990",
          email: "USER04@gmail.com",
          password: "123456789",
          admin: 0
        },
        {
          id: 5,
          name: "USER05",
          dob: "01-01-1990",
          email: "USER05@gmail.com",
          password: "123456789",
          admin: 0
        },
        {
          id: 6,
          name: "USER06",
          dob: "01-01-1990",
          email: "USER06@gmail.com",
          password: "123456789",
          admin: 0
        }         
      ];
      localStorage.setItem('users', JSON.stringify(users));
    }
    else {
      console.log("Loaded the usesr from local storage ...");
    }

    //CourseDept
    if (localStorage.getItem('CourseDept') === null || localStorage.getItem('CourseDept') == undefined) {
      console.log("Creating the initial set of books ...");
      var CourseDept = [
        {
          courseId: 'COUR00001',
          deptId: 'DEPT00001'
        },
        {
          courseId: 'COUR00002',
          deptId: 'DEPT00001'
        },
        {
          courseId: 'COUR00005',
          deptId: 'DEPT00002'
        },
        {
          courseId: 'COUR00003',
          deptId: 'DEPT00003'
        },
        {
          courseId: 'COUR00004',
          deptId: 'DEPT00004'
        }
      ];
      localStorage.setItem('CourseDept', JSON.stringify(CourseDept));
    }
    else {
      console.log("Loaded the CourseDept from local storage ...");
    }

    //CourseDept
    if (localStorage.getItem('carouselItems') === null || localStorage.getItem('carouselItems') == undefined) {
      console.log("Creating the initial set of carouselItems ...");
      var carouselItems = [
        {
          sequenceNo: 0,
          imageURL: 'assets/images/0520276001514000418.jpeg',
          title: 'Mechanical Engineering',
          description: 'Explore the world of magnificent machines',
          status: 'active'
        },
        {
          sequenceNo: 1,
          imageURL: 'assets/images/0533467001513538442.jpeg',
          title: 'Medical Engineering ',
          description: 'Explore the vast world of medical engineering via a plathora of courses',
          status: ''
        },
        {
          sequenceNo: 2,
          imageURL: 'assets/images/0751748001513912775.jpeg',
          title: 'Information Technology Engineering',
          description: 'Explore the fantastic world of IT',
          status: ''
        },
        {
          sequenceNo: 3,
          imageURL: 'assets/images/0936180001513843272.jpeg',
          title: 'Computer Science Engineering',
          description: 'Explore the secrets of computers',
          status: ''
        }
      ];
      localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
    }
    else {
      console.log("Loaded the carouselItems from local storage ...");
    }
  }

  clear() {
    localStorage.clear();
  }
}

