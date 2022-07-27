var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/iecho', function(req, res, next) {
  const {text}=req.query
  if(/^([a-zA-Z]{2,254})$/.test(text)){
    const aux=text.split("").reverse().join("");
   return res.json ({
      "text": text.split("").reverse().join(""),
      "palindrome":aux===text
    })
  }
  return res.status(400).json({
    "error":"no text"
  })
});


module.exports = router;
