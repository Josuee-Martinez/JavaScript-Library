var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1

/****************************************
 * Controller Method #1: Simple Response
****************************************/
router.post('/one', function(req, res){
  res.send("Got a post request.") 
});

/****************************************
 * Controller Method #2: Persisting Data
****************************************/
router.post('/two', function (req, res) {
  let testData = "Test data for endpoint two"; //2

  TestModel //3
    .create({ //4
        //6
      testdata: testData //5
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

router.post('/three', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
  res.send('Test three went throught!')
  console.log('Test three went through!')
})


//STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then( //1
      function message() { //2
       res.send("Test 4 went through!");
      }
    );
});

/*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(              //1
      function message(data) {
        res.send(data);  //2
      }
    );
});

router.post('/six', function(req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({
          testdata: testdata
        })
      }
    )
})

/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) { //1
        res.send(500, err.message);
      }
    );
});

/************************
* GET:  Get simple message from server
***********************/
router.get('/helloclient', function (req, res) {
res.send('This is a message from the server to the client.')
})

/************************
 * GET:  /one
 ***********************/
router.get('/one', function(req, res) {

  TestModel
    .findAll({ //1
        attributes: ['id', 'testdata']
    })
    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;

// var express = require('express'); //1
// var router = express.Router();  //2

// router.post('/one', function(req, res) {
//   res.send('Test 1 went through!')
// })

// //3    //4   //5          //6
// // router.get('/', function (req, res) {
// //     //7
// //   res.send('Hey!!! This is a test route!');
// // });

// // router.get('/about', function(req, res) {
// //   res.send('hey!!! ')
// // })

// // router.get('/contact', function(req, res) {
// //   res.send({user: 'kenn', email: 'kenn@beastmode.cpm'});
// // });

// // router.get('/projects', function(req, res) {
// //   res.send(['project 1', 'project 2']);
// // });

// // router.get('/mycontacts', function(req, res) {
// //   res.send([
// //     {user: 'quincy', email: 'kenn@beastmode.com'},
// //     {user: 'aaron', email: 'aaron@beastmode.com'},
// //     {user: 'quincy', email: 'kenn@beastmode.com'},
// //     {user: 'tom', email: 'tom@beastmode.com'},
  
// //   ])
// // })

// //8
// module.exports = router;