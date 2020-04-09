var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/welcome', function(req, res, next) {
  res.send('welcome to express');
});

module.exports = router;
