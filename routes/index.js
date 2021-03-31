var express = require('express');
var router = express.Router();
var student_controller =require('../controllers/student.controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId:'home'  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About Us',menuId:'about'  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact Us',menuId:'contact'  });
});

router.get('/students',student_controller.list)

module.exports = router;
