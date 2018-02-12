var MongoClient = require('mongodb').MongoClient
var dbName = 'CourseCatalog';
var assert = require('assert');

var state = {
  db: null,
}

exports.connect = function(url, done) {
  if (state.db) return done();

  MongoClient.connect(url, function(err, client) {
    if (err) return done(err)
    state.db = client.db(dbName);

    //createInsertUsers(state.db, function() {});

    // createDbCollections(state.db, function() {
        // client.close();
    // });

    // state.db.collection("courses").deleteMany({});
    // state.db.collection("departments").deleteMany({});
    // state.db.collection("users").deleteMany({});
    // state.db.collection("carouselItems").deleteMany({});

    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
        if (err) return done(err);
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

const createDbCollections = function(db, callback) {
    createInsertCourses(db);
    createInsertUsers(db);
    createInsertDepartments(db);
    // createInsertRegistration(db);
    createInsertCarouselItems(db);
};

const createInsertCourses = function(db) {
    // Get the documents collection
    const collection = db.collection('courses');
    // Insert some documents
    collection.insertMany([
        { id: "COUR00001", title: "Calculus", description: "A Course on Calculus", detail: "Description text", credits: "50", totalRegistration: 0, imageURL: "https://oneclassblog.com/wp-content/uploads/2017/12/bigstock-123382757.jpg", department: "DEPT00001", dateCreated:"2017-12-01" },
        { id: "COUR00002", title: "Elementary Physics", description: "A Course on Elementarty Physics",detail: "Description text", credits: "10", totalRegistration: 0, imageURL: "https://images-na.ssl-images-amazon.com/images/I/51leqJMvzZL._SX384_BO1,204,203,200_.jpg", department: "DEPT00001", dateCreated:"2017-12-01" },
        { id: "COUR00003", title: "HTML 101", description: "Basics of HTML", detail: "Description text", credits: "20", totalRegistration: 0, imageURL: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300", department: "DEPT00003", dateCreated:"2018-01-10" },
        { id: "COUR00004", title: "CSS", description: "Cascading Style Sheets", detail: "Description text", credits: "10", totalRegistration: 0, imageURL: "http://www.codekul.com/images/logo_css.png", department: "DEPT00004", dateCreated:"2018-01-11" },
        { id: "COUR00005", title: "Grey's Anatomy", description: "Gray's Anatomy is an English-language textbook of human anatomy", detail: "Description text", credits: "10", totalRegistration: 0, imageURL: "https://images-na.ssl-images-amazon.com/images/I/91%2Bi4%2BEzYWL._SL1500_.jpg", department: "DEPT00002", dateCreated:"2018-01-15" }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(5, result.result.n);
    });
};

const createInsertDepartments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('departments');
    // Insert some documents
    collection.insertMany([
        {  id: "DEPT00001",  title: "Mechanical",  description: "Courses for Student registered into Mechanical Engineering",  detail: "Mechanical Course Detail",  numberOfCourses: 2,  imageURL: "https://images-na.ssl-images-amazon.com/images/I/91%2Bi4%2BEzYWL._SL1500_.jpg", dateCreated:"2017-12-01" },
        {  id: "DEPT00002",  title: "Medical",  description: "Courses for Student registered into Medical Engineering",  detail: "Medical Course Detail",  numberOfCourses: 1,  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXMjx9UN46MoNgcapF78yoZHmAMLUaiu-fceOORxX8KskYPGa", dateCreated:"2017-12-01" },
        {  id: "DEPT00003",  title: "Information Technology",  description: "Courses for Student registered into Information Technology",  detail: "Information Technology Course Detail",  numberOfCourses: 1,  imageURL: "http://78.media.tumblr.com/6e1fc9f5cacd9c4d12f9be7c73eba036/tumblr_inline_n6ganv4LAy1ritnqy.png", dateCreated:"2017-12-21" },
        {  id: "DEPT00004",  title: "Computer Science",  description: "Courses for Student registered into Computer Science",  detail: "Computer Science Course Detail",  numberOfCourses: 1,  imageURL: "https://thumb1.shutterstock.com/display_pic_with_logo/2730316/501705679/stock-photo-line-web-concept-for-computer-science-banner-for-education-501705679.jpg", dateCreated:"2018-01-01" },
        {  id: "DEPT00005",  title: "Mechanical",  description: "Courses for Student registered into Mechanical Engineering",  detail: "Mechanical Engineering",  numberOfCourses: 1,  imageURL: "https://thumb1.shutterstock.com/display_pic_with_logo/2730316/501705679/stock-photo-line-web-concept-for-computer-science-banner-for-education-501705679.jpg", dateCreated:"2018-01-02" }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(5, result.result.n);
    });
};

const createInsertUsers = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents
    collection.insertMany([
        {  id: 1,  name: "USER01",  dob: "01-01-1990",  email: "USER01@gmail.com",  password: "123456789",  admin: true, dateRegistered:"2018-01-10" },
        {  id: 2,  name: "USER02",  dob: "01-01-1990",  email: "USER02@gmail.com",  password: "123456789",  admin: true, dateRegistered:"2018-01-10" },
        {  id: 3,  name: "USER03",  dob: "01-01-1990",  email: "USER03@gmail.com",  password: "123456789",  admin: false, dateRegistered:"2018-01-10" },
        {  id: 4,  name: "USER04",  dob: "01-01-1990",  email: "USER04@gmail.com",  password: "123456789",  admin: false, dateRegistered:"2018-01-10" },
        {  id: 5,  name: "USER05",  dob: "01-01-1990",  email: "USER05@gmail.com",  password: "123456789",  admin: false, dateRegistered:"2018-01-10" },
        {  id: 6,  name: "USER06",  dob: "01-01-1990",  email: "USER06@gmail.com",  password: "123456789",  admin: false, dateRegistered:"2018-01-10" }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(6, result.result.n);
    });
};

const createInsertCarouselItems = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('carouselItems');
    // Insert some documents
    collection.insertMany([
        { sequenceNo: 0, imageURL: 'assets/images/0520276001514000418.jpeg', title: 'Mechanical Engineering', description: 'Explore the world of magnificent machines', status: 'active' },
        { sequenceNo: 1, imageURL: 'assets/images/0533467001513538442.jpeg', title: 'Medical Engineering ', description: 'Explore the vast world of medical engineering via a plathora of courses', status: ''},
        { sequenceNo: 2, imageURL: 'assets/images/0751748001513912775.jpeg', title: 'Information Technology Engineering', description: 'Explore the fantastic world of IT', status: '' },
        { sequenceNo: 3, imageURL: 'assets/images/0936180001513843272.jpeg', title: 'Computer Science Engineering', description: 'Explore the secrets of computers', status: ''}
        ], function(err, result) {
            assert.equal(err, null);
            assert.equal(4, result.result.n);
        });
};

const createInsertRegistration = function(db, callback) {
    db.createCollection("registrations",
    function(err, results) {
        if(err) callback(err);
    }
  );
};