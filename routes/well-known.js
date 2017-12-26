var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:cardId', function(req, res, next) {
  res.render('card_' + req.params.cardId);
});



module.exports = router;
