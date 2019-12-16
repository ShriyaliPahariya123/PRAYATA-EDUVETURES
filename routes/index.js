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
  res.render('dashboard/course');
})



router.get('/test', function(req, res, next) {
  res.render('dashboard/test');
})

router.get('/quiz', function(req, res, next) {
  res.render('dashboard/quiz');
})


router.get('/end', function(req, res, next) {
  res.render('dashboard/endquiz');
})
router.get('/attempt', function(req, res, next) {
  res.render('dashboard/questionattempt');
})

router.get('/compare', function(req, res, next) {
  res.render('dashboard/comparepeers');
})

module.exports = router;
