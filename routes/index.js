var express = require('express');
var router = express.Router();
var fs = require('fs');
var i=1;
var j=1;
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('public/lyt.txt', 'utf-8', function (err, data) {
    res.render('index', { abc: data+i+"次" });
    i++
  })
});
router.get('/aaa', function(req, res, next) {
  fs.writeFile('lyt2.txt','已访问：', function (err) {
  });
  fs.readFile('lyt2.txt', 'utf-8', function (err, data) {
    res.render('aaa', { bcd: data+j+"次" });
    j++
  })
});

module.exports = router;
