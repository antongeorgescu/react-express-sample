var express = require('express');
var router = express.Router();
var cors = require('cors');
router.use(cors());

const myteam = ['Anton','Daniela','Virgil','Court','Alex','Emme'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({team : `My team is composed from ${myteam.join(',')}`});
});


module.exports = router;
