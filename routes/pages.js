var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: "0000",
    version: 1,
    path: '20180225.html',
    date: '2017-12-31T13:37:36.094Z'
  },{
    id: "0001",
    version: 2,
    path: '20180226.html',
    date: '2018-01-01T13:37:36.094Z'
  }]);
});

module.exports = router;
