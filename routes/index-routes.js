var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    layout: 'auth',
    title: 'User !',
    welcome: 'Welcome to your !'
  })
})

module.exports = router
