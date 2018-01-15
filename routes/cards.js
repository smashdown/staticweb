var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:cardId', function(req, res, next) {
  //  + req.params.cardId
  // res.render('cards');
  res.writeHead(301,
    {Location: 'https://api.wowbox.telenor.io/api/cards/' + req.params.cardId + '/details'}
  );
  res.end();
});

module.exports = router;
