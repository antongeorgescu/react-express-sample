var express = require('express');
var router = express.Router();
var db = require("../database/dbconnect")

const myproducts = ['Jewlery','Paintings','Articles','News'];

router.get('/', function(req, res, next) {
    res.send({products : myproducts});
});

router.get('/paintings/all', function(req, res, next) {
    var sql = "select distinct p0.page_no,p1.* ";
    sql+= "from paintings as p0 join paintings as p1 on p0.page_no = p1.page_no";
    var params = []
    
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });
  
  router.get('/paintings/page/:pageid',function(req, res, next) {
    var sql = "select * from paintings where page_no = ?";
    var params = [req.params.pageid]
    
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });
  
  router.get('/paintings/item/:serialno',function(req, res, next) {
    var sql = "select * from paintings where serialno = ?";
    var params = [req.params.serialno]
    
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });
    
  module.exports = router;
  