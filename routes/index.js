var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next)  {
  res.render('dashboard/index', {

  });
})

router.get('/course', function(req, res, next) {
  res.render('dashboard/courses');
})

router.get('/quiz', function(req, res, next) {
  res.render('dashboard/testquiz');
})

module.exports = router;
