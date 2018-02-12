var config = require('config.json');
var express = require('express');
var router = express.Router();
var CourseService = require('../services/courseCatalog.service');
var Q = require('q');
var multer = require('multer');
var DIR = './server/public/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, DIR)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +  file.originalname)
    }
})

  var upload = multer({storage: storage}).single('objImage');
// var upload = multer({dest: DIR}).single('objImage');

router.get('/user/get/:_Order/:_limit', getUsers);
router.post('/user/authenticate', authenticate);
router.post('/user/register', register);
router.post('/user/update', updateUser);
router.post('/user/update/admin', setAdmin);
router.get('/user/:_userId/registered/:_deptId', isRegistered);
router.get('/user/:_userId/registered/:_deptId/:_courseId', isRegistered);
router.get('/user/:_userId/completed/:_deptId', isCompleted);
router.get('/user/:_userId/completed/:_deptId/:_courseId', isCompleted);
router.get('/user/verifyCreation/:_email', verifyCreation);
router.post('/user/get', authenticate);
router.get('/user/:_id/courses', getUserCourses);
router.get('/user/:_id/:_deptId/courses', getUserCourses);
router.post('/Course/new', newCourse);
router.get('/Course/get', getCourses);
router.get('/Course/get/:_column/:_limit', getCourses);
router.get('/Course/get/:_id', getCourse);
router.post('/Course/update', updateCourse);
router.post('/Course/delete', deleteCourse);
router.get('/Course/top/', getTopCourses);
router.get('/Course/top/:_deptId', getTopCourses);
router.get('/Course/top/:_deptId/:_Order', getTopCourses);
router.get('/Course/Department/:_id', getCourseForDepartment);
router.get('/Course/Department/:_id/:_Order', getCourseForDepartment);
router.post('/Department/new', newDepartment);
router.get('/Department/get', getDepartments);
router.get('/Department/limit/:_limit', getDepartments);
router.get('/Department/get/:_id', getDepartment);
router.post('/Department/update', updateDepartment);
router.post('/Department/delete', deleteDepartment);
router.get('/Register/:_user/:_deptId/:_courseId', registerIn);
router.get('/Status/:_userId/:_deptId/:_courseId/:_status', setStatus);
router.get('/Status/:_userId/:_deptId/:_courseId', getStatus);
router.get('/Trend/:_type', getRegistrationTrend);
router.get('/CarouselItem/get', getCarouselItems);
router.post('/upload', uploadImage);

module.exports = router;

function uploadImage(req, res) {
    var path = '';
    upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).send("Could not upload");
        }  
       // No error occured.
        // path = req.file.path;
        // console.log(req.file);
        return res.send(req.file.filename); 
  })
}

function getUsers(req, res) {
    var deferred = Q.defer();
    if(req.params._limit == "0") {
        deferred.promise = CourseService.getUsers(req.params._Order);
    } else {
        deferred.promise = CourseService.getUsers(req.params._Order, req.params._limit);
    }
    
    deferred.promise.then(function (courses) {
        res.json(JSON.stringify(courses));
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function setStatus(req, res) {
    
    CourseService.setStatus(req.params._status, req.params._userId, req.params._deptId, req.params._courseId)
        .then(function (sucess) {
            if (sucess) {
                res.send(sucess);
            } else {
                res.send();
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

}

function getStatus(req, res) {
    
    CourseService.getStatus(req.params._userId, req.params._deptId, req.params._courseId)
        .then(function (status) {
            if (status) {
                res.send(status);
            } else {
                res.send();
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

}

function isRegistered(req, res) {
    
    CourseService.isRegistered(req.params._userId, req.params._deptId, req.params._courseId)
        .then(function (sucess) {
            if (sucess) {
                // authentication successful
                res.send(sucess);
            } else {
                // authentication failed
                res.send();
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function isCompleted(req, res) {
    var deferred = Q.defer();
    CourseService.isCompleted(req.params._userId, req.params._deptId, req.params._courseId)
        .then(function (sucess) {
            if (sucess) {
                // authentication successful
                res.send(sucess);
            } else {
                // authentication failed
                res.send();
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getRegistrationTrend(req, res) {
    CourseService.getRegistrationTrend(req.params._type, req.params._period)
    .then(function (data) {
        res.send(data);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function updateUser(req, res) {
    CourseService.updateUser(req.body)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function setAdmin(req, res) {
    console.log(req.body);
    CourseService.setAdmin(req.body.id, req.body.admin)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function authenticate(req, res) {
    CourseService.authenticate(req.body.username, req.body.password)
    .then(function (user) {
        if (user) {
            // authentication successful
            res.send(user);
        } else {
            // authentication failed
            res.status(400).send('Username or password is incorrect');
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function register(req, res) {
    CourseService.register(req.body)
    .then(function (blnSucess) {
            res.send(blnSucess);
        })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function verifyCreation(req, res) {
    CourseService.register(req.params._email)
    .then(function (blnSucess) {
            // User can be registered
            res.send(blnSucess);
        })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getCourses(req, res) {
    var deferred = Q.defer();
    
    CourseService.getCourses(req.params._limit, req.params._column)
        .then(function (courses) {
            res.json(courses);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getCourse(req, res) {
    CourseService.getCourse(req.params._id, req.params._Order, req.params._limit)
    .then(function (course) {
        res.send(course)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getTopCourses(req, res) {
    CourseService.getTopCourses(req.params._deptId, req.params._Order)
    .then(function (result) {
        res.send(result)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function updateCourse(req, res) {
    CourseService.updateCourse(req.body)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function deleteCourse(req, res) {
    CourseService.deleteCourse(req.body.id)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getCourseForDepartment(req, res) {
    var deferred = Q.defer();
    CourseService.getCourseForDepartment(req.params._id, req.params._Order)
        .then(function (courses) {
            res.send(courses);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getDepartments(req, res) {
    var deferred = Q.defer();
    if(req.params._limit) {
        deferred.promise = CourseService.getDepartments(req.params._limit);
    } else {
        deferred.promise = CourseService.getDepartments();
    }
    
    deferred.promise.then(function (departments) {
        res.send(departments)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getDepartment(req, res) {
    // res.send("Get Department with ID " + req.params._id);
    CourseService.getDepartment(req.params._id)
    .then(function (department) {
        res.send(department)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function updateDepartment(req, res) {
    CourseService.updateDepartment(req.body)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function deleteDepartment(req, res) {
    CourseService.deleteDepartment(req.body.id)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function registerIn(req, res) {
    CourseService.registerIn(req.params._user, req.params._deptId, req.params._courseId)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function newCourse(req, res) {
    CourseService.newCourse(req.body)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function newDepartment(req, res) {
    CourseService.newDepartment(req.body)
    .then(function (blnSucess) {
        res.send(blnSucess)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getUserCourses(req, res) {
    CourseService.getUserCourses(req.params._id, req.params._deptId)
    .then(function (courses) {
        res.send(courses)
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function getCarouselItems(req, res) {
    CourseService.getCarouselItems()
    .then(function (CarouselItems) {
        res.json(JSON.stringify(CarouselItems));
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}