require('rootpath')();
var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('config.json');
var MongoClient = require('mongodb').MongoClient
var db = require('./server/services/db')

db.connect('mongodb://localhost:27017/CourseCatalog', function(err) {
  if (err) {
    console.log('Unable to connect to MongoDB.')
    process.exit(1)
  }

  console.log("Connected successfully to server");

})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  //set headers to allow cross origin request.
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

// routes
app.use('/api', require('./server/controllers/courseCatalog.controller'));
app.use(express.static('./server/public'))
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

// start server
var port = 2222;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});