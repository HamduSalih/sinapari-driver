var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://sinapari:sinapari@cluster0-shard-00-00-rzltc.mongodb.net:27017,cluster0-shard-00-01-rzltc.mongodb.net:27017,cluster0-shard-00-02-rzltc.mongodb.net:27017/sinacargo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', ['drivers']);


//Get Single Driver
router.get("/driver/:id", function(req, res, next){
    db.drivers.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, driver){
        if (err){
            res.send(err);
        }
        res.send(driver);
    });
});

module.exports = router;
