webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Controller/authValidator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthValidator = (function () {
    function AuthValidator(router, _AuthenticationService) {
        this.router = router;
        this._AuthenticationService = _AuthenticationService;
    }
    AuthValidator.prototype.canActivate = function (route, state) {
        if (this._AuthenticationService.getLoggedUserDetail()) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        window.alert("You don't have permission to view this page !! click on ok to redirect");
        this.router.navigate(['/']); //coment this line to activate AuthGuard
        return false;
    };
    return AuthValidator;
}());
AuthValidator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthValidator);

var _a, _b;
//# sourceMappingURL=authValidator.service.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Controller/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._serviceUrl = "http://localhost:2222/api/user/";
    }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._serviceUrl + 'authenticate', { username: username, password: password }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._serviceUrl + 'register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // console.log(user)
        // console.log(this._serviceUrl + 'update');
        return this.http.post(this._serviceUrl + 'update', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.updateAdmin = function (id, adminStatus) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._serviceUrl + 'update/admin', { 'id': id, 'admin': adminStatus }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getUsers = function (OrderBy, limit) {
        if (!limit)
            limit = 0;
        if (!OrderBy)
            OrderBy = "none";
        return this.http.get(this._serviceUrl + 'get/' + OrderBy + '/' + limit)
            .map(function (res) { return res.json(); });
        // return this.http.get(this.serviceUrl + this.userUrl + '/get/'+ OrderBy + '/' + limit).map(res => JSON.parse(res.json()));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.clear();
    };
    AuthenticationService.prototype.verifyCreation = function (email) {
        return this.http.get(this._serviceUrl + 'verifyCreation/' + email)
            .map(function (res) {
            return res;
        });
    };
    AuthenticationService.prototype.getLoggedUserDetail = function (parameter) {
        var LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
        if (LoggedInUser) {
            if (parameter)
                return LoggedInUser[parameter];
            else
                return LoggedInUser;
        }
        else
            return null;
    };
    AuthenticationService.prototype.setLoggedUserDetail = function (key, value, LoggedInUser) {
        if (!LoggedInUser) {
            LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
            if (!LoggedInUser)
                var LoggedInUser;
            if (key && value) {
                {
                    LoggedInUser[key] = value;
                }
            }
        }
        localStorage.setItem('LoggedInUser', JSON.stringify(LoggedInUser));
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Controller/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseService = (function () {
    function CourseService(http, _AuthenticationService) {
        this.http = http;
        this._AuthenticationService = _AuthenticationService;
        this.serviceUrl = "http://localhost:2222/api";
        this.courseUrl = "/Course";
        this.departmentUrl = "/Department";
        this.registrationUrl = "/register";
        this.statusUrl = "/status";
        this.carouselUrl = "/CarouselItem";
        this.userUrl = "/user";
        this.trendUrl = "/Trend";
        this.uploadUrl = "/upload";
    }
    CourseService.prototype.isRegistered = function (deptId, courseId) {
        if (courseId)
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/registered/' + deptId + '/' + courseId)
                .map(function (res) { return JSON.parse(res.json()); });
        else
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/registered/' + deptId)
                .map(function (res) { return JSON.parse(res.json()); });
    };
    CourseService.prototype.isCompleted = function (deptId, courseId) {
        if (courseId)
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/completed/' + deptId + '/' + courseId)
                .map(function (res) { return JSON.parse(res.json()); });
        else
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/completed/' + deptId)
                .map(function (res) { return JSON.parse(res.json()); });
    };
    CourseService.prototype.fetchRequest = function (requestType, url, data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        switch (requestType) {
            case "GET": return this.http.get(url).map(function (res) { return res.json(); });
            case "POST": return this.http.post(url, data, { headers: header }).map(function (res) { return res.json(); });
        }
    };
    CourseService.prototype.getStatus = function (deptId, courseId) {
        if (courseId === void 0) { courseId = "none"; }
        return this.http.get(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + deptId + '/' + courseId)
            .map(function (res) { return JSON.parse(res.json()); });
    };
    CourseService.prototype.getCourses = function (limit, orderBy) {
        console.log("fetching courses list");
        // let courses = JSON.parse(localStorage.getItem('courses'));
        // console.log("fetching courses list completed");
        // console.log(courses);
        // return courses;
        if (!limit && !orderBy) {
            return this.http.get(this.serviceUrl + this.courseUrl + '/get')
                .map(function (res) { return res.json(); });
        }
        else {
            if (!orderBy) {
                return this.http.get(this.serviceUrl + this.courseUrl + '/get/none/' + limit)
                    .map(function (res) { return res.json(); });
            }
            else {
                return this.http.get(this.serviceUrl + this.courseUrl + '/get/' + orderBy + '/' + limit)
                    .map(function (res) { return res.json(); });
            }
        }
    };
    CourseService.prototype.getCourse = function (id) {
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
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.addCourse = function (Course) {
        // let courses = JSON.parse(localStorage.getItem('courses'));
        // courses.push(newCourse);
        // localStorage.setItem('Courses', JSON.stringify(courses));
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.courseUrl + '/new', Course, { headers: header })
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.updateCourse = function (Course) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.courseUrl + '/update', Course, { headers: header })
            .map(function (res) { return res.json(); });
        // let courses = JSON.parse(localStorage.getItem('courses'));
        // for (let i = 0; i < courses.length; i++) {
        //   if (courses[i].id == updatedCourse.id) {
        //     courses[i] = updatedCourse;
        //   }
        // }
        // localStorage.setItem('Courses', JSON.stringify(courses));
    };
    CourseService.prototype.deleteCourse = function (id) {
        // let courses = JSON.parse(localStorage.getItem('courses'));
        // for (let i = 0; i < courses.length; i++) {
        //   if (courses[i].id == id) {
        //     courses.splice(i, 1);
        //   }
        // }
        // localStorage.setItem('Courses', JSON.stringify(courses));
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.courseUrl + '/delete', { 'id': id }, { headers: header })
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.registerIn = function (_deptId, _courseId) {
        ///Register/:_user/:_deptId/:_courseId
        if (_courseId === void 0) { _courseId = "none"; }
        return this.http.get(this.serviceUrl + this.registrationUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.setStatus = function (status, _deptId, _courseId) {
        if (_courseId === void 0) { _courseId = "none"; }
        ///Register/:_user/:_deptId/:_courseId
        console.log(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId + '/' + status);
        return this.http.get(this.serviceUrl + this.statusUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + _deptId + '/' + _courseId + '/' + status)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getDepartments = function (limit) {
        // console.log("fetching departments list");
        // let departments = JSON.parse(localStorage.getItem('departments'));
        // console.log("fetching departments list completed");
        // console.log(departments);
        // return departments;
        if (!limit)
            return this.http.get(this.serviceUrl + this.departmentUrl + '/get')
                .map(function (res) { return res.json(); });
        else
            return this.http.get(this.serviceUrl + this.departmentUrl + '/limit/' + limit)
                .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getDepartment = function (id) {
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
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.addDepartment = function (Department) {
        // let departments = JSON.parse(localStorage.getItem('departments'));
        // departments.push(newDepartment);
        // localStorage.setItem('Courses', JSON.stringify(departments));
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.departmentUrl + '/new', Department, { headers: header })
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.updateDepartment = function (Department) {
        // let departments = JSON.parse(localStorage.getItem('departments'));
        // for (let i = 0; i < departments.length; i++) {
        //   if (departments[i].id == updatedDepartment.id) {
        //     departments[i] = updatedDepartment;
        //   }
        // }
        // localStorage.setItem('Courses', JSON.stringify(departments));
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.departmentUrl + '/update', Department, { headers: header })
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.deleteDepartment = function (id) {
        // let departments = JSON.parse(localStorage.getItem('departments'));
        // for (let i = 0; i < departments.length; i++) {
        //   if (departments[i].id == id) {
        //     departments.splice(i, 1);
        //   }
        // }
        // localStorage.setItem('Courses', JSON.stringify(departments));
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + this.departmentUrl + '/delete', { 'id': id }, { headers: header })
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCarouselItems = function () {
        // console.log("fetching Carousel Items list");
        // let carouselItems = JSON.parse(localStorage.getItem('carouselItems'));
        // console.log("fetching Carousel Items completed");
        // console.log(carouselItems);
        // return carouselItems;
        return this.http.get(this.serviceUrl + this.carouselUrl + '/get')
            .map(function (res) { return JSON.parse(res.json()); });
    };
    CourseService.prototype.getCoursesForDepartment = function (deptId, orderBy) {
        if (orderBy === void 0) { orderBy = "none"; }
        return this.http.get(this.serviceUrl + this.courseUrl + this.departmentUrl + '/' + deptId + '/' + orderBy)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.clearData = function () {
        localStorage.clear();
    };
    CourseService.prototype.getUserCourses = function (deptId) {
        console.log(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/courses');
        if (!deptId)
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/courses')
                .map(function (res) { return res.json(); });
        else
            return this.http.get(this.serviceUrl + this.userUrl + '/' + this._AuthenticationService.getLoggedUserDetail('id') + '/' + deptId + '/courses')
                .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getTopCourses = function (deptId, limit) {
        if (!deptId)
            return this.http.get(this.serviceUrl + this.courseUrl + "/top")
                .map(function (res) { return res.json(); });
        // this.fetchRequest("GET", this.serviceUrl + this.courseUrl + "/top");
        return this.http.get(this.serviceUrl + this.courseUrl + "/top/" + deptId)
            .map(function (res) { return res.json(); });
        // this.fetchRequest("GET", this.serviceUrl + this.courseUrl + "/top/" + deptId);
    };
    CourseService.prototype.getRegistrationTrend = function (type) {
        return this.http.get(this.serviceUrl + this.trendUrl + '/' + type)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.uploadImage = function (htmlInputElement) {
        var fileCount = htmlInputElement.files.length;
        var formData = new FormData();
        if (fileCount > 0) {
            //append the key name 'photo' with the first file in the element
            formData.append('objImage', htmlInputElement.files.item(0));
        }
        return this.http.post(this.serviceUrl + this.uploadUrl, formData)
            .map(function (res) { return res; });
    };
    return CourseService;
}());
CourseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], CourseService);

var _a, _b;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block  h5,.card-block  p {\r\n    white-space: nowrap;\r\n    width: inherit;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: black;\r\n}\r\n\r\n.overlayMenu {\r\n    transition: .5s ease;\r\n    position: absolute;\r\n    top: 0%;\r\n    min-width: 203px;\r\n    min-height: 200px;\r\n    background-color: rgba(56, 56, 56, 0.5);\r\n    opacity: 0;\r\n}\r\n\r\n.card .card-img-top {\r\n    width: inherit;\r\n    height: 200px;\r\n}\r\n\r\n.overlayMenu i {\r\n    color: whitesmoke;\r\n    border: 2px solid;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n}\r\n\r\n.overlayMenu a {\r\n    margin: 5px;\r\n}\r\n\r\n.card:hover .overlayMenu {\r\n    opacity: 0.6;\r\n}\r\n\r\n.card {\r\n    max-width: 203px;\r\n    min-width: 203px;\r\n    border-radius: 0px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#bannerImg {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/bannerBackground.jpg") + ");\r\n    background-repeat: repeat;\r\n    color: whitesmoke;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section feature-box p-3 z-depth-2\" id=\"bannerImg\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"p2\">\r\n            <h1 class=\"section-heading display-3\">{{ViewType}}</h1>\r\n            <p *ngIf=\"ViewType == 'Department'\"  class=\"section-description lead\">Browse department to find the desired course</p>\r\n            <p *ngIf=\"ViewType == 'Course'\"  class=\"section-description lead\">Search from the available courses</p>\r\n        </div>\r\n        <div class=\"p2 ml-auto mt-auto\">\r\n            <a *ngIf=\"checkUserIsAdmin()\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#AddObjectModal\">\r\n                <i class=\"fa fa-plus-square\"></i><span>&nbsp;&nbsp;{{ViewType}}</span>\r\n            </a>\r\n            <!-- <a class=\"btn btn-outline-success\"><i class=\"fa fa-check-square-o\"></i><span>&nbsp;Register All</span></a> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section mt-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"card-deck\">\r\n                <div *ngFor='let object of collection' class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"{{ object.imageURL }}\" alt=\"{{ object.title }}\">\r\n                    <div *ngIf='isUserLoggedIn && checkUserIsAdmin()' class=\"overlayMenu d-flex justify-content-center align-items-center\">\r\n                        <a class=\"pr-2\" routerLink='{{ object.id }}/edit'><i class=\"fa fa-edit fa-3x\"></i></a>\r\n                        <a class=\"pl-2\" routerLink='{{ object.id }}/delete'><i class=\"fa fa-trash fa-3x\"></i></a>\r\n                    </div>\r\n                    <div class=\"card-block p-2\">\r\n                        <a *ngIf=\"ViewType == 'Department'\" routerLink='{{ object.id }}' class=\"text-center\">\r\n                            <h5 class=\"card-title mb-0\">{{ object.title }}</h5>\r\n                        </a>\r\n                        <a *ngIf=\"ViewType == 'Course'\" href='departments/{{ object.department }}/{{ object.id }}' class=\"text-center\">\r\n                            <h5 class=\"card-title mb-0\">{{ object.title }}</h5>\r\n                        </a>\r\n                    </div>\r\n                    <span *ngIf='isUserLoggedIn() && object.isRegistered && !object.completed' class=\"badge badge-info\"><i class=\"fa fa-check\"></i>&nbsp;&nbsp;Registered</span>\r\n                    <span *ngIf='isUserLoggedIn() && object.isRegistered && object.completed' class=\"badge badge-success\"><i class=\"fa fa-check-square\"></i>&nbsp;&nbsp;Completed</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div *ngIf=\"isUserLoggedIn() && checkUserIsAdmin()\" class=\"modal fade\" id=\"AddObjectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"LoginModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"top: 5%; margin: 0 auto;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <form name=\"frmNewObject\" (ngSubmit)=\"f.form.valid && onAddObject(f)\" #f=\"ngForm\" class=\"col-sm-12\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <div class=\"p2 ml-auto\">\r\n                            <div *ngIf='ResponseErr' class=\"p2 alert alert-danger mx-auto\">\r\n                                <strong>ResponseErr</strong>\r\n                            </div>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"p2 mx-auto\">\r\n                                <img src=\"{{newObject.imageURL}}\" style=\"width:200px;height:200px\" class=\"m-2 img-thumbnail\">\r\n                            </div>\r\n                            <div class=\"p2 input-group\">\r\n                                <div class=\"custom-file\">\r\n                                    <input type=\"file\" name=\"objImage\" id=\"objImage\" class=\"custom-file-input\">\r\n                                    <label class=\"custom-file-label\" for=\"objImage\">{{UploadedFile}}</label>\r\n                                </div>\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"uploadImage()\" type=\"button\">Upload</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p2\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"objName\" id=\"objName\" placeholder=\"{{ViewType}} Name...\" [(ngModel)]=\"newObject.title\" #title=\"ngModel\" required>\r\n                            <p *ngIf=\"!title.valid && (title.dirty || title.touched)\" class=\"w-100 alert alert-danger\">{{ViewType}} name is required</p>\r\n                        </div>\r\n                        <div class=\"p2\">\r\n                            <input type=\"text\" class=\"form-control\" name='objDescription' id=\"objDescription\" placeholder=\"Description...\" [(ngModel)]=\"newObject.description\" #description=\"ngModel\" required>\r\n                            <p *ngIf=\"!description.valid && (description.dirty || description.touched)\" class=\"w-100 alert alert-danger\">{{ViewType}} description is required</p>\r\n                        </div>\r\n                        <div *ngIf=\"ViewType == 'Course'\" class=\"p2 mx-0 row\">\r\n                            <div class=\"col-md-10 pl-0 mt-2\">\r\n                                <select name=\"courseDepartment\" class=\"custom-select\" style=\"height: 2.8rem\" [(ngModel)]=\"newObject.department\" #objDepartment=\"ngModel\" required>\r\n                                    <option disabled value selected>Department</option>\r\n                                    <option *ngFor='let department of departments' value=\"{{department.id}}\">{{department.title}}</option>\r\n                                </select>\r\n                                <p *ngIf=\"!objDepartment.valid && (objDepartment.dirty || objDepartment.touched)\" class=\" small text-danger\">\r\n                                    <span *ngIf=\"objDepartment.errors.required\">Please select a valid department</span>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"ml-auto col-md-2 pr-0\">\r\n                                <input type=\"number\" name=\"courseCredit\" class=\"form-control\" min=\"1\" name=\"objCredit\"  id=\"objCredit\" placeholder=\"Credit\" [(ngModel)]=\"newObject.credits\" #credits=\"ngModel\" style=\"max-width: max-content\" required>\r\n                                <p *ngIf=\"!credits.valid && (credits.dirty || credits.touched)\" class=\" small text-danger\">\r\n                                    <span *ngIf=\"credits.errors.required\">Credit point is required</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p2\">\r\n                            <textarea name=\"objDetail\" placeholder=\"Detail...\"  class=\"form-control\" id=\"objDetail\" rows=\"4\" [(ngModel)]=\"newObject.detail\" #detail=\"ngModel\" ></textarea>\r\n                        </div>\r\n                        <div class=\"p2 ml-auto\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/coursedetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseDetailComponent = (function () {
    function CourseDetailComponent(_CourseCatalogService, _AuthenticationService, route, router, el) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
        this.el = el;
        this.fieldIsErrorPage = true;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ViewType = "Course";
        this.route.params.forEach(function (Params) {
            if (Params.deptId) {
                _this.DeptID = Params.deptId;
            }
            if (Params.courseId) {
                _this.CourseID = Params.courseId;
            }
        });
        this.loadCourseDetail();
        this.userLoggedIn = this.isUserLoggedIn();
        this.fieldIsErrorPage = false;
        this.UserIsAdmin = this.checkUserIsAdmin();
    };
    CourseDetailComponent.prototype.loadCourseDetail = function () {
        var _this = this;
        this._CourseCatalogService.getCourse(this.CourseID)
            .subscribe(function (data) {
            _this.DetailedObject = data;
            _this._CourseCatalogService.getStatus(_this.DetailedObject.department, _this.DetailedObject.id)
                .subscribe(function (data) {
                if (data == '-1') {
                    _this.DetailedObject.isRegistered = false;
                }
                else {
                    console.log(_this.DetailedObject.id + " " + data);
                    _this.DetailedObject.isRegistered = true;
                    _this.DetailedObject.completed = data;
                    _this.uploadedFileEdit = _this.DetailedObject.imageURL;
                }
            }, function (error) {
                console.log(error._body);
                ClientScripts.snackbar("There was some error fetching data, Please try again later");
            });
            // this._CourseCatalogService.isRegistered(this.DetailedObject.department, this.DetailedObject.id)
            //         .subscribe(
            //             data => {
            //                 this.DetailedObject['isRegistered'] = data;
            //             },
            //             error => {
            //                 ClientScripts.snackbar(error);
            //             }
            //         )
            _this.fieldIsErrorPage = false;
        }, function (error) {
            _this.fieldIsErrorPage = true;
        });
    };
    CourseDetailComponent.prototype.checkUserIsAdmin = function () {
        if (this._AuthenticationService.getLoggedUserDetail('admin'))
            return true;
        else
            return false;
    };
    CourseDetailComponent.prototype.onUpdateObject = function (CourseUpdateForm) {
        var _this = this;
        this._CourseCatalogService.updateCourse(this.DetailedObject)
            .subscribe(function (data) {
            ClientScripts.snackbar("Course updated Sucessfully");
            _this.loadCourseDetail();
        }, function (error) {
            _this.ResponseErr = error;
            console.log(error);
        });
    };
    CourseDetailComponent.prototype.RegisterIn = function () {
        var _this = this;
        console.log("Clicked");
        this._CourseCatalogService.registerIn(this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("Registration into Course was sucessfull");
            _this.DetailedObject['isRegistered'] = true;
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    CourseDetailComponent.prototype.isUserLoggedIn = function () {
        if (this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    };
    CourseDetailComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this._CourseCatalogService.deleteCourse(this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("Deleted Course " + _this.DetailedObject.title);
            _this.router.navigate(['/department/' + _this.DetailedObject.department]);
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
        // this.router.navigate(['/Department']);
    };
    CourseDetailComponent.prototype.onUnRegisterClick = function () {
        var _this = this;
        this._CourseCatalogService.setStatus("unregister", this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(function (data) {
            if (data) {
                ClientScripts.snackbar("You are unregistered from this course");
                _this.DetailedObject.isRegistered = false;
            }
            else {
                ClientScripts.snackbar("Could not unregister currently, Try again later");
            }
        }, function (error) {
            console.log(error._body);
            ClientScripts.snackbar("There was some error" + error._body);
        });
    };
    CourseDetailComponent.prototype.onCompletedClick = function () {
        var _this = this;
        this._CourseCatalogService.setStatus("complete", this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("Course Marked as completed");
            _this.DetailedObject.isRegistered = true;
            _this.DetailedObject.completed = true;
            console.log(_this.DetailedObject.completed);
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    CourseDetailComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImageEdit');
        this.uploadedFileEdit = inputEl.files['name'];
        //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.DetailedObject['imageURL'] = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    return CourseDetailComponent;
}());
CourseDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/Department/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/Department/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], CourseDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=coursedetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesComponent = (function () {
    function CoursesComponent(_CourseCatalogService, _AuthenticationService, el) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.el = el;
        this.newObject = {};
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.ViewType = 'Course';
        this.loadCourses();
        this.loadDepartments();
        this.userLoggedIn = this.isUserLoggedIn();
        this.uploadedFile = "Select File";
    };
    CoursesComponent.prototype.loadDepartments = function () {
        var _this = this;
        this._CourseCatalogService.getDepartments()
            .subscribe(function (data) {
            _this.departments = data;
        }, function (error) {
            _this.departments = null;
        });
    };
    CoursesComponent.prototype.loadCourses = function () {
        var _this = this;
        this._CourseCatalogService.getCourses()
            .subscribe(function (data) {
            _this.collection = data;
            var _loop_1 = function (i) {
                _this._CourseCatalogService.getStatus(_this.collection[i].department, _this.collection[i].id)
                    .subscribe(function (data) {
                    if (data == '-1') {
                        _this.collection[i].isRegistered = false;
                    }
                    else {
                        console.log(_this.collection[i].id + " " + data);
                        _this.collection[i].isRegistered = true;
                        _this.collection[i].completed = data;
                    }
                }, function (error) {
                    console.log(error._body);
                    ClientScripts.snackbar(error._body);
                });
            };
            for (var i = 0; i < _this.collection.length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            _this.collection = null;
        });
    };
    CoursesComponent.prototype.onAddObject = function (AddCourseForm) {
        var _this = this;
        this._CourseCatalogService.addCourse(this.newObject)
            .subscribe(function (data) {
            ClientScripts.snackbar("Course " + _this.newObject.title + " Added Sucessfully");
            ClientScripts.dismissModalJs('AddObjectModal');
            AddCourseForm.reset;
            _this.loadCourses();
        }, function (error) {
            _this.ResponseErr = error._body;
            console.log(error._body);
        });
        this.loadDepartments();
    };
    CoursesComponent.prototype.isUserLoggedIn = function () {
        if (this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    };
    CoursesComponent.prototype.checkUserIsAdmin = function () {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    };
    CoursesComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImage');
        this.uploadedFile = inputEl.files['name'];
        //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.newObject['imageURL'] = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/Department/collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/Department/collection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], CoursesComponent);

var _a, _b, _c;
//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/departmentDetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(_CourseCatalogService, _AuthenticationService, route, router, el) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
        this.el = el;
        this.DetailedObjectEdit = {};
        this.newCourse = {};
        this.CreditsOccupied = 0;
        this.fieldIsErrorPage = true;
        this.ChartData = [];
        this.ChartLabels = [];
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (Params) {
            if (Params.deptId) {
                _this.DeptID = Params.deptId;
            }
        });
        this.ViewType = "Department";
        this.LoadDepartmentInfo();
        // this.loadDepartmentCourses();
        this.userLoggedIn = this.isUserLoggedIn();
        this.HomeLink = '';
        this.UserIsAdmin = this.checkUserIsAdmin();
        this.uploadedFile = "Choose Image";
    };
    DepartmentDetailComponent.prototype.loadChartData = function () {
        var _this = this;
        this._CourseCatalogService.getTopCourses(this.DeptID)
            .subscribe(function (data) {
            // console.log(data);
            _this.completeChartData = data;
            console.log(_this.completeChartData);
            if (_this.completeChartData.length > 0) {
                for (var i = 0; i < _this.completeChartData.length; i++) {
                    _this.ChartData[i] = _this.completeChartData[i]['count'];
                    _this.ChartLabels[i] = _this.completeChartData[i]['title'];
                }
            }
            else {
                _this.ChartData = [];
                _this.ChartLabels = [];
            }
            _this.chartType = 'pie';
        }, function (error) {
            console.log(error._body);
        });
    };
    DepartmentDetailComponent.prototype.loadDetailedObject = function () {
        var _this = this;
        this._CourseCatalogService.getDepartment(this.DeptID)
            .subscribe(function (data) {
            _this.DetailedObject = data;
            _this.fieldIsErrorPage = false;
            _this._CourseCatalogService.getStatus(_this.DetailedObject.id)
                .subscribe(function (data) {
                if (data == '-1') {
                    _this.DetailedObject.isRegistered = false;
                }
                else {
                    console.log(_this.DetailedObject.id + " " + data);
                    _this.DetailedObject.isRegistered = true;
                    _this.DetailedObject.completed = data;
                    _this.UploadedFileEdit = _this.DetailedObject.imageURL;
                }
            }, function (error) {
                console.log(error._body);
            });
        });
    };
    DepartmentDetailComponent.prototype.loadDepartmentCourses = function () {
        var _this = this;
        this._CourseCatalogService.getCoursesForDepartment(this.DeptID)
            .subscribe(function (data) {
            _this.Courses = data;
            _this.NoOfCourses = data.length;
            var _loop_1 = function (i) {
                _this.CreditsOccupied += +_this.Courses[i].credits;
                _this._CourseCatalogService.getStatus(_this.DetailedObject.id, _this.Courses[i].id)
                    .subscribe(function (data) {
                    if (data == '-1') {
                        _this.Courses[i].isRegistered = false;
                    }
                    else {
                        console.log(_this.Courses[i].id + " " + data);
                        _this.Courses[i].isRegistered = true;
                        _this.Courses[i].completed = data;
                    }
                }, function (error) {
                    console.log(error._body);
                    ClientScripts.snackbar(error._body);
                });
            };
            for (var i = 0; i < _this.Courses.length; i++) {
                _loop_1(i);
            }
            _this.AvailableCredit = 100 - _this.CreditsOccupied;
        });
    };
    DepartmentDetailComponent.prototype.loadPopularCourses = function () {
        var _this = this;
        this._CourseCatalogService.getCoursesForDepartment(this.DeptID, "Registrations")
            .subscribe(function (data) {
            _this.popularCourses = data;
            var max = _this.popularCourses.length > 10 ? 10 : _this.popularCourses.length;
            console.log(data);
            var _loop_2 = function (i) {
                console.log(_this.popularCourses[i]);
                _this._CourseCatalogService.getStatus(_this.DetailedObject.id, _this.popularCourses[i].id)
                    .subscribe(function (data) {
                    if (data == '-1') {
                        _this.popularCourses[i].isRegistered = false;
                    }
                    else {
                        console.log(_this.popularCourses[i].id + " " + data);
                        _this.popularCourses[i].isRegistered = true;
                        _this.popularCourses[i].completed = data;
                    }
                    console.log(_this.popularCourses[i]);
                }, function (error) {
                    console.log(error._body);
                    ClientScripts.snackbar(error._body);
                });
            };
            for (var i = 0; i < max; i++) {
                _loop_2(i);
            }
            _this.popularCourses.sort(function (course1, course2) { return +course1.totalRegistration - course2.totalRegistration; });
        });
    };
    DepartmentDetailComponent.prototype.loadUserCourses = function () {
        var _this = this;
        this._CourseCatalogService.getUserCourses(this.DeptID)
            .subscribe(function (data) {
            console.log(data);
            _this.registeredCourses = data;
            // for(let i=0; i < data.length; i++) {
            //     // console.log(data[i]['CourseDetail'][0]);
            //     this.registeredCourses.push(data[i]['CourseDetail'][0]);
            // }
        });
    };
    DepartmentDetailComponent.prototype.LoadDepartmentInfo = function () {
        this.loadDetailedObject();
        this.refreshCourseList();
    };
    DepartmentDetailComponent.prototype.refreshCourseList = function () {
        this.loadDepartmentCourses();
        this.loadPopularCourses();
        this.loadUserCourses();
        this.loadChartData();
    };
    DepartmentDetailComponent.prototype.isUserLoggedIn = function () {
        if (this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    };
    DepartmentDetailComponent.prototype.notRegistered = function (courseId) {
        return true;
    };
    DepartmentDetailComponent.prototype.onRegisterClick = function (_courseId) {
        var _this = this;
        if (_courseId) {
            console.log("Course Register");
            this._CourseCatalogService.registerIn(this.DetailedObject.id, _courseId)
                .subscribe(function (data) {
                ClientScripts.snackbar("You are now registered into all the courses, expected the already registered, If any !!");
                _this.LoadDepartmentInfo();
            }, function (error) {
                ClientScripts.snackbar(error._body);
            });
        }
        else {
            console.log("Department Register");
            this._CourseCatalogService.registerIn(this.DetailedObject.id)
                .subscribe(function (data) {
                if (data == "1") {
                    ClientScripts.snackbar("You have been sucessfully registered into the course");
                    _this.LoadDepartmentInfo();
                }
                else if (data == "0") {
                    ClientScripts.snackbar("Already Registerd for this course!! Please refresh the page");
                }
            }, function (error) {
                ClientScripts.snackbar(error._body);
            });
        }
    };
    DepartmentDetailComponent.prototype.checkUserIsAdmin = function () {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    };
    DepartmentDetailComponent.prototype.onUpdateObject = function (DepartmentUpdateForm) {
        var _this = this;
        this._CourseCatalogService.updateDepartment(this.DetailedObject)
            .subscribe(function (data) {
            // console.log(this.DetailedObject);
            ClientScripts.snackbar("Department updated Sucessfully");
            _this.loadDetailedObject();
        }, function (error) {
            _this.ResponseErr = error;
            console.log(error._body);
        });
    };
    DepartmentDetailComponent.prototype.onAddCourse = function (CourseForm) {
        var _this = this;
        // console.log(this.newCourse);
        this.newCourse['department'] = this.DetailedObject.id;
        this._CourseCatalogService.addCourse(this.newCourse)
            .subscribe(function (data) {
            ClientScripts.snackbar("Course " + _this.newCourse.title + " Added Sucessfully");
            ClientScripts.dismissModalJs('AddCourseModal');
            CourseForm.reset;
            _this.refreshCourseList();
        }, function (error) {
            _this.ResponseErr = error._body;
            console.log(error._body);
        });
        this.loadDepartmentCourses();
    };
    DepartmentDetailComponent.prototype.onChange = function (ChartType) {
        // console.log(ChartType);
        this.chartType = ChartType;
    };
    DepartmentDetailComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this._CourseCatalogService.deleteDepartment(this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("Deleted Department " + _this.DetailedObject.title);
            _this.router.navigate(['/departments']);
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    DepartmentDetailComponent.prototype.onUnRegisterClick = function () {
        var _this = this;
        this._CourseCatalogService.setStatus("unregister", this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("You are unregistered from all courses in department!! except the completed ones. If any !!");
            _this.LoadDepartmentInfo();
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    DepartmentDetailComponent.prototype.onCompletedClick = function () {
        var _this = this;
        this._CourseCatalogService.setStatus("complete", this.DetailedObject.id)
            .subscribe(function (data) {
            ClientScripts.snackbar("All registered courses has been marked as completed");
            _this.LoadDepartmentInfo();
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    DepartmentDetailComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImage');
        this.uploadedFile = inputEl.files['name'];
        //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.DetailedObject['imageURL'] = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    DepartmentDetailComponent.prototype.uploadImageEdit = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImageEdit');
        this.uploadedFile = inputEl.files['name'];
        //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.DetailedObject['imageURL'] = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    return DepartmentDetailComponent;
}());
DepartmentDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/Department/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/Department/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], DepartmentDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=departmentDetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentsComponent = (function () {
    function DepartmentsComponent(_courseService, _AuthenticationService, el) {
        this._courseService = _courseService;
        this._AuthenticationService = _AuthenticationService;
        this.el = el;
        this.newObject = {};
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.ViewType = 'Department';
        this.loadDepartments();
        this.userLoggedIn = this.isUserLoggedIn();
        this.uploadedFile = "Select File";
    };
    DepartmentsComponent.prototype.loadDepartments = function () {
        var _this = this;
        this._courseService.getDepartments()
            .subscribe(function (data) {
            _this.collection = data;
            var _loop_1 = function (i) {
                _this._courseService.getStatus(_this.collection[i]['id'])
                    .subscribe(function (data) {
                    if (data == '-1') {
                        _this.collection[i].isRegistered = false;
                    }
                    else {
                        console.log(_this.collection[i].id + " " + data);
                        _this.collection[i].isRegistered = true;
                        _this.collection[i].completed = data;
                    }
                }, function (error) {
                    console.log(error._body);
                });
            };
            for (var i = 0; i < _this.collection.length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            _this.collection = null;
        });
    };
    DepartmentsComponent.prototype.onAddObject = function (AddDeptForm) {
        var _this = this;
        this._courseService.addDepartment(this.newObject)
            .subscribe(function (data) {
            ClientScripts.snackbar("Department " + _this.newObject.title + "Added Sucessfully");
            _this.loadDepartments();
            ClientScripts.dismissModalJs('AddObjectModal');
            AddDeptForm.reset;
        }, function (error) {
            _this.ResponseErr = error;
            console.log(error._body);
        });
    };
    DepartmentsComponent.prototype.isUserLoggedIn = function () {
        if (this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    };
    DepartmentsComponent.prototype.checkUserIsAdmin = function () {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    };
    DepartmentsComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImage');
        this.uploadedFile = inputEl.files['name'];
        //call the angular http method
        this._courseService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.newObject['imageURL'] = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    return DepartmentsComponent;
}());
DepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/Department/collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/Department/collection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], DepartmentsComponent);

var _a, _b, _c;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:2000px) {\r\n    #detailBanner {\r\n        padding:10px;\r\n    }\r\n\r\n    #bannerDisplayCard {\r\n        max-width: 200px;\r\n        min-width: 180px;\r\n        box-shadow: 0px 0px 0px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    #detailBanner {\r\n        padding:2px;\r\n    }\r\n\r\n    #detailNav {\r\n        display: none;\r\n    }\r\n\r\n    #detailContent{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n#detailBanner {\r\n    width:100%;\r\n}\r\n\r\n#DetailHeaderImg {\r\n    min-width: 200px;\r\n    max-width: 200px;\r\n    min-height: 200px;\r\n    max-height: 200px;\r\n}\r\n\r\n#AllCourses .card {\r\n    max-width: 203px;\r\n    min-width: 203px;\r\n    border-radius: 0px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.pageWideCard {\r\n    min-width: 100%;\r\n}\r\n\r\n#featuredCourses .card img, #AllCourses .card img{\r\n    min-width: 205px;\r\n    max-width: 205px;\r\n    min-height: 200px;\r\n    max-height: 200px;\r\n}\r\n\r\n.card {\r\n    border-radius: 0px;\r\n}\r\n\r\n#featuredCourses .card, #AllCourses .card {\r\n    min-width: 207px;\r\n    max-width: 205px;\r\n    margin-right: 15px;\r\n    margin-top: 20px;\r\n    border: 1px solid rgb(70, 68, 68);\r\n}\r\n\r\n::-webkit-scrollbar{width:2px;height:2px;}\r\n::-webkit-scrollbar-button{width:2px;height:2px;}\r\n\r\n.card-block  h4,.card-block  p {\r\n    white-space: nowrap;\r\n    width: inherit;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#DetailHeader {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/slider_img3.jpg") + ");\r\n    background-repeat: repeat;\r\n    color: whitesmoke;\r\n    /* background: -moz-linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 100%); /* ff3.6+ */\r\n    /* background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,0,0,1)), color-stop(100%, rgba(0,0,0,1))); safari4+,chrome */\r\n    /* background: -webkit-linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 100%); safari5.1+,chrome10+ */\r\n    /* background: -o-linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 100%); opera 11.10+ */\r\n    /* background: -ms-linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 100%); ie10+ */\r\n    /* background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 100%); w3c */\r\n    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#FF0000',GradientType=1 );    */ \r\n}\r\n\r\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n        color:rgb(255, 255, 255);\r\n        background-color: transparent;\r\n        border-bottom: 5px solid white;\r\n        /* -webkit-box-shadow: 0px -9px 7px -7px black inset;\r\n        -moz-box-shadow: 0px -9px 7px -7px black inset;\r\n        box-shadow: 0px -9px 7px -7px black inset; */\r\n        border-bottom-left-radius: 0px;\r\n        border-bottom-right-radius: 0px;\r\n}\r\n\r\n.nav-pills .nav-link, .nav-pills .nav-link {\r\n    /* font-weight: bolder; */\r\n    /* transition: box-shadow 0.3s ease-out;\r\n    transition: -moz-box-shadow 0.3s ease-out;\r\n    transition: -webkit-box-shadow 0.3s ease-out; */\r\n    border-bottom: 5px solid rgba(255, 255, 255, 0);\r\n    transition: border-bottom-color 0.3s ease;\r\n}\r\n\r\n.dropdown-menu .dropdown-item {\r\n    box-shadow: none;\r\n    color: black !important;\r\n    background-color: transparent !important;\r\n    width: 170px;\r\n    transition: all 0.3s ease;\r\n    margin-top: 4px;\r\n    /* transition: margin-left 0.3s ease;\r\n    transition: margin-right 0.3s ease; */\r\n}\r\n\r\n.dropdown-menu .dropdown-item:hover {\r\n    color: black !important;\r\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n    width: 100%;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n}\r\n\r\n.dropdown-menu .dropdown-item.bg-success:hover {\r\n    color: white !important;\r\n    background-color: green !important;\r\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.dropdown-menu .dropdown-item.bg-danger:hover {\r\n    color: white !important;\r\n    background-color: red !important;\r\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.dropdown-menu {\r\n    padding: 0px;\r\n    background-color: #ffffff70 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Department/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fieldIsErrorPage == false;then success else error\">\r\n</div>\r\n<ng-template #success>\r\n    <div class=\"container-fluid z-depth-1 pt-5\" id=\"DetailHeader\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-4 col-lg-4 pl-5\">\r\n                <img id=\"DetailHeaderImg\" src=\"{{ DetailedObject.imageURL }}\" class=\"img-thumbnail\" alt=\"{{ DetailedObject.title }}\">\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-8 col-lg-8 text-right pr-5\">\r\n                <div class=\"d-flex flex-column align-items-end h-100\">\r\n                    <div class=\"p2 my-auto\">\r\n                        <p class=\"h3 display-3\">{{ DetailedObject.title }}</p>\r\n                        <p class=\"small\" *ngIf=\"ViewType == 'Course'\">Credit Points: <strong>{{DetailedObject.credits}}</strong></p>\r\n                        <p class=\"small text-muted\">Date Created: {{ DetailedObject.dateCreated }}</p>\r\n                    </div>\r\n                    <div class=\" mt-auto p2\">\r\n                        <a *ngIf=\"ViewType == 'Department' && UserIsAdmin==true\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#AddCourseModal\">\r\n                            <i class=\"fa fa-plus-square\"></i><span>&nbsp;&nbsp;Course</span>\r\n                        </a>\r\n                        <a  *ngIf=\"ViewType == 'Department' && userLoggedIn && !DetailedObject.isRegistered\" class=\"btn btn-outline-success\" (click)='onRegisterClick()'><i class=\"fa fa-bolt\"></i><span>&nbsp;&nbsp;Register All Courses</span></a>\r\n                        <a  *ngIf=\"ViewType == 'Course' && userLoggedIn && !DetailedObject.isRegistered\" class=\"btn btn-outline-info\" (click)='RegisterIn()'><i class=\"fa fa-check\" ></i>&nbsp;&nbsp;Register</a>\r\n                        <div *ngIf=\"userLoggedIn && DetailedObject.isRegistered && !DetailedObject.completed\" class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-outline-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-check\"></i>&nbsp;&nbsp;Registered\r\n                            </button>\r\n                            <div class=\"dropdown-menu dropdown-menu-right w-100 text-justify\">\r\n                                <a class=\"dropdown-item btn bg-white text-dark px-2 mx-1 bg-success\" (click)=\"onCompletedClick()\" ><i class=\"far fa-check-square\"></i>&nbsp;&nbsp;&nbsp;Mark Completed</a>\r\n                                <a class=\"dropdown-item btn bg-white text-dark px-2 mx-1 bg-danger\" (click)=\"onUnRegisterClick()\" ><i class=\"fa fa-times\"></i>&nbsp;&nbsp;&nbsp;UnRegister</a>\r\n                            </div>\r\n                        </div>\r\n                        <button *ngIf=\"userLoggedIn && DetailedObject.isRegistered && DetailedObject.completed == true\" class=\"btn btn-outline-success\" href=\"javascript:void(0)\" [disabled]=\"DetailedObject.status == 'completed'\" type=\"button\"><i class=\"far fa-check-square\"></i>&nbsp;&nbsp;Completed</button>\r\n                        <a  *ngIf=\"userLoggedIn && UserIsAdmin==true\" class=\"btn btn-outline-danger\" (click)='onDeleteClick()'><i class=\"fa fa-trash\"></i><span>&nbsp;&nbsp;Delete</span></a>\r\n                    </div>\r\n                    <div *ngIf=\"ViewType == 'Department'\" class=\"modal fade\" id=\"AddCourseModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CourseModal\" aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"top: 1%; margin: 0 auto;\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"modal-body\">\r\n                                    <form name=\"frmNewCourse\" (ngSubmit)=\"cf.form.valid && onAddCourse(cf)\" #cf=\"ngForm\" class=\"col-sm-12\">\r\n                                        <div class=\"d-flex flex-column\">\r\n                                            <div class=\"p2 ml-auto\">\r\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <small *ngIf='ResponseErr' class=\"row\" class=\"alert alert-danger\">\r\n                                                <strong>ResponseErr</strong>\r\n                                            </small>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"p2 mx-auto\">\r\n                                                    <img src=\"{{newCourse.imageURL}}\" style=\"width:200px;height:200px\" class=\"m-2 img-thumbnail\">\r\n                                                    <div class=\"p2 input-group\">\r\n                                                        <div class=\"custom-file\">\r\n                                                            <input type=\"file\" name=\"objImage\" id=\"objImage\" class=\"custom-file-input\">\r\n                                                            <label class=\"custom-file-label\" for=\"objImage\">{{UploadedFile}}</label>\r\n                                                        </div>\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"uploadImageEdit()\" type=\"button\">Upload</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <input type=\"file\" accept=\"image/*\" class=\"custom-file-input\" id=\"courseImg\">\r\n                                            </div>\r\n                                            <div class=\"p2\">\r\n                                                <input type=\"text\" class=\"form-control\" name=\"courseTitle\" id=\"courseTitle\" placeholder=\"Title\" [(ngModel)]=\"newCourse.title\" #title=\"ngModel\" minlength=\"3\" maxlength=\"30\" required>\r\n                                                <p *ngIf=\"!title.valid && (title.dirty || title.touched)\" class=\" small w-100 text-danger\">\r\n                                                    <span *ngIf=\"title.errors.required\">Course title is required</span>\r\n                                                    <span *ngIf=\"title.errors.minlength\">Course title cannot be less than 3 characters</span>\r\n                                                    <span *ngIf=\"title.errors.maxlength\">Course title too large, try to place in abbreviation for same</span>\r\n                                                </p>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"p2 col-sm-10\">\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"courseDesc\" id=\"courseDesc\" placeholder=\"Description\" [(ngModel)]=\"newCourse.description\" minlength=\"15\" maxlength=\"50\" #description=\"ngModel\" required>\r\n                                                    <p *ngIf=\"!description.valid && (description.dirty || description.touched)\" class=\" small w-100 text-danger\">\r\n                                                        <span *ngIf=\"description.errors.required\">Description is required</span>\r\n                                                        <span *ngIf=\"description.errors.minlength\">Description cannot be less than 15 characters</span>\r\n                                                        <span *ngIf=\"description.errors.maxlength\">Description too large, try to place in detail instead</span>\r\n                                                    </p>\r\n                                                </div>\r\n                                                <div class=\"p2 col-sm-2 ml-auto\">\r\n                                                    <input type=\"number\" class=\"form-control\" min=\"1\" max=\"{{ AvailableCredit }}\" name=\"courseCredit\"  id=\"courseCredit\" placeholder=\"Credit\" [(ngModel)]=\"newCourse.credits\" #credits=\"ngModel\" required>\r\n                                                    <p *ngIf=\"!credits.valid && (credits.dirty || credits.touched)\" class=\" small w-100 text-danger\">\r\n                                                        <span *ngIf=\"credits.errors.required\">Credit point is required</span>\r\n                                                        <span *ngIf=\"credits.errors.minlength\">Credit point cannot be less than 1</span>\r\n                                                        <span *ngIf=\"credits.errors.maxlength\">Credit point is interfering with other courses</span>\r\n                                                    </p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"p2\">\r\n                                                <textarea class=\"form-control\" id=\"courseDetail\" minlength=\"5\" maxlength=\"200\" placeholder=\"Details about the course\" rows=\"3\" [(ngModel)]=\"newCourse.detail\" #detail=\"ngModel\" ></textarea>\r\n                                                <p *ngIf=\"!detail.valid && (detail.dirty || detail.touched)\" class=\" small w-100 text-danger\">\r\n                                                        <span *ngIf=\"detail.errors.minlength\">Detail cannot be less than 1</span>\r\n                                                        <span *ngIf=\"detail.errors.maxlength\">Credit point is interfering with other courses</span>\r\n                                                    </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"d-flex row\">\r\n                                            <div class=\"ml-auto\">\r\n                                                <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <nav class=\"nav nav-pills justify-content-center\"  id=\"pills-tab\" role=\"tablist\">\r\n            <a class=\"nav-link active mx-2 px-4\" id=\"About-tab\" data-toggle=\"tab\" href=\"#About\" role=\"tab\" aria-controls=\"About\" aria-selected=\"true\"><strong>About</strong></a>\r\n            <a *ngIf=\"ViewType == 'Department'\" class=\"nav-link mx-2 px-4\" id=\"Courses-tab\" data-toggle=\"tab\" href=\"#Courses\" role=\"tab\" aria-controls=\"Courses\" aria-selected=\"false\"><strong>Courses&nbsp;<span class=\"badge badge-info ml-auto my-auto\">{{NoOfCourses}}</span></strong></a>\r\n            <a *ngIf=\"UserIsAdmin == true\" class=\"nav-link mx-2 px-4\" id=\"EditObj-tab\" data-toggle=\"tab\" href=\"#EditObj\" role=\"tab\" aria-controls=\"EditObj\" aria-selected=\"false\"><strong>Edit</strong></a>\r\n        </nav>\r\n    </div>\r\n    <section class=\"section mb-5 mt-3\">\r\n        <div class=\"container tab-content\">\r\n            <div class=\"tab-pane fade show active\" id=\"About\" role=\"tabpanel\" aria-labelledby=\"About-tab\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"card pageWideCard\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title p2\">About</h4>\r\n                                <hr />\r\n                                <p class=\"card-text\">{{ DetailedObject.description }}</p>\r\n                                <p class=\"card-text\">{{ DetailedObject.detail }}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"ViewType == 'Department' && userLoggedIn\" class=\"row pt-3 px-0\">\r\n                        <div class=\"card-deck w-100 px-0 mx-0\">\r\n                            <div class=\"card col-md-6 col-lg-6 ml-0\">\r\n                                <div class=\"card-header row\">\r\n                                    <h4 class=\"card-title my-auto col-md-8\">Registration Trend</h4>\r\n                                    <select class=\"custom-select ml-auto col-md-4\" id=\"inputGroupSelect02\" (change)=\"onChange($event.target.value)\">\r\n                                        <option disabled selected value>Chart Type</option>\r\n                                        <option value=\"polarArea\">Polar Area</option>\r\n                                        <option value=\"pie\">Pie</option>\r\n                                        <option value=\"doughnut\">Doughnut</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <canvas *ngIf=\"ChartData.length > 0\" baseChart\r\n                                        [data]=\"ChartData\"\r\n                                        [labels]=\"ChartLabels\"\r\n                                        [legend]=\"ChartLegend\"\r\n                                        [chartType]=\"chartType\"></canvas>\r\n                                    <div *ngIf=\"ChartData.length == 0\"><p>Be the first one to register in department<br /><strong *ngIf=\"Courses.length > 0\">Find suitable course in Courses tab</strong></p></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card col-md-6 col-lg-6 mr-0\">\r\n                                <div class=\"card-header row\">\r\n                                    <h4 class=\"card-title my-0\">Registered Courses</h4>\r\n                                    <span class=\"badge badge-dark ml-auto my-auto\">{{registeredCourses.length}}</span>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <p *ngIf='!registeredCourses.length'>You Haven't registered in any course yet..... <br/> <span><strong>Start registering Now !!</strong></span></p>\r\n                                    <div *ngIf='registeredCourses.length' class=\"list-group\" style=\"overflow-y: auto;\">\r\n                                        <div *ngFor='let course of registeredCourses' class=\"list-group-item list-group-item-action px-3 py-2\" >\r\n                                            <div class=\"px-4 py-1 row\">\r\n                                                <a routerLink='{{course.courseId}}'><h4 class=\"card-title m-0\">{{course.title}}</h4></a>\r\n                                                <span class=\"badge badge-info ml-auto my-auto\">{{course.credit}}</span> </div>\r\n                                            <div class=\"px-4 py-1 row\">\r\n                                                <span class=\"small text-muted\">Started on: {{course.dateRegistered}}</span>\r\n                                                <span *ngIf=\"course.completed\" class=\"ml-auto text-dark\">Completed</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf='ViewType == \"Department\" && popularCourses.length' class=\"row pt-3\">\r\n                        <div class=\"card pageWideCard\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Popular Courses</h4>\r\n                                <hr />\r\n                                <div class=\"row\" style=\"overflow-x: auto\">\r\n                                    <div class=\"card-deck flex-nowrap\" id=\"featuredCourses\">\r\n                                        <div *ngFor='let course of popularCourses | CourseFilter: courseFilter' class=\"card p2\" title=\"{{ course.title }}, {{ course.description }}\">\r\n                                            <img class=\"card-img-top\" src=\"{{ course.imageURL }}\" alt=\"{{ course.title }}\">\r\n                                            <div class=\"card-block px-2\">\r\n                                                <a routerLink=\"{{course.id}}\">\r\n                                                    <h4 class=\"card-title\">{{ course.title }}</h4>\r\n                                                    <p class=\"card-subtitle text-muted\">{{ course.description }}</p>\r\n                                                </a>\r\n                                            </div>\r\n                                            <span *ngIf=\"isUserLoggedIn() && course.isRegistered && course.completed == 1\" class=\"badge badge-success\"><i class=\"far fa-check-square\"></i>&nbsp;&nbsp;Completed</span>\r\n                                            <span *ngIf=\"isUserLoggedIn() && course.isRegistered && !course.completed\" class=\"badge badge-info\"><i class=\"fa fa-check\"></i>&nbsp;&nbsp;Registered</span>\r\n                                            <div class=\"card-footer bg-transparent p-0\">\r\n                                                <a *ngIf='isUserLoggedIn() && !course.isRegistered' (click)='onRegisterClick(course.id)' class=\"btn btn-primary w-100 m-auto py-2\">Register</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"ViewType == 'Department'\" class=\"tab-pane fade show\" id=\"Courses\" role=\"tabpanel\" aria-labelledby=\"Courses-tab\">\r\n                <div *ngIf='Courses.length' class=\"container\" id=\"AllCourses\">\r\n                    <div class=\"row\">\r\n                        <input class=\"form-control form-control-lg text-muted\" type=\"text\" name=\"txtSearchCourse\" id=\"txtSearchCourse\" placeholder=\"Search Course\" [(ngModel)]='courseFilter'>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"card-deck\">\r\n                            <div *ngFor='let course of Courses | CourseFilter: courseFilter' class=\"card\" title=\"{{ course.title }}, {{ course.description }}\">\r\n                                <img class=\"card-img-top\"  src=\"{{ course.imageURL }}\" alt=\"{{ course.title }}\">\r\n                                <div class=\"card-block px-2\">\r\n                                    <a routerLink=\"{{course.id}}\">\r\n                                        <h4 class=\"card-title\">{{ course.title }}</h4>\r\n                                        <p class=\"card-subtitle text-muted\">{{ course.description }}</p>\r\n                                    </a>\r\n                                </div>\r\n                                <span *ngIf=\"isUserLoggedIn() && course.isRegistered && course.completed == 1\" class=\"badge badge-success\"><i class=\"fa fa-check-square\"></i>&nbsp;&nbsp;Completed</span>\r\n                                <span *ngIf=\"isUserLoggedIn() && course.isRegistered && !course.completed\" class=\"badge badge-info\"><i class=\"fa fa-check\"></i>&nbsp;&nbsp;Registered</span>\r\n                                <div *ngIf='isUserLoggedIn()' class=\"card-footer bg-transparent p-0\">\r\n                                    <a *ngIf='!course.isRegistered' (click)=\"onRegisterClick(course.id)\" class=\"btn btn-primary w-100 m-auto py-2\">Register</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf='!Courses.length' class=\"container\">\r\n                    <div class=\"row w-100\">\r\n                        <div class=\"card pageWideCard\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">No Courses Yet !!</h4>\r\n                                <hr />\r\n                                <p class=\"card-text\">There are no Courses in this department or courses are getting loaded !! Stay patient...</p>\r\n                                <p class=\"card-text\"><strong>Horrayy !!</strong> no need to study</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade show\" id=\"EditObj\" role=\"tabpanel\" aria-labelledby=\"EditObj-tab\">\r\n                <div class=\"card pageWideCard\">\r\n                    <div class=\"card-body\">\r\n                        <form name=\"frmDetailedObject\" (ngSubmit)=\"df.form.valid && onUpdateObject(df)\" #df=\"ngForm\" class=\"col-sm-12\">\r\n                            <div class=\"d-flex\">\r\n                                <h4 class=\"card-title p2 my-auto\">Edit Detail</h4>\r\n                                <button type=\"submit\" class=\"ml-auto btn btn-primary my-0\">Save</button>\r\n                            </div>\r\n                            <hr />\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4\">\r\n                                        <div class=\"d-flex flex-column\">\r\n                                            <img class=\"p2 img-thumbnail mx-auto\" src=\"{{ DetailedObject.imageURL }}\" style=\"max-width: 250px; max-height: 250px; min-width: 200px; min-height: 200px;\">\r\n                                            <div class=\"p2 input-group\">\r\n                                                <div class=\"custom-file\">\r\n                                                    <input type=\"file\" name=\"objImageEdit\" id=\"objImageEdit\" class=\"custom-file-input\">\r\n                                                    <label class=\"custom-file-label\" for=\"objImageEdit\">{{UploadedFileEdit}}</label>\r\n                                                </div>\r\n                                                <div class=\"input-group-append\">\r\n                                                    <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"uploadImageEdit()\" type=\"button\">Upload</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"DetailedObjectTitle\" id=\"DetailedObjectTitle\" placeholder=\"Title\" [(ngModel)]=\"DetailedObject.title\" minlength=\"3\" maxlength=\"30\" #objTitle=\"ngModel\" value=\"{{ DetailedObject.title }}\" required>\r\n                                        <p *ngIf=\"!objTitle.valid && (objTitle.dirty || objTitle.touched)\" class=\" small w-100 text-danger\">{{ViewType}}\r\n                                            <span *ngIf=\"objTitle.errors.required\">title is required</span>\r\n                                            <span *ngIf=\"objTitle.errors.minlength\">title cannot be less than 3 characters</span>\r\n                                            <span *ngIf=\"objTitle.errors.maxlength\">title too large, try to place in abbreviation for same</span>\r\n                                        </p>\r\n                                        <div class=\"row mx-0\">\r\n                                            <div class=\"px-0\" [ngClass]=\"{'col-md-10':ViewType == 'Course' && !DetailedObject.isRegistered, 'w-100':DetailedObject.isRegistered}\">\r\n                                                <input type=\"text\" class=\"form-control\" name=\"DetailedObjectdescription\" id=\"DetailedObjectdescription\" placeholder=\"Description\" [(ngModel)]=\"DetailedObject.description\" minlength=\"15\" maxlength=\"100\" #objDescription=\"ngModel\" value=\"{{ DetailedObject.description }}\" required>\r\n                                                <p *ngIf=\"!objDescription.valid && (objDescription.dirty || objDescription.touched)\" class=\" small w-100 text-danger\">{{ViewType}}\r\n                                                    <span *ngIf=\"objDescription.errors.required\">description is required</span>\r\n                                                    <span *ngIf=\"objDescription.errors.minlength\">description cannot be less than 5 characters</span>\r\n                                                    <span *ngIf=\"objDescription.errors.maxlength\">description too large, try to place in abbreviation for same</span>\r\n                                                </p>\r\n                                            </div>\r\n                                            <div class=\"pr-0\" *ngIf=\"!DetailedObject.isRegistered && ViewType == 'Course'\" [ngClass]=\"{'col-md-2':ViewType == 'Course'}\">\r\n                                                <input type=\"number\" class=\"form-control\" min=\"1\" name=\"objCredit\"  id=\"objCredit\" placeholder=\"Credit\" [(ngModel)]=\"DetailedObject.credits\" #objCredits=\"ngModel\" style=\"max-width: max-content\" required>\r\n                                                <p *ngIf=\"!objCredits.valid && (objCredits.dirty || objCredits.touched)\" class=\" small text-danger\">\r\n                                                    <span *ngIf=\"objCredits.errors.required\">Credit point is required</span>\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <textarea class=\"form-control card-text\" name=\"DetailedObjectDetail\" id=\"DetailedObjectDetail\" placeholder=\"Detail\" [(ngModel)]=\"DetailedObject.detail\" rows=\"4\" minlength=\"15\" #objDetail=\"ngModel\">{{ DetailedObject.detail }}</textarea>\r\n                                        <p *ngIf=\"!objDetail.valid && (objDetail.dirty || objDetail.touched)\" class=\" small w-100 text-danger\">{{ViewType}}\r\n                                            <span *ngIf=\"objDetail.errors.minlength\">detail cannot be less than 5 characters</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</ng-template>\r\n<ng-template #error>\r\n    <div *ngIf=\"ViewType == 'Department' || ViewType == 'Course';then valueError  else pageError\">\r\n    </div>\r\n</ng-template>\r\n<ng-template #valueError>\r\n    <div *ngIf=\"ViewType == 'Department' && !fieldDepartmentSuccess\">\r\n        <h1>Error 404 : Page Not Found</h1>\r\n        <h2>Maybe you are following a wrong department Id, or the Department has been deleted</h2>\r\n        <p>To browse back to Home Page, please click the\r\n            <a [routerLink]=\"HomeLink\">link</a>\r\n        </p>\r\n    </div>\r\n    <div *ngIf=\"ViewType == 'Course' && !fieldCourseSuccess\">\r\n        <h1>Error 404 : Page Not Found</h1>\r\n        <h2>You are following an incorrect Link, Either the Course or Department has been deleted</h2>\r\n        <p>To browse back to Home Page, please click the\r\n            <a [routerLink]=\"HomeLink\">link</a>\r\n        </p>\r\n    </div>\r\n</ng-template>\r\n<ng-template #pageError>\r\n    <h1>Error 404 : Page Not Found</h1>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Home/filters.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DepartmentFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseFilterPipe = (function () {
    function CourseFilterPipe() {
    }
    CourseFilterPipe.prototype.transform = function (value, args) {
        var filter = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(function (course) {
            return course.title.toLocaleLowerCase().startsWith(filter) != false;
        }) : value;
    };
    return CourseFilterPipe;
}());
CourseFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'CourseFilter' })
], CourseFilterPipe);

var DepartmentFilterPipe = (function () {
    function DepartmentFilterPipe() {
    }
    DepartmentFilterPipe.prototype.transform = function (value, args) {
        var filter = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(function (department) {
            return department.title.toLocaleLowerCase().startsWith(filter) != false;
        }) : value;
    };
    return DepartmentFilterPipe;
}());
DepartmentFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'DepartmentFilter' })
], DepartmentFilterPipe);

//# sourceMappingURL=filters.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 800px),\r\n(max-width: 600px),\r\n(max-width:700px),\r\n(max-width:500px) {\r\n    #departmentSelect {\r\n        display: none;\r\n    }\r\n    \r\n    #srchHomeInput {\r\n        width:70%;\r\n    }\r\n\r\n    #srchHomeBtn {\r\n        display: none !important;\r\n    }\r\n}\r\n\r\n/* .card-deck {\r\n    flex-flow: row;\r\n} */\r\n\r\n::-webkit-scrollbar{width:2px;height:2px;}\r\n::-webkit-scrollbar-button{width:2px;height:2px;}\r\n\r\n@media screen and (min-width: 900px) {\r\n\r\n    #departmentSelect {\r\n        max-width: -webkit-fit-content;\r\n        max-width: -moz-fit-content;\r\n        min-width: 100px;\r\n    }\r\n\r\n    #srchHomeInput {\r\n        width:65%;\r\n        background: transparent;\r\n        color:grey;\r\n    }\r\n\r\n}\r\n\r\n.jumbotron {\r\n    box-shadow: none;\r\n}\r\n\r\n.carousel-item {\r\n    height: 70vh;\r\n    min-height: 300px;\r\n    background: no-repeat center center scroll;\r\n    background-size: cover;\r\n}\r\n\r\n.card {\r\n    border-radius: 0;\r\n    box-shadow: 3px 3px 10px #aaaaaa;\r\n    max-width:220px;\r\n    min-width: 200px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.card .card-img-top {\r\n    height:200px;\r\n    overflow:hidden;\r\n}\r\n\r\n.card-block  h4,.card-block  p {\r\n    white-space: nowrap;\r\n    width: inherit;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"text-center\">\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#carouselExampleIndicators\"  *ngFor='let carouselItem of carouselItems'  data-slide-to=\"carouselItem.sequenceNo\" class=\"carouselItem.status\"></li>\r\n        </ol>\r\n        <div class=\"carousel-inner\">\r\n            <div *ngFor='let carouselItem of carouselItems' class=\"carousel-item {{ carouselItem.status }}\">\r\n                <img class=\"d-block w-100\" src=\"{{ carouselItem.imageURL }}\" alt=\"{{ carouselItem.title }}\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h1 class=\"display-4\">{{ carouselItem.title }}</h1>\r\n                    <h4>{{ carouselItem.description }}</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n</section>\r\n<!-- <section class=\"section feature-box px-4 py-3 default-color-dark\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col\"></div>\r\n            <div class=\"col-lg-10\" id=\"srchHome\">\r\n                <div class=\"input-group\">\r\n                    <select class=\"form-control\" id=\"departmentSelect\">\r\n                        <option style=\"background: transparent;\">Department</option>\r\n                        <option *ngFor='let department of departments' title=\"{{ department.description }}\">{{ department.name }}</option>\r\n                    </select>\r\n                    <input type=\"text\" id=\"srchHomeInput\" class=\"form-control mr-2 rounded-right\" placeholder=\"Search Course\" aria-label=\"Search Course\">\r\n                    <button id =\"srchHomeBtn\" class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\"></div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<section class=\"section feature-box px-5 py-4 white-text special-color\">\r\n    <h1 class=\"section-heading display-3 text-center\">Course Catalog</h1>\r\n    <p class=\"section-description lead text-center px-3\">Browse through our wide list of courses which is specially designed to help you learn at your own pace</p>\r\n    <div class=\"row features-small py-5\">\r\n        <div class=\"col-md-5 mb-r\">\r\n            <div class=\"col-1 col-md-2 float-left\">\r\n                <i class=\"fa fa-bullhorn\"></i>\r\n            </div>\r\n            <div class=\"col-10 col-md-9 col-lg-10 float-right\">\r\n                <h4 class=\"feature-title\">Departments</h4>\r\n                <p class=\"grey-text\">Let me browse throgh the departments to find myself a course</p>\r\n                <a class=\"btn btn-primary btn-sm ml-0 waves-effect waves-light\" (click)=\"gotoPage('Department')\">View</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-1 mb-r\"></div>\r\n        <div class=\"col-md-1 mb-r\" style=\"border-left:1px solid;\"></div>\r\n        <div class=\"col-md-5 mb-r\">\r\n            <div class=\"col-1 col-md-2 float-left\">\r\n                <i class=\"fa fa-cogs\"></i>\r\n            </div>\r\n            <div class=\"col-10 col-md-9 col-lg-10 float-right\">\r\n                <h4 class=\"feature-title\">Courses</h4>\r\n                <p class=\"grey-text\">Take me straight to the courses</p>\r\n                <a class=\"btn btn-pink btn-sm ml-0 waves-effect waves-light\" (click)=\"gotoPage('Course')\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section feature-box pt-3 px-1\">\r\n    <div class=\"container-fluid mt-3 py-5 px-0\" style=\"background-color: white;\">\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <div class=\"col-md-3 featureInfo\">\r\n                <div class=\"d-flex flex-column h-100 \">\r\n                    <div class=\"p2\">\r\n                        <p class=\" h1 display-4 p2\" style=\"overflow-wrap: break-word;\">Featured Department</p> \r\n                    </div>\r\n                    <div class=\"my-auto p-2\">\r\n                            <input class=\"form-control form-control-lg text-muted\" type=\"text\" name=\"txtSearchDepartment\" id=\"txtSearchDepartment\" placeholder=\"Search Department\" [(ngModel)]='departmentFilter'>\r\n                    </div>\r\n                    <div class=\"mt-auto p-2\">\r\n                        <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"gotoPage('Department')\">View All >></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 py-2\" style=\"overflow-x:scroll;\">\r\n                <div class=\"card-deck flex-nowrap pr-3\">\r\n                    <div *ngFor='let department of departments | DepartmentFilter: departmentFilter' class=\"card\" title=\"{{ department.title }}, {{ department.description }}\">\r\n                        <img class=\"card-img-top\" src=\"{{ department.imageURL }}\" alt=\"{{ department.title }}\">\r\n                        <div class=\"card-block p-2\">\r\n                            <a routerLink=\"departments/{{ department.id }}\">\r\n                                <h4 class=\"card-title\">{{ department.title }}</h4>\r\n                                <p class=\"card-subtitle mb-2 text-muted\">{{ department.description }}</p>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"container-fluid mt-3 px-0 py-5\" style=\"background-color: white;\">\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <div class=\"col-md-3 featureInfo\">\r\n                <div class=\"d-flex flex-column h-100 \">\r\n                    <div class=\"p2\">\r\n                        <p class=\" h1 display-4\">Featured Courses</p> \r\n                    </div>\r\n                    <div class=\"my-auto p-2\">\r\n                        <input class=\"form-control form-control-lg text-muted\" type=\"text\" name=\"txtSearchCourse\" id=\"txtSearchCourse\" placeholder=\"Search Course\" [(ngModel)]='courseFilter'>\r\n                    </div>\r\n                    <div class=\"mt-auto p-2\">\r\n                        <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"gotoPage('Course')\">View All >></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 py-2\" style=\"overflow-x:scroll;\">\r\n                <div class=\"card-deck flex-nowrap pr-3\">\r\n                    <div *ngFor='let course of courses | CourseFilter: courseFilter' class=\"card\" title=\"{{ course.title }}, {{ course.description }}\">\r\n                        <img class=\"card-img-top\" src=\"{{ course.imageURL }}\" alt=\"{{ course.title }}\">\r\n                        <div class=\"card-block px-2\">\r\n                            <a routerLink=\"course/{{course.id}}\">\r\n                                <h4 class=\"card-title\">{{ course.title }}</h4>\r\n                                <p class=\"card-subtitle text-muted\">{{ course.description }}</p>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"card-footer bg-transparent p-0\">\r\n                            <a *ngIf='isUserLoggedIn()' routerLink='departments/{{course.department}}/{{course.id}}' class=\"btn btn-primary w-100 m-auto\">Register</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_js_AdditionalScript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_courseService, router) {
        this._courseService = _courseService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._courseService.getCourses(10)
            .subscribe(function (data) {
            _this.courses = data;
        }, function (error) {
            console.log(error._body);
        });
        // console.log("fetching Department Detail");
        this._courseService.getDepartments(10)
            .subscribe(function (_departments) { return _this.departments = _departments; });
        // console.log("fetching Carousel Items");
        this._courseService.getCarouselItems()
            .subscribe(function (_carourselItems) { return _this.carouselItems = _carourselItems; });
    };
    HomeComponent.prototype.isUserLoggedIn = function () {
        this.currentUser = localStorage.getItem('currentUser');
        if (this.currentUser)
            return true;
        else
            return false;
    };
    HomeComponent.prototype.gotoPage = function (Page) {
        if (Page == 'Course')
            this.router.navigate(['/courses']);
        else if (Page == 'Department')
            this.router.navigate(['/departments']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/Home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/Home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/AdminMgmt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMgmtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminMgmtComponent = (function () {
    function AdminMgmtComponent(_CourseCatalogService, _AuthenticationService, route, router) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
    }
    AdminMgmtComponent.prototype.ngOnInit = function () {
        console.log(this.checkUserIsAdmin());
        if (this.checkUserIsAdmin()) {
            console.log("Executed");
            // this.RTChartReady = false;
            this.getUsers();
        }
    };
    AdminMgmtComponent.prototype.checkUserIsAdmin = function () {
        if (this._AuthenticationService.getLoggedUserDetail('admin') == "true")
            return true;
        else
            return false;
    };
    AdminMgmtComponent.prototype.getUsers = function () {
        var _this = this;
        return this._AuthenticationService.getUsers()
            .subscribe(function (data) {
            _this.AllUsers = JSON.parse(data);
            console.log(_this.AllUsers);
        });
    };
    AdminMgmtComponent.prototype.AdminSelectChange = function (id, name, admin) {
        // console.log(id + ' ' + name + ' ' + admin);
        this._AuthenticationService.updateAdmin(id, admin)
            .subscribe(function (data) {
            if (data.admin == 'false') {
                ClientScripts.snackbar("Admin acess revoked for " + name);
            }
            else {
                ClientScripts.snackbar(name + "is Admin now");
            }
        }, function (error) {
            console.log(error._body);
        });
    };
    return AdminMgmtComponent;
}());
AdminMgmtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/User/adminMgmt.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AdminMgmtComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=AdminMgmt.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/adminMgmt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-transparent\" style=\"box-shadow: none;\">\r\n    <div class=\"card-body\">\r\n        <h5><i class=\"fas fa-user-plus\"></i>&nbsp;&nbsp;Admin Management</h5>\r\n        <hr />\r\n        <table *ngIf='AllUsers && AllUsers.length' class=\"table table-striped table-hover\">\r\n            <!--Table head-->\r\n            <thead class=\"blue-grey lighten-4\">\r\n                <tr>\r\n                    <th><input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"nameSearch\"></th>\r\n                    <th><input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"emailSearch\"></th>\r\n                    <th>Admin</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor='let user of AllUsers | UserFilter: nameSearch:emailSearch'>\r\n                    <td class=\"text-dark\">{{user.name}}</td>\r\n                    <td class=\"text-dark\">{{user.email}}</td>\r\n                    <td class=\"py-2 text-dark\">\r\n                        <select class=\"custom-select my-auto\" (change)=\"AdminSelectChange(user.id, user.name, $event.target.value)\" style=\"max-width: max-content\" [(ngModel)]='user.admin'>\r\n                            <option value=\"true\">True</option> \r\n                            <option value=\"false\">False</option>\r\n                        </select>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-size: .875rem;\n}\n\n/*\n * Navbar\n */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n\n/*\n * Utilities\n */\n\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n\n#usrQuickView .blockquote-footer {\n  margin-top: -10px;\n  /* margin-left: 35px; */\n}\n\n#usrQuickView .card {\n  min-width: 200px;\n  background-color: transparent;\n  box-shadow: none;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"usrContent\">\r\n    <div id=\"usrQuickView\" class=\"card-deck mx-auto\">\r\n        <div class=\"card mx-4\" >\r\n            <div class=\"card-body px-1 pt-0\" [ngClass]=\"{'text-success':registeredCourseCount!=0}\">\r\n                <p class=\"mb-0\"><span class=\"h1 display-2\">{{registeredCourseCount}}</span></p><span class=\"blockquote-footer text-dark font-weight-bold\" >Registered Courses</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mx-4\">\r\n            <div class=\"card-body px-1 pt-0\" [ngClass]=\"{'text-success':CoursesCompleted==registeredCourseCount, 'text-danger':CoursesCompleted==0, 'text-warning':CoursesCompleted!=0 && CoursesCompleted<registeredCourseCount }\">\r\n                <p class=\"mb-0\"><span class=\"h1 display-2\">{{CoursesCompleted}}</span>out of {{registeredCourseCount}}</p><span class=\"blockquote-footer text-dark font-weight-bold\">Course Completed</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mx-4\" [ngClass]=\"{'text-success':CreditEarned==CreditTotal, 'text-danger':CreditEarned==0, 'text-warning':CreditEarned!=0 && CoursesCompleted<CreditTotal }\">\r\n            <div class=\"card-body px-1 pt-0\">\r\n                <p class=\"mb-0\"><span class=\"h1 display-2\">{{CreditEarned}}</span>out of {{CreditTotal}}</p><span class=\"blockquote-footer text-dark font-weight-bold\">Credit Earned</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mx-4\">\r\n            <div class=\"card-body px-1 pt-0 text-info\">\r\n                <p class=\"mb-0\"><span class=\"h1 display-2\">0</span></p><span class=\"blockquote-footer text-dark font-weight-bold\">Notification</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"isUserAdmin == 'true'\" class=\"row mt-3\">\r\n    <div class=\"col\">\r\n        <div class=\"card w-100\">\r\n            <div class=\"card-header py-2 row mx-0 bg-transparent\" >\r\n                <div class=\"d-flex w-100\">\r\n                    <div class=\"p2 my-auto\">\r\n                        <h4 class=\"mb-0\"><i class=\"fas fa-chart-line\"></i>&nbsp;&nbsp;Registeration Trend</h4>\r\n                    </div>\r\n                    <div class=\"p2 my-auto ml-auto\">\r\n                        <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\r\n                        <select class=\"custom-select\" (change)=\"onChangeRTPeriod($event.target.value)\" style=\"max-width: max-content;\">\r\n                            <option disabled>Time Period</option>\r\n                            <option selected value=\"Day\">Current Month</option>\r\n                            <option value=\"Month\">Current Year</option>\r\n                            <option value=\"Year\">Last 10 year</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body container pt-3\">\r\n                <div class=\"row\" style=\"height: 200px;\">\r\n                    <canvas *ngIf='RegTrendGrphData.length == 2' baseChart\r\n                        [datasets]=\"RegTrendGrphData\"\r\n                        [labels]=\"RegTrendGraphLabel\"\r\n                        [options]=\"RegTrendGraphOption\"\r\n                        [chartType]=\"RegTrendGraphType\" >\r\n                    </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n    <div class=\"card-deck w-100\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header py-2 row mx-0 bg-transparent\" >\r\n                    <!-- <div class=\"row\"> -->\r\n                        <h4 class=\"mb-0 my-auto\"><i class=\"fas fa-chart-pie\"></i>&nbsp;&nbsp;Top Courses</h4>\r\n                        <select (change)=\"onChangeTCChartType($event.target.value)\" class=\"custom-select ml-auto\" style=\"max-width: max-content;\">\r\n                            <option selected disabled value>Chart Type</option>\r\n                            <option value=\"polarArea\">Polar Area</option>\r\n                            <option value=\"pie\">Pie</option>\r\n                            <option value=\"doughnut\">Doughnut</option>\r\n                        </select>\r\n                        <select (change)=\"onChangeTCDepartment($event.target.value)\" class=\"custom-select ml-auto\" style=\"max-width: max-content;\">\r\n                                <option selected value=\"Overall\">Overall</option>\r\n                                <option *ngFor='let department of departments' value=\"{{department.title}}\">{{department.title}}</option>\r\n                            </select>\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas *ngIf='TCChartLabels.length > 0' baseChart\r\n                        [data]=\"TCChartData\"    \r\n                        [labels]=\"TCChartLabels\"\r\n                        [legend]=\"TCChartLegend\"\r\n                        [chartType]=\"TCChartType\"\r\n                        [options]=\"TCChartOption\"></canvas>\r\n                    <p *ngIf=\"TCChartReady && TCChartData.length == 0\">No Data to displayed</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 pr-0 mr-0\">\r\n            <div class=\"card mr-0 h-100\">\r\n                <img src=\"../../assets/images/profileBanner.gif\" alt=\"card-img-top\" style=\"height: 150px; \">\r\n                <div class=\"card-body text-center\">\r\n                    <img class=\"mx-auto\" src=\"{{userDetail.imageURL}}\" alt=\"card-img-top\" style=\"max-height: 150px; min-height: 150px; min-width:150px; border-radius: 100%; border: 1px solid; margin-top: -30%;\">\r\n                    <p class=\"h5\">{{userDetail.name}}</p>\r\n                    <p class=\"h5 text-muted\">Email : {{userDetail.email}}</p>\r\n                    <p class=\"h5 text-muted\">Joined on : {{userDetail.dob}}</p>\r\n                    <p class=\"h5 text-muted\">Mobile : {{userDetail.mobile}}</p>\r\n                </div>\r\n                <div class=\"card-footer p-0\">\r\n                    <a href=\"/user/profile\" class=\"btn btn-dark w-100 m-auto py-2\">Edit</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_CourseCatalogService, _AuthenticationService, route, router) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
        this.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.noOfDayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.yearArray = [];
        this.dayArray = [];
        this.RegTrendGraphLabel = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.isUserAdmin = this._AuthenticationService.getLoggedUserDetail('admin');
        this.getLoggedUserCourses();
        this.loadUserDetail();
        if (this.isUserAdmin) {
            this.initializeTCChart();
            this.initializeChartData();
            this.getTopCourses();
        }
    };
    DashboardComponent.prototype.loadUserDetail = function () {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        // console.log(this.userDetail);
    };
    DashboardComponent.prototype.loadDepartments = function () {
        var _this = this;
        this._CourseCatalogService.getDepartments()
            .subscribe(function (data) {
            _this.departments = data;
        }, function (error) {
            _this.departments = [];
            //   console.log(error._body);
        });
    };
    DashboardComponent.prototype.onChangeRTPeriod = function (Period) {
        // console.log(Period);
        this.RTPeriod = Period;
        this.RegTrendGrphData = [];
        this.RTChartReady = false;
        this.ArrangeChartDataOf(this.RegistrationTrendData, "User");
        this.ArrangeChartDataOf(this.RegistrationTrendCourse, "Course");
    };
    DashboardComponent.prototype.initializeTCChart = function () {
        this.TCDepartment = "Overall";
        this.TCChartType = "pie";
        this.TCChartLegend = true;
        this.TCChartData = [];
        this.TCChartLabels = [];
        this.TCChartOption = {
            responsive: true,
            legend: {
                display: true,
                position: 'left'
            }
        };
        this.loadDepartments();
        this.getTopCourses();
    };
    DashboardComponent.prototype.getTopCourses = function () {
        var _this = this;
        this._CourseCatalogService.getTopCourses()
            .subscribe(function (data) {
            _this.TopCoursesData = data;
            _this.refreshTCData();
            // console.log(this.TopCoursesData);
        }, function (error) {
            console.log(error._body);
        });
    };
    DashboardComponent.prototype.refreshTCData = function () {
        this.TCChartData = [];
        this.TCChartLabels = [];
        this.TCChartLabelsTemp = [];
        this.TCChartDataTemp = [];
        var TCChartdata = [];
        var TCChartlabel = [];
        this.TCChartLabels.pop();
        if (this.TCDepartment == "Overall") {
            for (var i = 0; i < this.TopCoursesData.length; i++) {
                this.TCChartDataTemp.push(this.TopCoursesData[i]['count']);
                this.TCChartLabelsTemp.push(this.TopCoursesData[i]['title']);
            }
        }
        else {
            for (var i = 0; i < this.TopCoursesData.length; i++) {
                if (this.TopCoursesData[i]['department'] == this.TCDepartment) {
                    this.TCChartDataTemp.push(this.TopCoursesData[i]['count']);
                    this.TCChartLabelsTemp.push(this.TopCoursesData[i]['title']);
                }
            }
        }
        this.TCChartData = this.TCChartDataTemp;
        this.TCChartLabels = this.TCChartLabelsTemp;
        if (!this.TCChartReady)
            this.TCChartReady = true;
    };
    DashboardComponent.prototype.onChangeTCChartType = function (ChartType) {
        this.TCChartType = ChartType;
    };
    DashboardComponent.prototype.onChangeTCDepartment = function (Department) {
        // console.log(Department);
        this.TCDepartment = Department;
        while (this.TCChartLabels.length > 0)
            this.TCChartLabels.pop();
        this.TCChartLabels = [];
        this.refreshTCData();
    };
    DashboardComponent.prototype.initializeChartData = function () {
        this.getChartArray();
        this.RTChartReady = false;
        this.RTPeriod = 'Day';
        this.RTDataOf = 'User';
        this.RegTrendGraphType = 'line';
        this.RegTrendGraphOption = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom'
            }
        };
        this.getChartData();
    };
    DashboardComponent.prototype.getChartData = function () {
        var _this = this;
        this.RegTrendGrphData = [];
        this._CourseCatalogService.getRegistrationTrend("user")
            .subscribe(function (data) {
            _this.RegistrationTrendData = data;
            _this.ArrangeChartDataOf(_this.RegistrationTrendData, "User");
            // console.log(this.RegistrationTrendData)
        }, function (error) {
            // console.log(error._body);
            ClientScripts.snackbar(error._body);
        });
        this._CourseCatalogService.getRegistrationTrend("course")
            .subscribe(function (data) {
            _this.RegistrationTrendCourse = data;
            _this.ArrangeChartDataOf(_this.RegistrationTrendCourse, "Course");
            _this.RTChartReady = true;
            // console.log(this.RegistrationTrendData)
        }, function (error) {
            ClientScripts.snackbar(error._body);
        });
    };
    DashboardComponent.prototype.refreshChartDataOf = function () {
        // this.ArrangeChartDataOf();
    };
    DashboardComponent.prototype.getChartArray = function () {
        this.currentYear = (new Date()).getFullYear();
        this.currentMonth = (new Date()).getMonth();
        for (var i = 9; i >= 0; i--)
            this.yearArray[i] = (this.currentYear - i).toString();
        for (var i = 0; i <= this.noOfDayArray[this.currentMonth]; i++) {
            this.dayArray[i] = i.toString();
        }
    };
    DashboardComponent.prototype.ArrangeChartDataOf = function (RegistrationTrendData, dataLabel) {
        this.ChartData = [];
        switch (this.RTPeriod) {
            case 'Day':
                this.RegTrendGraphLabel = this.dayArray;
                this.ChartData = new Array(this.noOfDayArray[this.currentMonth]);
                for (var i = 0; i < RegistrationTrendData.length; i++) {
                    if ((parseInt(RegistrationTrendData[i]['_id']['month']) == (this.currentMonth + 1)) && (RegistrationTrendData[i]['_id']['year'] == this.currentYear)) {
                        this.ChartData[parseInt(RegistrationTrendData[i]['_id']['day'])] = RegistrationTrendData[i]['count'];
                    }
                }
                for (var i = 0; i <= this.noOfDayArray[this.currentMonth]; i++) {
                    if (!this.ChartData[i])
                        this.ChartData[i] = 0;
                }
                break;
            case 'Month':
                this.RegTrendGraphLabel = this.monthArray;
                for (var i = 0; i < RegistrationTrendData.length; i++) {
                    // console.log(this.RegistrationTrendData[i]['_id']['year']);
                    console.log(RegistrationTrendData[i]);
                    if (RegistrationTrendData[i]['_id']['year'] == this.currentYear) {
                        if (this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month']) - 1] == undefined)
                            this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month']) - 1] = parseInt(RegistrationTrendData[i]['count']);
                        else
                            this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month']) - 1] = this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month']) - 1] + parseInt(RegistrationTrendData[i]['count']);
                        console.log(this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month']) - 1]);
                    }
                }
                for (var i = 0; i < 12; i++) {
                    if (this.ChartData[i] == undefined)
                        this.ChartData[i] = 0;
                }
                break;
            case 'Year':
                this.RegTrendGraphLabel = this.yearArray;
                // console.log(this.RegistrationTrendData)
                for (var i = 0; i < RegistrationTrendData.length; i++) {
                    for (var j = 9; j >= 0; j--) {
                        if (RegistrationTrendData[i]['_id']['year'] == this.yearArray[j]) {
                            // console.log(this.RegistrationTrendData[i]['_id']['year'] + '  ' + this.yearArray[j])
                            if (this.ChartData[j] == undefined)
                                this.ChartData[j] = parseInt(RegistrationTrendData[i]['count']);
                            else
                                this.ChartData[j] = this.ChartData[j] + parseInt(RegistrationTrendData[i]['count']);
                        }
                    }
                }
                for (var i = 0; i < 10; i++) {
                    if (this.ChartData[i] == undefined)
                        this.ChartData[i] = 0;
                }
                break;
        }
        // this.RegTrendGrphData = [{data:this.ChartData, label:dataLabel}];
        this.RegTrendGrphData.push({ data: this.ChartData, label: dataLabel });
        console.log(this.RegTrendGrphData);
        // console.log(this.RegTrendGrphData);
    };
    DashboardComponent.prototype.getLoggedUserCourses = function () {
        var _this = this;
        this.CoursesCompleted = 0;
        this.registeredCourseCount = 0;
        this.CreditEarned = 0;
        this.CreditTotal = 0;
        this._CourseCatalogService.getUserCourses()
            .subscribe(function (data) {
            _this.registeredCourses = data;
            // console.log(data);
            _this.registeredCourseCount = _this.registeredCourses.length;
            for (var i = 0; i < _this.registeredCourseCount; i++) {
                if (_this.registeredCourses[i]['completed']) {
                    _this.CreditEarned = _this.CreditEarned + parseInt(_this.registeredCourses[i]['credit']);
                    _this.CoursesCompleted = _this.CoursesCompleted + 1;
                }
                _this.CreditTotal = _this.CreditTotal + parseInt(_this.registeredCourses[i]['credit']);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/User/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/User/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".courseCard {\r\n    max-width: 203px;\r\n    min-width: 203px;\r\n    border-radius: 0px;\r\n    border: 1px solid rgb(100, 100, 100);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.courseCard .card-img-top {\r\n    width: inherit;\r\n    height: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"max-width:100%\">\r\n    <div class=\"card-header\">\r\n        <div class=\"px-3 d-flex justify-content-around\">\r\n            <p class=\"h5 my-auto\" style=\"min-width: fit-content\">Your Registered Courses</p>\r\n            <div class=\"ml-auto my-auto\" style=\"min-width: fit-content\">\r\n                <input type=\"checkbox\" value=\"GroupByDepartment\"> Group by department\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <input type=\"text\" placeholder=\"Search\" title=\"Type to search among registered courses\" [(ngModel)]='courseFilter'>\r\n        <div class=\"card-deck mt-4\">\r\n            <div *ngFor='let course of registeredCourses | CourseFilter: courseFilter' class=\"card courseCard\" title=\"{{ course.title }}, {{ course.description }}\">\r\n                <img class=\"card-img-top\"  src=\"{{ course.imageURL }}\" alt=\"{{ course.title }}\">\r\n                <div class=\"card-block px-2\">\r\n                    <a href=\"departments/{{course.departmentId}}/{{course.courseId}}\">\r\n                        <h4 class=\"card-title mb-1\">{{ course.title }}</h4>\r\n                        <p class=\"card-subtitle text-muted\">{{ course.description }}</p>\r\n                        <p class=\"small text-muted\">Date Registered: {{ course.dateRegistered }}</p>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"card mt-3\" style=\"max-width:100%\">\r\n    <div class=\"card-header\">\r\n        Popular Courses\r\n    </div>\r\n    <div class=\"card-body\">\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryComponent = (function () {
    function HistoryComponent(_CourseCatalogService, _AuthenticationService, route, router) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getLoggedUserCourses();
    };
    HistoryComponent.prototype.getLoggedUserCourses = function () {
        // this.CoursesCompleted = 0;
        // this.registeredCourseCount = 0;
        // this.CreditEarned = 0;
        // this.CreditTotal = 0;
        var _this = this;
        this._CourseCatalogService.getUserCourses()
            .subscribe(function (data) {
            _this.registeredCourses = data;
            // console.log(data);
            // this.registeredCourseCount = this.registeredCourses.length;
            // for(let i=0; i < this.registeredCourseCount; i++) {
            //     if(this.registeredCourses[i]['completed']) {
            //         this.CreditEarned = this.CreditEarned + parseInt(this.registeredCourses[i]['credit']);
            //         this.CoursesCompleted = this.CoursesCompleted + 1;
            //     }
            //     this.CreditTotal = this.CreditTotal + parseInt(this.registeredCourses[i]['credit']);
            // }
        });
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/User/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/User/history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HistoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-transparent\" style=\"box-shadow: none;\">\r\n    <div class=\"card-body\">\r\n        <form name='updateUser' (ngSubmit)=\"uf.form.valid && onUpdateUser(uf)\" #uf=\"ngForm\" novalidate>\r\n            <div class=\"px-3 row\">\r\n                <h2 class=\"mb-0 my-auto\"><i class=\"fas fa-id-badge\"></i>&nbsp;&nbsp;About</h2>\r\n                <div class=\"ml-auto\">\r\n                    <button *ngIf='!EditEnabled' (click)=\"toggleUserUpdateForm()\" class=\"btn btn-outline-default waves-effect btn-sm m-0\"><i class=\"fa fa-pencil-alt\"></i>&nbsp;&nbsp;&nbsp;Edit</button>\r\n                    <button type=\"submit\" *ngIf='EditEnabled' (disabled)='uf.form.valid' class=\"btn btn-outline-info waves-effect btn-sm m-0\"><i class=\"fa fa-save\"></i>&nbsp;&nbsp;&nbsp;Save</button>\r\n                    <button *ngIf='EditEnabled' (click)=\"toggleUserUpdateForm()\" class=\"btn btn-outline-danger waves-effect btn-sm m-0\"><i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;Cancel</button>\r\n                </div>\r\n            </div>\r\n            <hr class=\"mt-2 mb-3\" />                            \r\n            <fieldset id=\"usrFrmFieldset\" class=\"disabled\" disabled>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"row pr-3 \">\r\n                            <img src=\"{{userDetail.imageURL}}\" alt=\"{{userDetail.name}}\" style=\"height:230px;\" class=\"img-thumbnail col w-100\">\r\n                        </div>\r\n                        <div class=\"row pr-3 mt-2\">\r\n                            <div class=\"custom-file\">\r\n                                <input (change)=\"uploadImage()\" accept=\"image/*\" name=\"objImage\" type=\"file\" class=\"custom-file-input\" id=\"objImage\">\r\n                                <label class=\"custom-file-label\" for=\"customFile\">{{uploadedFile}}</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mt-3 pr-3\">\r\n                            <div class=\"card w-100\">\r\n                                <div class=\"card-header\">\r\n                                    Basic Information\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <input class=\"form-control\" type=\"text\" name=\"frmName\" id=\"frmName\" placeholder=\"Name\" class=\"form-control\" value=\"{{userDetail.name}}\" [(ngModel)]=\"userDetail.name\" minlength=\"3\" maxlength=\"50\" pattern=\"[a-zA-Z ]+\" #usrName=\"ngModel\" >\r\n                                    <p *ngIf=\"!usrName.valid && (usrName.dirty || usrName.touched)\" class=\" small w-100 text-danger\">\r\n                                        <span *ngIf=\"usrName.errors.required\">Name cannot be empty</span>\r\n                                        <span *ngIf=\"usrName.errors.minlength\">Name cannot be less than 3 characters</span>\r\n                                        <span *ngIf=\"usrName.errors.maxlength\">Name is too large, try to place in abbreviation for same</span>\r\n                                        <span *ngIf=\"usrName.errors.pattern\">Name can contain only characters</span>\r\n                                    </p>\r\n                                    <select name=\"frmGender\" class=\"custom-select\" (change)=\"onGenderChange($event.target.value)\" style=\"height: 2.5rem\" [(ngModel)]=\"userDetail.gender\" #usrGender=\"ngModel\">\r\n                                        <option disabled value selected>Gender</option>\r\n                                        <option value=\"1\">Female</option> \r\n                                        <option value=\"0\">Male</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"pb-0\">Contact Information</h4>\r\n                                <hr  class=\"mt-2 mb-3\" />\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-2\">\r\n                                        <label>Address</label>\r\n                                    </div>\r\n                                    <div class=\"col-10\">\r\n                                        <textarea class=\"form-control\" name=\"frmAddress\" placeholder=\"Address\" cols=\"3\" [(ngModel)]=\"userDetail.address\">{{userDetail.address}}</textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-2\">\r\n                                            <label>Mobile</label>\r\n                                        </div>\r\n                                        <div class=\"col-10\">\r\n                                            <input class=\"form-control\" type=\"text\" name=\"frmMobile\" placeholder=\"Mobile number (XXXXXXXXXX)\" pattern=\"^[0-9]{10}$\" value=\"{{userDetail.mobile}}\" [(ngModel)]=\"userDetail.mobile\" #usrMobile=\"ngModel\" >\r\n                                            <p *ngIf=\"!usrMobile.valid && (usrMobile.dirty || usrMobile.touched)\" class=\" small w-100 text-danger\">\r\n                                                <span *ngIf=\"usrMobile.errors.pattern\">Enter your 10 digit mobile number in pattern XXXXXXXXXX</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card mt-3\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"pb-0\">Account Information</h4>\r\n                                <hr  class=\"mt-2 mb-3\" />\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-2\">\r\n                                        <label class=\"my-auto\">Email</label>\r\n                                    </div>\r\n                                    <div class=\"col-10\">\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Email\" value=\"{{userDetail.email}}\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-2\">\r\n                                        <label class=\"my-auto\">Password</label>\r\n                                    </div>\r\n                                    <div class=\"col-10\">\r\n                                        <input class=\"form-control\" type=\"password\" name=\"frmPassword\" placeholder=\"Password\" value=\"{{userDetail.password}}\" pattern=\"^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$\" [(ngModel)]=\"userDetail.password\" #usrPassword=\"ngModel\" required>\r\n                                        <p *ngIf=\"!usrPassword.valid && (usrPassword.dirty || usrPassword.touched)\" class=\" small w-100 text-danger\">\r\n                                            <span *ngIf=\"usrPassword.errors.required\">Password cannot be empty</span>\r\n                                            <span *ngIf=\"usrPassword.errors.pattern\"> Password Must Contain more than 6 character, atleast 1-char and 1-number</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(_CourseCatalogService, _AuthenticationService, route, router, el) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
        this.el = el;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadUserDetail();
        this.uploadedFile = "Choose File";
    };
    ProfileComponent.prototype.onGenderChange = function (Gender) {
        // console.log(Gender);
        this.userDetail.gender = Gender;
    };
    ProfileComponent.prototype.toggleUserUpdateForm = function () {
        console.log("toggled");
        ClientScripts.toggleFieldset("usrFrmFieldset");
        this.EditEnabled ? this.EditEnabled = false : this.EditEnabled = true;
    };
    ProfileComponent.prototype.onUpdateUser = function (userForm) {
        // if(this.userDetail.gender == gender.female)
        //     this.userDetail.imageURL = '../../assets/images/default_avatar_female.jpg';
        // else
        //     this.userDetail.imageURL = '../../assets/images/default_avatar_male.jpg';
        var _this = this;
        if (userForm.valid) {
            console.log("True");
            this._AuthenticationService.updateUser(this.userDetail)
                .subscribe(function (data) {
                _this._AuthenticationService.setLoggedUserDetail("", "", data);
                _this.loadUserDetail();
                ClientScripts.snackbar("Updated Information");
                _this.toggleUserUpdateForm();
                // location.reload();
            }, function (error) {
                ClientScripts.snackbar(error._body);
            });
        }
        else {
            ClientScripts.snackbar("There are errors in form data");
        }
    };
    ProfileComponent.prototype.loadUserDetail = function () {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        // console.log(this.userDetail);
    };
    ProfileComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#objImage');
        this.uploadedFile = inputEl.files['name'];
        //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
            .subscribe(function (data) {
            // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
            _this.userDetail.imageURL = "http://localhost:2222/" + data["_body"];
            // ClientScripts.snackbar("Image Uploaded");
        }, function (error) {
            console.log(error._body);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/User/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/User/userFilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (Users, nameSearch, emailSearch) {
        // return filter ? value.filter((user) =>
        //     user.name.toLocaleLowerCase().startsWith(filter) != false) : value;
        if (Users && Users.length) {
            return Users.filter(function (user) {
                if (nameSearch && !user.name.toLowerCase().startsWith(nameSearch.toLowerCase())) {
                    return false;
                }
                if (emailSearch && !user.email.toLowerCase().startsWith(emailSearch.toLowerCase())) {
                    return false;
                }
                return true;
            });
        }
        else {
            return Users;
        }
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'UserFilter' })
], UserFilterPipe);

//# sourceMappingURL=userFilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height:0;\r\n    transition: .5s ease;\r\n}\r\n\r\n.card-body:hover .overlay {\r\n    bottom: 0;\r\n    height: 100%;\r\n}\r\n\r\n.card {\r\n    border-radius: 0%;\r\n}\r\n\r\n.card-block  h4,.card-block  p {\r\n    white-space: nowrap;\r\n    width: inherit;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#btn-sidebar{\r\n    opacity: 0.3;\r\n    transition: opacity 0.3s;\r\n    -webkit-transition: opacity 0.3s;\r\n}\r\n\r\n#btn-sidebar:hover{\r\n    opacity: 1;\r\n}\r\n\r\n.nav {\r\n    box-shadow: 5px 0px 10px -5px;\r\n}\r\n\r\n.nav-link, .nav-link .feather {\r\n    color: white !important;\r\n}\r\n\r\n.nav-link:hover, .nav-link:hover .feather {\r\n    color: black !important;\r\n}\r\n\r\n.feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n\r\n  /* .nav-link.btn:hover {\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n  } */\r\n  \r\n  .sidebar {\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 99; /* Behind the navbar */\r\n    padding: 0;\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n    .sidebar #usrNavImg {\r\n        border-radius: 100%;\r\n        height:100px;\r\n        border: 1px solid;\r\n    }\r\n\r\n    /* .sidebar.active {\r\n        width: 70px;\r\n    } */\r\n\r\n    .sidebar.active .navlink-heading{\r\n        display: none;\r\n    }\r\n\r\n    .sidebar.active #usrNavImg {\r\n        height: 50px !important;\r\n    }\r\n  \r\n    .sidebar-sticky {\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 48px; /* Height of navbar */\r\n        height: calc(100vh - 48px);\r\n        padding-top: .5rem;\r\n        overflow-x: hidden;\r\n        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n    }\r\n  \r\n    .sidebar-heading {\r\n        font-size: .75rem;\r\n        text-transform: uppercase;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2 pt-3\">\r\n    <!-- <div class=\"nav special-color justify-content-end w-100\" style=\"position: fixed; top:75px; z-index: 100;\" id=\"UsrNavbar\">\r\n        <div class=\"p2 mx-auto text-center nav-link\" style=\"min-height:40vh\">\r\n            <img id=\"usrNavImg\" src=\"{{userDetail.imageURL}}\" alt=\"User Image\">\r\n            <p class=\"mt-2\">{{userDetail.name}}</p>\r\n        </div>\r\n        <a [ngClass]=\"{active:ActivatedURL == 'dashboard'}\" class=\"nav-link\" title=\"Dashboard\" href=\"/user/dashboard\">\r\n            <i class=\"far fa-chart-bar feather\" style=\"width:25px\"></i>\r\n            <span class=\"mb-1\">Dashboard</span>\r\n        </a>\r\n        <a [ngClass]=\"{active:ActivatedURL == 'adminMgmt'}\" *ngIf='userDetail.admin' class=\"nav-link\" title=\"Admin Mgmt\" href=\"/user/adminMgmt\">\r\n            <i class=\"fa fa-users feather\" style=\"width:25px\"></i>\r\n            <span class=\"mb-1\">Admin Mgmt</span>\r\n        </a>\r\n        <a [ngClass]=\"{active:ActivatedURL == 'profile'}\" class=\"nav-link\" title=\"Profile\" href=\"/user/profile\">\r\n            <i class=\"fas fa-address-card feather\" style=\"width:25px\"></i>\r\n            <span class=\"mb-1\">Profile</span>\r\n        </a>\r\n        <a [ngClass]=\"{active:ActivatedURL == 'history'}\" class=\"nav-link\" title=\"History\" href=\"/user/history\">\r\n            <i class=\"fa fa-history feather\" style=\"width:25px\"></i>\r\n            <span class=\"mb-1\">History</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"container\"> -->\r\n        <router-outlet></router-outlet>\r\n        <!-- <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n                <div class=\"row\" id=\"usrContent\">\r\n                    <div id=\"usrQuickView\" class=\"card-deck mx-auto\" style=\"margin-top: -20px;\">\r\n                        <div class=\"card mx-4\" >\r\n                            <div class=\"card-body px-1 pt-0\" [ngClass]=\"{'text-success':registeredCourseCount!=0}\">\r\n                                <p class=\"mb-0\"><span class=\"h1 display-2\">{{registeredCourseCount}}</span></p><span class=\"blockquote-footer text-dark font-weight-bold\" >Registered Courses</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card mx-4\">\r\n                            <div class=\"card-body px-1 pt-0\" [ngClass]=\"{'text-success':CoursesCompleted==registeredCourseCount, 'text-danger':CoursesCompleted==0, 'text-warning':CoursesCompleted!=0 && CoursesCompleted<registeredCourseCount }\">\r\n                                <p class=\"mb-0\"><span class=\"h1 display-2\">{{CoursesCompleted}}</span>out of {{registeredCourseCount}}</p><span class=\"blockquote-footer text-dark font-weight-bold\">Course Completed</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card mx-4\" [ngClass]=\"{'text-success':CreditEarned==CreditTotal, 'text-danger':CreditEarned==0, 'text-warning':CreditEarned!=0 && CoursesCompleted<CreditTotal }\">\r\n                            <div class=\"card-body px-1 pt-0\">\r\n                                <p class=\"mb-0\"><span class=\"h1 display-2\">{{CreditEarned}}</span>out of {{CreditTotal}}</p><span class=\"blockquote-footer text-dark font-weight-bold\">Credit Earned</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card mx-4\">\r\n                            <div class=\"card-body px-1 pt-0 text-info\">\r\n                                <p class=\"mb-0\"><span class=\"h1 display-2\">0</span></p><span class=\"blockquote-footer text-dark font-weight-bold\">Notification</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col\">\r\n                        <div class=\"card w-100\">\r\n                            <div class=\"card-header py-2 row mx-0 bg-transparent\" >\r\n                                <div class=\"d-flex w-100\">\r\n                                    <div class=\"p2 my-auto\">\r\n                                        <h4 class=\"mb-0\"><i class=\"fas fa-chart-line\"></i>&nbsp;&nbsp;Registeration Trend</h4>\r\n                                    </div>\r\n                                    <div class=\"p2 my-auto ml-auto\">\r\n                                        <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\r\n                                        <select class=\"custom-select\" (change)=\"onChangeRTPeriod($event.target.value)\" style=\"max-width: max-content;\">\r\n                                            <option disabled>Time Period</option>\r\n                                            <option selected value=\"Day\">Current Month</option>\r\n                                            <option value=\"Month\">Current Year</option>\r\n                                            <option value=\"Year\">Last 10 year</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body container pt-3\">\r\n                                <div class=\"row\" style=\"height: 200px;\">\r\n                                    <canvas *ngIf='RegTrendGrphData.length == 2' baseChart\r\n                                        [datasets]=\"RegTrendGrphData\"\r\n                                        [labels]=\"RegTrendGraphLabel\"\r\n                                        [options]=\"RegTrendGraphOption\"\r\n                                        [chartType]=\"RegTrendGraphType\" >\r\n                                    </canvas>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"card-deck w-100\">\r\n                        <div class=\"col-md-8\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header py-2 row mx-0 bg-transparent\" >\r\n                                        <h4 class=\"mb-0 my-auto\"><i class=\"fas fa-chart-pie\"></i>&nbsp;&nbsp;Top Courses</h4>\r\n                                        <select (change)=\"onChangeTCChartType($event.target.value)\" class=\"custom-select ml-auto\" style=\"max-width: max-content;\">\r\n                                            <option selected disabled value>Chart Type</option>\r\n                                            <option value=\"polarArea\">Polar Area</option>\r\n                                            <option value=\"pie\">Pie</option>\r\n                                            <option value=\"doughnut\">Doughnut</option>\r\n                                        </select>\r\n                                        <select (change)=\"onChangeTCDepartment($event.target.value)\" class=\"custom-select ml-auto\" style=\"max-width: max-content;\">\r\n                                                <option selected value=\"Overall\">Overall</option>\r\n                                                <option *ngFor='let department of departments' value=\"{{department.title}}\">{{department.title}}</option>\r\n                                            </select>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <canvas *ngIf='TCChartLabels.length > 0' baseChart\r\n                                        [data]=\"TCChartData\"    \r\n                                        [labels]=\"TCChartLabels\"\r\n                                        [legend]=\"TCChartLegend\"\r\n                                        [chartType]=\"TCChartType\"\r\n                                        [options]=\"TCChartOption\"></canvas>\r\n                                    <p *ngIf=\"TCChartReady && TCChartData.length == 0\">No Data to displayed</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 pr-0 mr-0\">\r\n                            <div class=\"card mr-0 h-100\">\r\n                                <img src=\"../../assets/images/profileBanner.gif\" alt=\"card-img-top\" style=\"height: 150px; \">\r\n                                <div class=\"card-body text-center\">\r\n                                    <img class=\"mx-auto\" src=\"{{userDetail.imageURL}}\" alt=\"card-img-top\" style=\"height: 150px; width: 150px; border-radius: 100%; border: 1px solid; margin-top: -30%;\">\r\n                                    <p class=\"h5\">{{userDetail.name}}</p>\r\n                                    <p class=\"h5 text-muted\">Email : {{userDetail.email}}</p>\r\n                                    <p class=\"h5 text-muted\">Joined on : {{userDetail.dob}}</p>\r\n                                    <p class=\"h5 text-muted\">Mobile : {{userDetail.mobile}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade px-3\" id=\"v-pills-AdminMgmt\" role=\"tabpanel\" aria-labelledby=\"v-pills-AdminMgmt-tab\">\r\n                <div class=\"card bg-transparent\" style=\"box-shadow: none;\">\r\n                    <div class=\"card-body\">\r\n                        <h5><i class=\"fas fa-user-plus\"></i>&nbsp;&nbsp;Admin Management</h5>\r\n                        <hr />\r\n                        <table *ngIf='AllUsers && AllUsers.length' class=\"table table-striped table-hover\">\r\n                            <thead class=\"blue-grey lighten-4\">\r\n                                <tr>\r\n                                    <th><input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"nameSearch\"></th>\r\n                                    <th><input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"emailSearch\"></th>\r\n                                    <th>Admin</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor='let user of AllUsers | UserFilter: nameSearch:emailSearch'>\r\n                                    <td class=\"text-dark\">{{user.name}}</td>\r\n                                    <td class=\"text-dark\">{{user.email}}</td>\r\n                                    <td class=\"py-2 text-dark\">\r\n                                        <select class=\"custom-select my-auto\" (change)=\"AdminSelectChange(user.id, user.name, $event.target.value)\" style=\"max-width: max-content\" [(ngModel)]='user.admin'>\r\n                                            <option value=\"true\">True</option> \r\n                                            <option value=\"false\">False</option>\r\n                                        </select>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"v-pills-history\" role=\"tabpanel\" aria-labelledby=\"v-pills-history-tab\">\r\n                <div class=\"container\">\r\n                    <div class=\"card\" style=\"max-width:100%\">\r\n                        <div class=\"card-header\">\r\n                            <div class=\"px-3 d-flex justify-content-around\">\r\n                                <p class=\"h5 my-auto\" style=\"min-width: fit-content\">Your Registered Courses</p>\r\n                                <div class=\"ml-auto my-auto\" style=\"min-width: fit-content\">\r\n                                    <input type=\"checkbox\" value=\"GroupByDepartment\"> Group by department\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <input type=\"text\" placeholder=\"Search\" title=\"Type to search among registered courses\" [(ngModel)]='courseFilter'>\r\n                            <div class=\"card-deck mt-4\">\r\n                                <div *ngFor='let course of registeredCourses | CourseFilter: courseFilter' class=\"card courseCard\" title=\"{{ course.title }}, {{ course.description }}\">\r\n                                    <img class=\"card-img-top\"  src=\"{{ course.imageURL }}\" alt=\"{{ course.title }}\">\r\n                                    <div class=\"card-block px-2\">\r\n                                        <a href=\"departments/{{course.departmentId}}/{{course.courseId}}\">\r\n                                            <h4 class=\"card-title mb-1\">{{ course.title }}</h4>\r\n                                            <p class=\"card-subtitle text-muted\">{{ course.description }}</p>\r\n                                            <p class=\"small text-muted\">Date Registered: {{ course.dateRegistered }}</p>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\r\n                <div class=\"card bg-transparent\" style=\"box-shadow: none;\">\r\n                    <div class=\"card-body\">\r\n                        <form name='updateUser' (ngSubmit)=\"uf.form.valid && onUpdateUser(uf)\" #uf=\"ngForm\" novalidate>\r\n                            <div class=\"px-3 row\">\r\n                                <h2 class=\"mb-0 my-auto\"><i class=\"fas fa-id-badge\"></i>&nbsp;&nbsp;About</h2>\r\n                                <div class=\"ml-auto\">\r\n                                    <button *ngIf='!EditEnabled' (click)=\"toggleUserUpdateForm()\" class=\"btn btn-outline-default waves-effect btn-sm m-0\"><i class=\"fa fa-pencil-alt\"></i>&nbsp;&nbsp;&nbsp;Edit</button>\r\n                                    <button type=\"submit\" *ngIf='EditEnabled' (disabled)='uf.form.valid' class=\"btn btn-outline-info waves-effect btn-sm m-0\"><i class=\"fa fa-save\"></i>&nbsp;&nbsp;&nbsp;Save</button>\r\n                                    <button *ngIf='EditEnabled' (click)=\"toggleUserUpdateForm()\" class=\"btn btn-outline-danger waves-effect btn-sm m-0\"><i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;Cancel</button>\r\n                                </div>\r\n                            </div>\r\n                            <hr class=\"mt-2 mb-3\" />                            \r\n                            <fieldset id=\"usrFrmFieldset\" class=\"disabled\" disabled>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"row pr-3 \">\r\n                                            <img src=\"{{userDetail.imageURL}}\" alt=\"...\" class=\"img-thumbnail col w-100\">\r\n                                        </div>\r\n                                        <div class=\"row pr-3 mt-3\">\r\n                                            <div class=\"custom-file\">\r\n                                                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\r\n                                                <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row pr-3 mt-3\">\r\n                                            <div class=\"card w-100\">\r\n                                                <div class=\"card-header\">\r\n                                                    Basic Information\r\n                                                </div>\r\n                                                <div class=\"card-body\">\r\n                                                    <input class=\"form-control\" type=\"text\" name=\"frmName\" id=\"frmName\" placeholder=\"Name\" class=\"form-control\" value=\"{{userDetail.name}}\" [(ngModel)]=\"userDetail.name\" minlength=\"3\" maxlength=\"50\" pattern=\"[a-zA-Z ]+\" #usrName=\"ngModel\" >\r\n                                                    <p *ngIf=\"!usrName.valid && (usrName.dirty || usrName.touched)\" class=\" small w-100 text-danger\">\r\n                                                        <span *ngIf=\"usrName.errors.required\">Name cannot be empty</span>\r\n                                                        <span *ngIf=\"usrName.errors.minlength\">Name cannot be less than 3 characters</span>\r\n                                                        <span *ngIf=\"usrName.errors.maxlength\">Name is too large, try to place in abbreviation for same</span>\r\n                                                        <span *ngIf=\"usrName.errors.pattern\">Name can contain only characters</span>\r\n                                                    </p>\r\n                                                    <select name=\"frmGender\" class=\"custom-select\" (change)=\"onGenderChange($event.target.value)\" style=\"height: 2.5rem\" [(ngModel)]=\"userDetail.gender\" #usrGender=\"ngModel\">\r\n                                                        <option disabled value selected>Gender</option>\r\n                                                        <option value=\"1\">Female</option> \r\n                                                        <option value=\"0\">Male</option>\r\n                                                    </select>\r\n                                                    <input class=\"form-control\" type=\"text\" id=\"frmJoinedOn\" placeholder=\"Joined on\" class=\"form-control\" value=\"{{userDetail.dob}}\" readonly> \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <h4 class=\"pb-0\">Contact Information</h4>\r\n                                                <hr  class=\"mt-2 mb-3\" />\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-2\">\r\n                                                        <label>Address</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-10\">\r\n                                                        <textarea class=\"form-control\" name=\"frmAddress\" placeholder=\"Address\" cols=\"3\" [(ngModel)]=\"userDetail.address\">{{userDetail.address}}</textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-2\">\r\n                                                            <label>Mobile</label>\r\n                                                        </div>\r\n                                                        <div class=\"col-10\">\r\n                                                            <input class=\"form-control\" type=\"text\" name=\"frmMobile\" placeholder=\"Mobile number (XXXXXXXXXX)\" pattern=\"^[0-9]{10}$\" value=\"{{userDetail.mobile}}\" [(ngModel)]=\"userDetail.mobile\" #usrMobile=\"ngModel\" >\r\n                                                            <p *ngIf=\"!usrMobile.valid && (usrMobile.dirty || usrMobile.touched)\" class=\" small w-100 text-danger\">\r\n                                                                <span *ngIf=\"usrMobile.errors.pattern\">Enter your 10 digit mobile number in pattern XXXXXXXXXX</span>\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card mt-3\">\r\n                                            <div class=\"card-body\">\r\n                                                <h4 class=\"pb-0\">Account Information</h4>\r\n                                                <hr  class=\"mt-2 mb-3\" />\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-2\">\r\n                                                        <label class=\"my-auto\">Email</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-10\">\r\n                                                        <input class=\"form-control\" type=\"text\" placeholder=\"Email\" value=\"{{userDetail.email}}\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-2\">\r\n                                                        <label class=\"my-auto\">Password</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-10\">\r\n                                                        <input class=\"form-control\" type=\"password\" name=\"frmPassword\" placeholder=\"Password\" value=\"{{userDetail.password}}\" pattern=\"^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$\" [(ngModel)]=\"userDetail.password\" #usrPassword=\"ngModel\" required>\r\n                                                        <p *ngIf=\"!usrPassword.valid && (usrPassword.dirty || usrPassword.touched)\" class=\" small w-100 text-danger\">\r\n                                                            <span *ngIf=\"usrPassword.errors.required\">Password cannot be empty</span>\r\n                                                            <span *ngIf=\"usrPassword.errors.pattern\"> Password Must Contain more than 6 character, atleast 1-char and 1-number</span>\r\n                                                        </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/CourseCatalog/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(_CourseCatalogService, _AuthenticationService, route, router) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadUserDetail();
        console.log("Parent component");
        this.activatedSidebar();
    };
    UserComponent.prototype.isUserLoggedIn = function () {
        if (this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    };
    UserComponent.prototype.activatedSidebar = function () {
        switch (location.pathname) {
            case "/user/dashboard":
                this.ActivatedURL = "dashboard";
                break;
            case "/user/adminMgmt":
                this.ActivatedURL = "adminMgmt";
                break;
            case "/user/profile":
                this.ActivatedURL = "profile";
                break;
            case "/user/history":
                this.ActivatedURL = "history";
                break;
        }
    };
    UserComponent.prototype.checkUserIsAdmin = function () {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    };
    UserComponent.prototype.loadUserDetail = function () {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        console.log(this.userDetail);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/CourseCatalog/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CourseCatalog/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.dropdown-item,.dropdown-item p,.dropdown-item small, .dropdown-item  a{\r\n    color: white !important;\r\n}\r\n\r\na.dropdown-item:hover, .dropdown-item:hover p, .dropdown-item:hover a, .dropdown-item:hover small{\r\n    color: black !important;\r\n}\r\n\r\n.dropdown-menu .dropdown-item img {\r\n    border: 1px solid black !important;\r\n}\r\n\r\n.dropdown-item {\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n\r\na.dropdown-item, div.dropdown-item {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    width: 240px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.dropdown-item:hover {\r\n    width: 248px !important;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.dropdown-menu {\r\n    right:0px;\r\n    width:250px;\r\n    left:auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar special-color\">\r\n        <a class=\"navbar-brand my-auto h5\" href=\"/\">\r\n            <img src=\"assets/images/course-icon.png\" height=\"40\" class=\"d-inline-block align-center\" alt=\"\">\r\n            CapstoneProject\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n            <ul class=\"navbar-nav mr-auto white-text\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [ngClass]=\"{active:isHomeURL}\" href=\"/\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Home<span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [ngClass]=\"{active:isDepartmentURL}\" href=\"/departments\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Departments</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [ngClass]=\"{active:isCourseURL}\" href=\"/courses\"><i class=\"fa fa-copy\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Courses</a>\r\n                </li>\r\n            </ul>\r\n                <a *ngIf=\"UserLoggedIn == false\" class=\"btn nav-link btn-outline-info\"  data-toggle=\"modal\" data-target=\"#LoginModal\"href=\"#\"><i class=\"fas fa-sign-in-alt\"></i>&nbsp;&nbsp;Login / SignUp</a>\r\n                <!-- <div class=\"btn-group nav-link\">\r\n                    <h5 class=\"dropdown-toggle text-white\" data-toggle=\"dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        {{CurrentUser}}\r\n                    </h5>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" href=\"#\" routerLink=\"user\">My Page</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onSignOut();\">Sign Out</a>\r\n                    </div>\r\n                </div> -->\r\n                <!-- <div *ngIf=\"CurrentUser\"  class=\"btn-group nav-link\">\r\n                    <a class=\"btn bg-transparent\"><i *ngIf=\"!isAdmin\" class=\"far fa-user-circle\"></i><i *ngIf=\"isAdmin\" class=\"fas fa-user-circle\"></i>&nbsp;&nbsp;{{CurrentUser}}</a>\r\n                    <button type=\"button\" class=\"btn bg-transparent dropdown-toggle px-3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">User Options</span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"far fa-chart-bar\"></i>&nbsp;&nbsp;Dashboard</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-sign-out-alt\"></i>&nbsp;&nbsp;Log Out</a>\r\n                    </div>\r\n                </div> -->\r\n            <div *ngIf=\"UserLoggedIn\" class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn special-color\"><i *ngIf=\"!isAdmin\" class=\"far fa-user-circle\"></i><i *ngIf=\"isAdmin\" class=\"fas fa-user-circle\"></i>&nbsp;&nbsp;{{userDetail.name}}</button>\r\n                <button type=\"button\" class=\"btn dropdown-toggle px-3 special-color\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"usrMenu\">\r\n                    <span class=\"sr-only\">User Options</span>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right special-color\" aria-labelledby=\"usrMenu\">\r\n                    <div class=\"dropdown-item container\">\r\n                        <div class=\"row px-2\">\r\n                            <div class=\"col-sm-4 px-0\">\r\n                                <img src=\"{{userDetail.imageURL}}\" style=\"min-height: 75px; max-height: 75px; min-width: 75px; max-width: 75px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-8\">\r\n                                <p class=\"mb-0\">{{userDetail.name}}</p>\r\n                                <small class=\"\">Joined: {{userDetail.dob}}</small>\r\n                                <a class=\"mb-0 p-0 d-block\" href=\"javascript:void(0)\" href=\"/user/profile\">Profile</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"dropdown-item mx-auto\" href=\"javascript:void(0);\" routerLink=\"user/dashboard\"><i class=\"far fa-chart-bar\"></i>&nbsp;&nbsp;Dashboard</a>\r\n                    <a class=\"dropdown-item mx-auto\" href=\"javascript:void(0);\" routerLink=\"user/history\"><i class=\"fa fa-history\"></i>&nbsp;&nbsp;History</a>\r\n                    <a *ngIf=\"isAdminOrNot() == 'true'\" class=\"dropdown-item mx-auto\" href=\"javascript:void(0);\" routerLink=\"user/adminMgmt\"><i class=\"fa fa-users\"></i>&nbsp;&nbsp;Admin Mgmt</a>\r\n                    <a class=\"dropdown-item mx-auto\" href=\"javascript:void(0);\" (click)=\"onSignOut();\"><i class=\"fas fa-sign-out-alt\"></i>&nbsp;&nbsp;Log Out</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\">\r\n            <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"#\">\r\n                    <strong>MDB</strong>\r\n                </a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-7\" aria-controls=\"navbarSupportedContent-7\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-7\">\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n                        <li class=\"nav-item active\">\r\n                            <a class=\"nav-link waves-effect waves-light\" href=\"#\">Home\r\n                                <span class=\"sr-only\">(current)</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link waves-effect waves-light\" href=\"#\">Link</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link waves-effect waves-light\" href=\"#\">Profile</a>\r\n                        </li>\r\n                    </ul>\r\n                    <form class=\"form-inline waves-effect waves-light\">\r\n                        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </nav> -->\r\n    <div class=\"modal fade\" id=\"LoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"LoginModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"top: 18%; margin: 0 auto;\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">X</span>\r\n                    </button>\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"row\">\r\n                                    <form (ngSubmit)=\"f.form.valid && onLogin(f)\" #f=\"ngForm\" name=\"frmLogin\" class=\"w-100 pr-4\" novalidate>\r\n                                        <legend>Login to Course Catalog</legend>\r\n                                        <p *ngIf=\"activity == 'login' && error == true\" class=\"alert alert-danger\">{{responseMsg}}</p>\r\n                                        <p *ngIf=\"activity == 'login' && error == false\" class=\"alert alert-sucess\">{{responseMsg}}</p>\r\n                                        <div class=\"md-form\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"formLoginEmail\" id=\"formLoginEmail\" placeholder=\"*Username ( Email )\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\r\n                                            <p *ngIf=\"!username.valid && (username.dirty || username.touched)\" class=\"w-100 alert alert-danger\">Username required</p>\r\n                                        </div>\r\n                                        <div class=\"md-form\">\r\n                                            <input type=\"password\" class=\"form-control\" name=\"formLoginPassword\" id=\"formLoginPassword\" placeholder=\"*Password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n                                            <p *ngIf=\"!password.valid && (password.dirty || password.touched)\" class=\"w-100 alert alert-danger\">Password required</p>\r\n                                        </div>\r\n                                        <div class=\"d-flex\"><button  type=\"submit\" class=\"btn btn-primary ml-auto\">Sign in !</button></div>\r\n                                        <img *ngIf=\"loginloading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                                    </form>\r\n                                </div>\r\n                                <hr />\r\n                                <div class=\"row\">\r\n                                    <div class=\"container\">\r\n                                        <div class=\"row\">\r\n                                            <h5>Login with</h5>\r\n                                        </div>\r\n                                        <div *ngIf=\"signUpResponseMsg\">{{loginResponseMsg}}</div>\r\n                                        <div class=\"row\">\r\n                                            <button type=\"button\" class=\"btn btn-fb waves-effect waves-light\">\r\n                                                <i class=\"fa fa-facebook\"></i>\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-tw waves-effect waves-light\">\r\n                                                <i class=\"fa fa-twitter\"></i>\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-gplus waves-effect waves-light\">\r\n                                                <i class=\"fa fa-google-plus\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <form #sf=\"ngForm\" (ngSubmit)=\"sf.form.valid && onSignUp(sf)\" name=\"frmSignUp\" novalidate>\r\n                                    <legend>Sign up now</legend>\r\n                                    <p *ngIf=\"activity == 'register' && error == true\" class=\"alert alert-danger\">{{responseMsg}}</p>\r\n                                    <p *ngIf=\"activity == 'register' && error == false\" class=\"alert alert-sucess\">{{responseMsg}}</p>\r\n                                    <div class=\"md-form\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"formSignUpName\" name=\"formSignUpName\" placeholder=\"*Name\" [(ngModel)]=\"user.name\" #sName=\"ngModel\" minlength=\"4\" maxlength=\"20\" required>\r\n                                        <p *ngIf=\"sName.invalid && (sName.dirty || sName.touched)\" class=\"w-100 alert alert-danger\">\r\n                                            <span *ngIf=\"sName.errors.required\">Name is required</span>\r\n                                            <span *ngIf=\"sName.errors.minlength\">Name is too short</span>\r\n                                            <span *ngIf=\"sName.errors.maxlength\">Name is too long</span>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"md-form\">\r\n                                        <input type=\"email\" class=\"form-control\" id=\"formSignUpEmail\" name=\"formSignUpEmail\" placeholder=\"*Email\" [(ngModel)]=\"user.email\" #sEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\r\n                                        <p *ngIf=\"sEmail.invalid && (sEmail.dirty || sEmail.touched)\" class=\"w-100 alert alert-danger\">\r\n                                            <span *ngIf=\"sEmail.errors.required || sEmail.errors.pristine\">Email is required</span>\r\n                                            <span *ngIf=\"sEmail.errors.pattern\">Email is not in correct format</span>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"md-form\" [ngClass]=\"{ 'has-error': sf.submitted && !sPassword.valid }\">\r\n                                        <input type=\"password\" class=\"form-control\" id=\"formSignUpPassword\" name=\"formSignUpPassword\" placeholder=\"*Password\" [(ngModel)]=\"user.password\" #sPassword=\"ngModel\" minlength=\"8\" required>\r\n                                        <p *ngIf=\"sPassword.invalid && (sPassword.dirty || sPassword.touched)\" class=\"w-100 alert alert-danger\">\r\n                                            <span *ngIf=\"sPassword.errors.required\">Password is required</span>\r\n                                            <span *ngIf=\"sPassword.errors.minlength\">Password should be more than 8 character</span>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"d-flex\"><button type=\"submit\" class=\"btn btn-success ml-auto\">Sign me up!</button></div>\r\n                                    <img *ngIf=\"signupLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"MenuPadding\">\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <hr class=\"featurette-divider\">\r\n    <footer class=\"container\">\r\n        <p>© 2017 Full Stack Company, Inc..</p>\r\n    </footer>\r\n    <div id=\"snackbar\"></div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CourseCatalog_Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript__ = __webpack_require__("../../../../../src/assets/js/AdditionalScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_AdditionalScript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HttpClient, HttpHeaders } from '@angular/common/http';


var AppComponent = (function () {
    function AppComponent(_CourseCatalogService, _AuthenticationService, router) {
        this._CourseCatalogService = _CourseCatalogService;
        this._AuthenticationService = _AuthenticationService;
        this.router = router;
        this.model = {};
        this.user = {};
        this.loginloading = false;
        this.signupLoading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.DepartmentsLink = "department";
        this.CoursesLinks = "courses";
        this.HomeLink = "";
        this.isHomeURL = location.pathname == '/' ? true : false;
        this.isDepartmentURL = location.pathname == '/departments' ? true : false;
        this.isCourseURL = location.pathname == '/courses' ? true : false;
        this.getUserDetail();
    };
    AppComponent.prototype.isUserLoggedIn = function () {
        if (this.userDetail)
            return true;
        else
            return false;
    };
    AppComponent.prototype.getUserDetail = function () {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        this.UserLoggedIn = this.isUserLoggedIn();
        this.isAdmin = this.isAdminOrNot();
    };
    AppComponent.prototype.onLogin = function (f) {
        var _this = this;
        this.loginloading = true;
        this.activity = "login";
        this._AuthenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.error = false;
            _this._AuthenticationService.setLoggedUserDetail('', '', data);
            _this.getUserDetail();
            _this.loginloading = false;
            ClientScripts.dismissModalJs('LoginModal');
            f.reset();
            ClientScripts.snackbar("You are logged in sucessfully");
        }, function (error) {
            _this.loginloading = false;
            _this.error = true;
            _this.responseMsg = error._body;
        });
    };
    AppComponent.prototype.onSignUp = function (sf) {
        var _this = this;
        this.signupLoading = true;
        this.activity = "register";
        this._AuthenticationService.register(JSON.stringify(this.user))
            .subscribe(function (data) {
            _this.error = false;
            _this.signupLoading = false;
            _this.responseMsg = "User registered sucessfully";
            ClientScripts.dismissModalJs('LoginModal');
            sf.reset();
        }, function (error) {
            _this.error = true;
            _this.signupLoading = false;
            _this.responseMsg = error._body;
        });
    };
    AppComponent.prototype.onSignOut = function () {
        ClientScripts.snackbar("Logging Out");
        this.userDetail = null;
        this.UserLoggedIn = false;
        this.isAdmin = false;
        this._AuthenticationService.logout();
        this.router.navigate(['/']);
        // location.reload();
    };
    AppComponent.prototype.isAdminOrNot = function () {
        if (this._AuthenticationService.getLoggedUserDetail('admin') == "true")
            return true;
        else
            return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Controller_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Controller_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__CourseCatalog_Controller_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__CourseCatalog_Controller_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseCatalog_Home_home_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CourseCatalog_Department_departments_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CourseCatalog_user_user_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CourseCatalog_Controller_authValidator_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authValidator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CourseCatalog_Controller_authentication_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CourseCatalog_Home_filters_pipe__ = __webpack_require__("../../../../../src/app/CourseCatalog/Home/filters.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CourseCatalog_Controller_course_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CourseCatalog_Department_coursedetail_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/coursedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CourseCatalog_Department_departmentDetail_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/departmentDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CourseCatalog_User_userFilter_pipe__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/userFilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CourseCatalog_Department_courses_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CourseCatalog_User_dashboard_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CourseCatalog_User_profile_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__CourseCatalog_User_history_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CourseCatalog_User_AdminMgmt_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/AdminMgmt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__CourseCatalog_Home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__CourseCatalog_Department_departments_component__["a" /* DepartmentsComponent */], __WEBPACK_IMPORTED_MODULE_17__CourseCatalog_Department_courses_component__["a" /* CoursesComponent */], __WEBPACK_IMPORTED_MODULE_14__CourseCatalog_Department_coursedetail_component__["a" /* CourseDetailComponent */], __WEBPACK_IMPORTED_MODULE_15__CourseCatalog_Department_departmentDetail_component__["a" /* DepartmentDetailComponent */], __WEBPACK_IMPORTED_MODULE_8__CourseCatalog_user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_11__CourseCatalog_Home_filters_pipe__["a" /* CourseFilterPipe */], __WEBPACK_IMPORTED_MODULE_11__CourseCatalog_Home_filters_pipe__["b" /* DepartmentFilterPipe */], __WEBPACK_IMPORTED_MODULE_16__CourseCatalog_User_userFilter_pipe__["a" /* UserFilterPipe */], __WEBPACK_IMPORTED_MODULE_18__CourseCatalog_User_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_19__CourseCatalog_User_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_20__CourseCatalog_User_history_component__["a" /* HistoryComponent */], __WEBPACK_IMPORTED_MODULE_21__CourseCatalog_User_AdminMgmt_component__["a" /* AdminMgmtComponent */], __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__["FileSelectDirective"]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__CourseCatalog_Controller_course_service__["a" /* CourseService */], __WEBPACK_IMPORTED_MODULE_9__CourseCatalog_Controller_authValidator_service__["a" /* AuthValidator */], __WEBPACK_IMPORTED_MODULE_10__CourseCatalog_Controller_authentication_service__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Home_home_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CourseCatalog_Department_departments_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CourseCatalog_user_user_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CourseCatalog_Controller_authValidator_service__ = __webpack_require__("../../../../../src/app/CourseCatalog/Controller/authValidator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CourseCatalog_Department_coursedetail_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/coursedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseCatalog_Department_departmentDetail_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/departmentDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CourseCatalog_Department_courses_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/Department/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CourseCatalog_User_dashboard_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CourseCatalog_User_profile_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CourseCatalog_User_history_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CourseCatalog_User_AdminMgmt_component__ = __webpack_require__("../../../../../src/app/CourseCatalog/User/AdminMgmt.component.ts");












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Home_home_component__["a" /* HomeComponent */] },
    { path: 'departments', component: __WEBPACK_IMPORTED_MODULE_2__CourseCatalog_Department_departments_component__["a" /* DepartmentsComponent */] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_7__CourseCatalog_Department_courses_component__["a" /* CoursesComponent */] },
    { path: 'departments/:deptId', component: __WEBPACK_IMPORTED_MODULE_6__CourseCatalog_Department_departmentDetail_component__["a" /* DepartmentDetailComponent */] },
    { path: 'departments/:deptId/:courseId', component: __WEBPACK_IMPORTED_MODULE_5__CourseCatalog_Department_coursedetail_component__["a" /* CourseDetailComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__CourseCatalog_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__CourseCatalog_Controller_authValidator_service__["a" /* AuthValidator */]],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__CourseCatalog_User_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'adminMgmt', component: __WEBPACK_IMPORTED_MODULE_11__CourseCatalog_User_AdminMgmt_component__["a" /* AdminMgmtComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_10__CourseCatalog_User_history_component__["a" /* HistoryComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__CourseCatalog_User_profile_component__["a" /* ProfileComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__CourseCatalog_Home_home_component__["a" /* HomeComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/assets/images/bannerBackground.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bannerBackground.fa828c4ac49224602d06.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/slider_img3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slider_img3.31636d53d69a6150e3bc.jpg";

/***/ }),

/***/ "../../../../../src/assets/js/AdditionalScript.js":
/***/ (function(module, exports) {

// $(window).scroll(function() {
//     var height = $('.navbar').outerHeight(true);
//     console.log(height);
//     $('#MenuPadding').height(height + 10);
//   });

$(document).ready(function(){

    var height = $('.navbar').outerHeight(true);

    $('#MenuPadding').height((height - 10) + 'px');

    if($('#UsrNavbar'))
        $('#UsrNavbar').css('top', (height-10) + 'px');
    
});

$(window).scroll(function(){
    
    var height = $('.navbar').outerHeight(true);

    if($('#UsrNavbar'))
        $('#UsrNavbar').css('top', (height-10) + 'px');
})

function enableEditFunction(event) {
    if($("#detailFieldset").attr("disabled")) {
        $("#detailFieldset").removeAttr("disabled");
        $("#enableEdit").html("Save");
    } else {
        $("#detailFieldset").attr("disabled","");
        $("#enableEdit").html("Edit");
    }
}

// $("#btn-sidebar").on("click", function(){
//     console.log($(this));
//     if($(this).hasClass("active"))
//         $(this).removeClass("active");
//     else
//         $(this).addClass("active");
// })

function activateTab(event) {
    $("#usrChildMenuNav a.active").removeClass("active");
    $(this).addClass("active");
}

var ClientScripts = ( function(alertUser, modalName, snackbarMsg, frmName) {
    return {
        dismissModalJs: function(modalName) {
            $('#' + modalName).modal('hide');
        },
        alertUser: function(alertMsg) {
            window.alert(alertMsg);
        },
        snackbar: function(snackbarMsg) {
                var snackbarDiv = document.getElementById("snackbar")
                snackbarDiv.innerHTML = snackbarMsg;
                snackbarDiv.className = "show";
                setTimeout(function(){ snackbarDiv.className = snackbarDiv.className.replace("show", ""); }, 3000);
        },
        toggleFieldset: function(frmName) {
            var fieldset = document.getElementById(frmName);
            fieldset.disabled? fieldset.disabled = false : fieldset.disabled = true;
        },
        isDisabled: function(frmName) {
            var fieldset = document.getElementById(frmName);
            return fieldset.disabled;
        }
    }
})(ClientScripts||{})

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map