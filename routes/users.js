var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/incompatible', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(403);
  res.send('oh no');
});

module.exports = router;
