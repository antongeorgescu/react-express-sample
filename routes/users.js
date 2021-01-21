var express = require('express');
var router = express.Router();
var cors = require('cors');
router.use(cors());

const myteam = ['Anton','Daniela','Virgil','Court','Alex','Emme'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({team : `My team is composed from ${myteam.join(',')}`});
});

/* GET an image */
router.get('/image/:pageNo', function(req, res, next) {
  var imgfile = '84605-Cape-Breton-Highlands-National-Park.jpg';
  var imgpath = `${req.protocol}://${req.get('host')}/images/${imgfile}`;
  res.send({image : `${imgpath}`});
});

module.exports = router;
