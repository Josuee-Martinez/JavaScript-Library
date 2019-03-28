var express = require('express')
var router = express.Router()      //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs'); 
var jwt = require('jsonwebtoken');

router.post('/create', (req, res) => {

  let hashedPass = bcrypt.hashSync(req.body.password, 10)
  User.create({
    username: req.body.username,
    password: hashedPass
  })
  .then(user => {
    let token = jwt.sign({id: user.id}, 'this_is_a_secret', {expiresIn: '1 day'})
    res.status(200).json({
      user: user,
      message: 'created',
      sessionToken: token
    })
  })
    .catch(err => res.status(500).json(err))
})

router.post('/login', (req, res) => {
  User.findOne({where: {
    username: req.body.username,
    
  }})
  .then(user => {
    bcrypt.compare(req.body.password, user.password)
     .then(validUser => {
       if(validUser) {
         token = jwt.sign({id:user.id}, 'this_is_a_secret', '1 day')
         res.status(200).json({
           user: user,
           message: 'succesfully loged in',
           sessionToken: token
         })
       } else {
         res.status(500).json({
           message: 'invalid'
         })
       }
     })
  })
  .catch(err => res.status(500).json(err))
})

module.exports = router;