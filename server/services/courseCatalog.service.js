var ObjectId = require('mongodb').ObjectID;
var config = require('config.json');
var Q = require('q');
var generateSafeId = require('generate-safe-id');
var db = require('./db');
var assert = require('assert');


var service = {};

service.authenticate = authenticate;
service.register = register;
service.updateUser = updateUser;
service.verifyCreation = verifyCreation;
service.newCourse = newCourse;
service.getCourses =  getCourses;
service.getCourse = getCourse;
service.updateCourse = updateCourse;
service.deleteCourse = deleteCourse;
service.newDepartment = newDepartment;
service.getDepartments = getDepartments;
service.getDepartment = getDepartment;
service.updateDepartment = updateDepartment;
service.deleteDepartment = deleteDepartment;
service.registerIn = registerIn;
service.setStatus = setStatus;
service.getStatus = getStatus;
service.completeIt = completeIt;
service.getCarouselItems = getCarouselItems;
service.getUsers = getUsers;
service.getTopCourses = getTopCourses;
service.getCourseForDepartment = getCourseForDepartment;
service.getUserCourses = getUserCourses;
service.isRegistered = isRegistered;
service.isCompleted = isCompleted;
service.getRegistrationTrend = getRegistrationTrend;
service.setAdmin = setAdmin;

module.exports = service;

function getRegistrationTrend(type) {
    var deferred = Q.defer();

    if(type == 'user') {
        
        db.get().collection('users').aggregate([
            {
                $group : {
                    _id: { year: { $substr : ["$dateRegistered", 0, 4] }, month: { $substr : ["$dateRegistered", 5, 2] }, day: { $substr : ["$dateRegistered", 8, 2] }},
                    count: { $sum:1 }
                }
            }],function(err, result) {
                return returnDataWithPromise(err, result, deferred);
            });

    } else {

        db.get().collection('registrations').aggregate([
            {
                $lookup: {
                    from: "courses",
                    localField: "courseId",
                    foreignField: "id",
                    as: "CourseDetail"
                }
            },
            {
                $project: {
                    course: "$CourseDetail.title",
                    courseId: 1,
                    departmentId: 1,
                    userId: 1,
                    dateRegistered: 1
                }
            },
            {
                $unwind : "$course"
            },
            {
                $group : {
                    _id: { year: { $substr : ["$dateRegistered", 0, 4] }, month: { $substr : ["$dateRegistered", 5, 2] }, day: { $substr : ["$dateRegistered", 8, 2] }},
                    count: { $sum:1 }
                }
            }],function(err, result) {
                return returnDataWithPromise(err, result, deferred);
            });

    }
    return deferred.promise;
}

function setStatus(status, userId, deptId, courseId) {
    var deferred = Q.defer();
    var filter;

    // console.log(status + ' ' + userId + ' ' + deptId + ' ' + courseId)

    if(courseId != 'none')
        filter = {'userId': userId, 'courseId': courseId, 'departmentId': deptId}
    else
        filter = {'userId': userId, 'departmentId': deptId}

    db.get().collection('registrations').find(filter).toArray (function (err, result) {
        
        if (err) deferred.reject(err.name + ': ' + err.message);

        if(result.length > 0) {
            
            if(courseId != "none") {
                if(status == "unregister") {
                    db.get().collection('registrations').deleteOne({ 'userId': userId, 'courseId': courseId, 'departmentId': deptId}, function (err, result) {
                
                        if (err) deferred.reject(err.name + ': ' + err.message);
                        if(result) {
                            deferred.resolve("true");
                        }
                        else {
                            deferred.resolve("false");
                        }
                    });
                } else if(status == "complete") {
                    db.get().collection('registrations').findOneAndUpdate({ 'userId': userId, 'courseId': courseId, 'departmentId': deptId}, {$set:{'completed': true}}, function (err, result) {
                
                        if (err) deferred.reject(err.name + ': ' + err.message);
                        if(result.length) {
                            deferred.resolve("true");
                        }
                        else {
                            deferred.resolve("false");
                        }
                    });
                }
            } else {

                if(status == "unregister") {
                    db.get().collection('registrations').deleteMany({ 'userId': userId, 'departmentId': deptId}, function (err, result) {
                
                        if (err) deferred.reject(err.name + ': ' + err.message);
                        if(result.length) {
                            deferred.resolve("true");
                        }
                        else {
                            deferred.resolve("false");
                        }
                    });
                } else if(status == "complete") {
                    db.get().collection('registrations').updateMany({ 'userId': userId, 'departmentId': deptId}, {$set:{'completed': true}}, function (err, result) {
                
                        if (err) deferred.reject(err.name + ': ' + err.message);
                        if(result.length) {
                            deferred.resolve("true");
                        }
                        else {
                            deferred.resolve("false");
                        }
                    });
                }
            }

        } else {
            deferred.reject("You are not registered to this course");
        }
    });

    return deferred.promise;
}

function getUsers(Order, limit) {
    var deferred = Q.defer();
    if(limit) {
        if(Order == "none") {
            db.get().collection('users').find({}).limit(parseInt(limit)).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
        else if(Order == "date" ) {
            db.get().collection('users').find({}).sort({'dateRegistered': 1}).limit(parseInt(limit)).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
    } else {
        if(Order == "date" ) {
            db.get().collection('users').find({}).sort({'dateRegistered': 1}).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
        else if(Order == "none") {
            db.get().collection('users').find({}).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
            
    }
    return deferred.promise;
}

function getUserCourses(_userId, _deptId) {

    var deferred = Q.defer();
    if(_deptId) {
        db.get().collection('registrations').aggregate([
            { $match: {'userId': _userId, 'departmentId': _deptId }},
            {
                $lookup: {
                    from: "courses",
                    localField: "courseId",
                    foreignField: "id",
                    as: "CourseDetail"
                }
            },
            {
                $unwind: '$CourseDetail'
            },
            {
                $project: {
                    courseId: 1,
                    dateRegistered: 1,
                    title: '$CourseDetail.title',
                    credit: '$CourseDetail.credits',
                    completed: 1
                }
            }
        ], function(err, result) {
            if(err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }

            if(result) {
                deferred.resolve(result);
            }
        });
        
    } else {
        db.get().collection('registrations').aggregate([
            { $match: {'userId': _userId }},
            {
                $lookup: {
                    from: "courses",
                    localField: "courseId",
                    foreignField: "id",
                    as: "CourseDetail"
                }
            },
            {
                $unwind: '$CourseDetail'
            },
            {
                $project: {
                    courseId: 1,
                    departmentId: 1,
                    dateRegistered: 1,
                    title: '$CourseDetail.title',
                    courseDescription: '$CourseDetail.desciption',
                    credit: '$CourseDetail.credits',
                    completed: 1
                }
            },
            {
                $lookup: {
                    from: 'departments',
                    localField: "departmentId",
                    foreignField: "id",
                    as: "DepartmentDetail"
                }
            },
            {
                $unwind: '$DepartmentDetail'
            },
            {
                $project: {
                    courseId: 1,
                    departmentId: 1,
                    dateRegistered: 1,
                    title: 1,
                    courseDescription: 1,
                    credit: 1,
                    departmentTitle: '$DepartmentDetail.title',
                    departmentDescription: '$DepartmentDetail.description',
                    completed: 1
                }
            }
        ], function(err, result) {
            if(err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }

            if(result) {
                deferred.resolve(result);
            }
        });
    }

    return deferred.promise;
}

function isRegistered(userId, deptId, courseId) {
    var deferred = Q.defer();
    var courses = new Array();
    if(courseId) {
        db.get().collection('registrations').find({ 'userId': userId, 'courseId': courseId, 'departmentId': deptId}).toArray (function (err, result) {
            
            if (err) deferred.reject(err.name + ': ' + err.message);
            if(result.length) {
                deferred.resolve("true");
            }
            else {
                deferred.resolve("false");
            }
        });

    } else {
        
        db.get().collection('courses').find({'department': deptId}).toArray (function (err, result) {

            if (err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }


            if(result.length == 0) {
                deferred.reject("No Course")
                return deferred.promise;
            }

            for(let i=0; i< result.length; i++) {
                courses.push(result[i]['id']);
            }

            db.get().collection('registrations').find({'courseId': {$in : courses}, 'userId': userId, 'departmentId': deptId} ).toArray( function(err, result) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                    return deferred.promise;
                }
    
    
                if(courses.length == result.length)
                    deferred.resolve('true');
                else
                    deferred.resolve('false');
            });

        });
    }
    return deferred.promise;
}

function getStatus(userId, deptId, courseId) {
    var deferred = Q.defer();
    var courses = new Array();
    var regCourses = new Array();
    // console.log("1" + userId + " " + deptId + " " + courseId);
    if(courseId != 'none') {
        db.get().collection('registrations').find({ 'userId': userId, 'courseId': courseId, 'departmentId': deptId}).toArray (function (err, result) {
            
            if (err) deferred.reject(err.name + ': ' + err.message);

            // console.log(result);
            // console.log(result.length);
            if(result.length != 0) {
                // console.log("True")
                if(result[0]['completed'] == true)
                    deferred.resolve("1");
                else
                    deferred.resolve("0");
            }
            else {
                deferred.resolve("-1");
            }
        });

    } else {
        
        db.get().collection('courses').find({'department': deptId}).toArray (function (err, result) {

            if (err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }

            // console.log(result);
            if(result.length == 0) {
                deferred.reject("No Course");
                return deferred.promise;
            }

            for(let i=0; i< result.length; i++) {
                courses.push(result[i]['id']);
            }

            db.get().collection('registrations').find({'courseId': {$in : courses}, 'userId': userId, 'departmentId': deptId} ).toArray( function(err, result) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                    return deferred.promise;
                }
                
                // console.log(result.length);

                if(result.length == 0) {
                    deferred.resolve("");
                    return deferred.promise;
                }

                if(result.length != courses.length) {
                    deferred.resolve("-1");
                    return deferred.promise;
                }

                for(let i=0; i< result.length; i++) {
                    regCourses.push(result[i]['id']);
                }

                db.get().collection('registrations').find({'courseId': {$in : courses}, 'userId': userId, 'departmentId': deptId, 'completed': true} ).toArray( function(err, result) {
                    if (err) {
                        deferred.reject(err.name + ': ' + err.message);
                        return deferred.promise;
                    }
                    // console.log(result.length);

                    if(result.length == regCourses.length)
                        deferred.resolve("1");
                    else if(result.length >= 0)
                        deferred.resolve("0");
                });
            });

        });
    }
    return deferred.promise;
}

function isCompleted(userId, deptId, courseId) {
    var deferred = Q.defer();
    var courses = new Array();
    if(courseId) {
        db.get().collection('registrations').find({ 'userId': userId, 'courseId': courseId, 'departmentId': deptId, 'completed': true}).toArray (function (err, result) {
            
            if (err) deferred.reject(err.name + ': ' + err.message);
            if(result.length) {
                deferred.resolve("true");
            }
            else {
                deferred.resolve("false");
            }
        });

    } else {
        
        db.get().collection('courses').find({'department': deptId}).toArray (function (err, result) {

            if (err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }


            if(result.length == 0) {
                deferred.reject("No Course")
                return deferred.promise;
            }

            for(let i=0; i< result.length; i++) {
                courses.push(result[i]['id']);
            }

            db.get().collection('registrations').find({'courseId': {$in : courses}, 'userId': userId, 'departmentId': deptId, 'completed': true} ).toArray( function(err, result) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                    return deferred.promise;
                }
    
    
                if(courses.length == result.length)
                    deferred.resolve('true');
                else
                    deferred.resolve('false');
            });

        });
    }
    return deferred.promise;
}

function authenticate(username, password) {
    var deferred = Q.defer();
    db.get().collection('users').findOne({'email':username, 'password':password}, function (err, result) {

        if (err) deferred.reject(err.name + ': ' + err.message);

        if(result) {
            assert.equal(null, err);
            deferred.resolve(result);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function register(user) {
    var deferred = Q.defer();
    db.get().collection('users')
        .insertOne({'id': 'USER' + generateSafeId(), 'name': user.name, 'email': user.email, 'password' : user.password, 'admin': false, 'dateRegistered': getTodayDate()},
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                assert.equal(null, err);
                deferred.resolve(result);
            } else {
                deferred.reject("User could not be registered");
            }
        }
    );
    return deferred.promise;
}

function updateUser(user) {
    var deferred = Q.defer();
    // console.log(user);
    db.get().collection('users')
        .findOneAndUpdate({"_id": ObjectId(user._id)},{ $set:{"name": user.name, "password" : user.password, "address": user.address, "mobile": user.mobile, 'gender': user.gender, 'imageURL': user.imageURL}},{returnOriginal: false},
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                deferred.resolve(result.value);
                // console.log(result.value);
            } else {
                deferred.reject("Information could not be updated, Please try again later");
            }
        });

    // db.get().collection("users").findOne({"_id": ObjectId(user._id)}, function (err, result) {

    //     if (err) deferred.reject(err.name + ': ' + err.message);

    //     if(result) {
    //         assert.equal(null, err);
    //         deferred.resolve(result);
    //         console.log(result);
    //     } else {
    //         console.log("no result");
    //         deferred.resolve();
    //     }
    // });

    return deferred.promise;
}

function verifyCreation(email) {
    var deferred = Q.defer();

    if(db.get().collection('users').findOne({'email': email}).count() > 0)
        deferred.reject("Email already Exists !! Please login With click fWithgot your passwWithd");
    else
        deferred.resolve();
    return deferred.promise;
}

function getCourses(limit, OrderBy) {

    var deferred = Q.defer();
    
    if(OrderBy && limit) {

        if(OrderBy == 'none')
            db.get().collection('courses').find({}).toArray(function (err, result) {
                return returnDataWithPromise(err, result, deferred);
            })
        else if(OrderBy == 'date') {

            if(limit != 0)
                db.get().collection('courses').find({}).sort({'dateCreated': 1}).limit(parseInt(limit)).toArray(function (err, result) {
                    return returnDataWithPromise(err, result, deferred);
                })
            else
                db.get().collection('courses').find({}).sort({'dateCreated': 1}).toArray(function (err, result) {
                    return returnDataWithPromise(err, result, deferred);
                })
        }

    } else {
        db.get().collection('courses').find({}).toArray(function (err, result) {
            return returnDataWithPromise(err, result, deferred);
        })
    }

    return deferred.promise;
}

function returnDataWithPromise(err, result, deferred) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    if(result) {
        assert.equal(null, err);
        deferred.resolve(result);
    } else {
        deferred.reject("Could not connect");
    }
    return deferred.promise;
}

function getCourse(_id) {
    var deferred = Q.defer();
    db.get().collection('courses').findOne({'id': _id}, function (err, result) {

        deferred.promise = returnDataWithPromise(err, result, deferred);
    });
    return deferred.promise;
}

function updateCourse(courseParams) {
    var deferred = Q.defer();
    // console.log(courseParams);
    db.get().collection('courses').updateOne(
        {'id': courseParams.id},
        {$set: {'title': courseParams.title, 'detail': courseParams.detail, 'description': courseParams.description, 'credits': courseParams.credits, 'imageURL': courseParams.imageURL, 'department': courseParams.department }},
        function(err, r) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            assert.equal(null, err);
            deferred.resolve(true);
        });
        return deferred.promise;

}

function updateDepartment(departmentParams) {
    var deferred = Q.defer();
    // console.log(departmentParams);
    db.get().collection('departments').updateOne(
        {'id': departmentParams.id},
        {$set: {'title': departmentParams.title, 'description': departmentParams.description, 'detail': departmentParams.detail,'imageURL': departmentParams.imageURL}},
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            assert.equal(null, err);
            deferred.resolve(result);
        });
        return deferred.promise;
}

function deleteCourse(_id) {
    var deferred = Q.defer();

    db.get().collection('registrations').find({'courseId': _id}).toArray(function (err, result) {

        if (err) {
            deferred.reject(err.name + ': ' + err.message);
            return deferred.promise;
        }

        if(result.length > 0) {
            deferred.reject("Cannot delete.. There are users registered for this course");
            return deferred.promise;
        }

        db.get().collection('courses').deleteOne({'id': _id}, {}, function (err, result) {

            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                deferred.resolve(result);
            }
        });
    });
    return deferred.promise;
}

function getDepartments(batchSize) {
    var deferred = Q.defer();
    if(batchSize) {
        db.get().collection('departments').find({}).limit(parseInt(batchSize)).toArray(function (err, result) {

            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                assert.equal(null, err);
                deferred.resolve(result);
            } else {
                deferred.reject("Department detail could not be retrieved !");
            }
        }) 
    } else {
        db.get().collection('departments').find({}).toArray(function (err, result) {

            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                assert.equal(null, err);
                deferred.resolve(result);
            } else {
                deferred.reject("Department detail could not be retrieved !");
            }
        })
    };
    return deferred.promise;
}

function getDepartment(_id) {
    var deferred = Q.defer();
    db.get().collection('departments').findOne({'id': _id}, function (err, result) {
        deferred.promise = returnDataWithPromise(err, result, deferred);
    });
    return deferred.promise;
}

function getCourseForDepartment(_id, _Order = "none") {
    var deferred = Q.defer();
        if(_Order == "none") {
            db.get().collection('courses').find({'department': _id}).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
        else if(_Order == "date" ) {
            db.get().collection('courses').find({'department': _id}).sort({'dateCreated': 1}).toArray(function (err, result) {
                deferred.promise = returnDataWithPromise(err, result, deferred);
            });
        }
        else if(_Order == "Registrations") {
            db.get().collection('courses').aggregate([
                {
                    $match: {'department': _id }
                },
                {
                    $lookup: {
                        from: "registrations",
                        localField: "id",
                        foreignField: "courseId",
                        as: "registration"
                    }
                },
                {
                    $project :{
                        id: 1,
                        title: 1,
                        description: 1,
                        imageURL: 1,
                        registrations: {
                            "$size": "$registration"
                        }
                    }
                },
                {
                    $sort: { registration: -1}
                }
            ],function(err, result) {
                returnDataWithPromise(err, result, deferred)
            });
        }
    
    return deferred.promise;
}

function deleteDepartment(_id) {
    var deferred = Q.defer();

    db.get().collection('courses').find({'department': _id}).toArray(function (err, result) {

        if (err) {
            deferred.reject(err.name + ': ' + err.message);
            return deferred.promise;
        }

        if(result.length > 0) {
            deferred.reject("Cannot delete.. There are courses under this department");
            return deferred.promise;
        }

        db.get().collection('departments').deleteOne({'id': _id}, {}, function (err, result) {

            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                assert.equal(null, err);
                deferred.resolve(result);
            }
        });

    });
    return deferred.promise;
}

function getCourseDepartment (_courseId) {
    var deferred = Q.defer();
    db.get().collection('courses').findOne({'id': _courseId}, function (err, result) {
        var deptID = result['department']
        return deptID;
    });
    return deferred.promise;
}

function registerIn(_userId, _deptId, _courseId) {

    var deferred = Q.defer();
    // console.log(_userId + " " + _deptId + " " + _courseId)
    if(_courseId != "none") {
        // console.log("Course");

        db.get().collection('departments').findOne({'id': _deptId}, function(err, result) {

            if(!result) {

                deferred.reject("No Such Department exist");
                return deferred.promise;

            } else {
                db.get().collection('courses').findOne({'id': _courseId, 'department': _deptId}, function(err, result){
                    
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if(result) {
                        db.get().collection('registrations').findOne({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId }, function(err, result) {
                            
                            if (err) deferred.reject(err.name + ': ' + err.message);

                            if(!result) {
                                db.get().collection('registrations').insertOne({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId, 'dateRegistered': getTodayDate(), 'completed': false}, function(err, result) {
                                    if (err) deferred.reject(err.name + ': ' + err.message);

                                    if(result) {
                                        deferred.resolve('1');
                                    } else {
                                        deferred.reject("There was some problem registering to course !! Please try again later");
                                    }
                                });
                            } else {
                                deferred.resolve("0");
                            }
                        });
                    } else {
                        deferred.reject("No such Course exists in this department");
                    }
                })
            }
        });
    } else {
        // console.log("Department");
        var response, courseArray, counter = 0, registrationCount = 0;
        
        db.get().collection('departments').findOne({'id': _deptId}, function(err, result) {

            if(!result) {

                deferred.reject("No Such Department exist");
                return deferred.promise;

            } else {

                db.get().collection('courses').find({'department': _deptId}).toArray( function(err, result) {

                    if (err) {
                        deferred.reject(err.name + ': ' + err.message);
                        return deferred.promise;
                    }
            
                    if(result.length == 0) {
                        deferred.reject("There are no courses to register !!");
                        return deferred.promise;
                    }

                    courseArray = result;

                    for (i = 0; i < courseArray.length; i++) {

                        checkAndRegister(_userId, _deptId, courseArray[i]['id'])
                            .then(function(response) {
                                counter ++;
                                // console.log("response: " + response);
                                if(response != 1) {
                                    // console.log("response" + response);
                                    deferred.reject(response);
                                    return deferred.promise;
                                } else {
                                    registrationCount = parseInt(registrationCount) + 1;
                                    // console.log("registrationCount" + registrationCount)
                                }

                                if(counter == courseArray.length){
                                    if(registrationCount == courseArray.length)
                                        deferred.resolve('1');
                                    else 
                                        deferred.reject('-1');
                                }

                            });

                    }

                });
            }
        });
    }
    return deferred.promise;
}

function completeIt(_userId, _deptId, _courseId) {

    var deferred = Q.defer();
    // console.log

    if(_courseId != "undefined") {
        db.get().collection('registrations').findOne({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId, 'completed': true }, function(err, result) {
            
            if (err) deferred.reject(err.name + ': ' + err.message);

            if(!result) {
                db.get().collection('registrations').findOneAndUpdate({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId},{$set:{'completed': true}}, function(err, result) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if(result) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject("There was some problem registering to course !! Please try again later");
                    }
                });
            } else {
                deferred.reject("You are already completed this course");
            }
        });
    } else {
        var response, courseArray, registrationCount = 0;
        
        db.get().collection('courses').find({'department': _deptId}).toArray( function(err, result) {

            if (err) {
                deferred.reject(err.name + ': ' + err.message);
                return deferred.promise;
            }
    
            if(result.length < 0) {
                deferred.reject("There are no courses to register !!");
                return deferred.promise;
            }

            courseArray = result;

            for (i = 0; i < courseArray.length; i++) {

                var courseId = courseArray[i]['id'];
                var courseTitle = courseArray[i]['title'];

                response = checkAndRegister(_userId, _deptId, courseId);
                            

                if(response != 1) {
                    deferred.reject(response);
                } else {
                    registrationCount = parseInt(registrationCount) + 1;
                }

                if(registrationCount == courseArray.length)
                    deferred.resolve('true');
            }

        });
    }
    return deferred.promise;
}

function checkAndRegister(_userId, _deptId, _courseId) {
    var deferred = Q.defer();
    db.get().collection('registrations').findOne({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId}, function(err, srchResult) {
        
        if (err) return err.name + ': ' + err.message;
        // console.log(srchResult)
        if(!srchResult) {
            db.get().collection('registrations').insertOne({ 'userId': _userId, 'courseId': _courseId, 'departmentId': _deptId, 'dateRegistered': getTodayDate(),'completed': false}, function(err, result) {

                if (err) return err.name + ': ' + err.message;

                if(result)
                    deferred.resolve("1");
                else
                    deferred.resolve("0");
            });
        } else {
            deferred.resolve("1");
        }
    });

    return deferred.promise;
}

function newCourse(course) {
    var deferred = Q.defer();
    db.get().collection('courses').findOne({'title': course.title, 'department': course.department}, function(err, result) {
        
        if(!result) {
            db.get().collection('courses').insertOne({'id': 'COUR' + generateSafeId(), 'title': course.title, 'detail': course.detail, 'description': course.description, 'credits': course.credits, 'totalRegistration': 0, 'imageURL': course.imageURL, 'department': course.department, dateCreated: getTodayDate()}, function(err, result) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                if(result) {
                    assert.equal(null, err);
                    deferred.resolve(result);
                } else {
                    deferred.reject("Unable to create course now !! Please try again later");
                }
            });
        } else {
            deferred.reject("There is already a course with same title");
        }
    });
    
    return deferred.promise;
}

function newDepartment(department) {
    var deferred = Q.defer();
    db.get().collection('departments').insertOne({'id': 'DEPT' + generateSafeId(), 'title': department.title, 'description': department.description, 'detail': department.detail, 'numberOfCourses': 0, 'imageURL': department.imageURL, 'dateCreated': getTodayDate()}, function(err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if(result) {
            assert.equal(null, err);
            deferred.resolve(result);
        } else {
            deferred.reject("Unable to create Department now !! Please try again later");
        }
    });
    return deferred.promise;
}

function getCarouselItems() {
    var deferred = Q.defer();
    db.get().collection('carouselItems').find({}).toArray(function (err, result) {

        if (err) deferred.reject(err.name + ': ' + err.message);

        if(result) {
            assert.equal(null, err);
            deferred.resolve(result);
        } else {
            deferred.reject("Could not connect");
        }
    })

    return deferred.promise;
}

function getTopCourses(_deptId, _Order) {
    var deferred = Q.defer();
    if(_Order == undefined) {
        if(!_deptId) {

            db.get().collection('registrations').aggregate([
                {
                    $lookup: {
                        from: "courses",
                        localField: "courseId",
                        foreignField: "id",
                        as: "CourseDetail"
                    }
                },
                {
                    $project: {
                        courseTitle: "$CourseDetail.title",
                        credit: "$CourseDetail.credits",
                        courseId: 1,
                        departmentId: 1,
                        dateRegistered: 1
                    }
                },
                {
                    $unwind : "$courseTitle"
                },
                {
                    $lookup: {
                        from: "departments",
                        localField: "departmentId",
                        foreignField: "id",
                        as: "DepartmentDetail"
                    }
                },
                {
                    $project: {
                        courseTitle: 1,
                        DepartmentTitle: "$DepartmentDetail.title",
                        courseId: 1,
                        departmentId: 1
                    }
                },
                {
                    $unwind : "$DepartmentTitle"
                },
                { 
                    $group : {
                        _id: {CourseId: "$courseId", DepartmentId: "$departmentId", departmentTitle: "$DepartmentTitle", CourseTitle: "$courseTitle"},
                        count: {$sum:1}
                    }
                },
                {
                    $project: {
                        title: "$_id.CourseTitle",
                        department: "$_id.departmentTitle",
                        count: 1,
                        _id: 0
                    }
                }],function(err, result) {
                    returnDataWithPromise(err, result, deferred)
            });

        } else {
            db.get().collection('registrations').aggregate([
                { $match: {'departmentId': _deptId }},
                {
                    $lookup: {
                        from: "courses",
                        localField: "courseId",
                        foreignField: "id",
                        as: "CourseDetail"
                    }
                },
                {
                    $project: {
                        courseTitle: "$CourseDetail.title",
                        courseId: 1,
                        departmentId: 1,
                        dateRegistered: 1
                    }
                },
                {
                    $unwind : "$courseTitle"
                },
                {
                    $lookup: {
                        from: "departments",
                        localField: "departmentId",
                        foreignField: "id",
                        as: "DepartmentDetail"
                    }
                },
                {
                    $project: {
                        courseTitle: 1,
                        DepartmentTitle: "$DepartmentDetail.title",
                        courseId: 1,
                        departmentId: 1
                    }
                },
                {
                    $unwind : "$DepartmentTitle"
                },
                { 
                    $group : {
                        _id: {CourseId: "$courseId", DepartmentId: "$departmentId", departmentTitle: "$DepartmentTitle", CourseTitle: "$courseTitle"},
                        count: {$sum:1}
                    }
                },
                {
                    $project: {
                        title: "$_id.CourseTitle",
                        department: "$_id.departmentTitle",
                        count: 1,
                        _id: 0
                    }
                }],function(err, result) {
                    returnDataWithPromise(err, result, deferred)
            });

        }
    } else {

    }
    return deferred.promise;
}

function getTodayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    }

    return yyyy + '-' + mm + '-' + dd;
}

function setAdmin(_userId, Admin) {
    var deferred = Q.defer();
    // console.log("Executed");
    // console.log(_userId + ' ' + Admin);
    db.get().collection('users')
        .findOneAndUpdate({"id": _userId},{ $set:{'admin': Admin}},{returnOriginal: false},
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if(result) {
                deferred.resolve(result.value);
            } else {
                deferred.reject("Information could not be updated, Please try again later");
            }
        });

    return deferred.promise;
}