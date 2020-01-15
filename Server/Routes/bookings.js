var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://sinapari:sinapari@cluster0-shard-00-00-rzltc.mongodb.net:27017,cluster0-shard-00-01-rzltc.mongodb.net:27017,cluster0-shard-00-02-rzltc.mongodb.net:27017/sinacargo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', ['bookings']);

router.get('/bookings', function(req, res, next){
    db.bookings.find(function(err, bookings){
        if(err){
            res.send(err);
        }
        res.json(bookings);
    })
});

router.post('/bookings', function(req, res, next){
    var booking = req.body.data;
    var nearByDriver = req.body.nearByDriver;
    var io = req.app.io;

    if(!booking.userName){
        res.status(400);
        res.json({
            error:'Bad data'
        });
    } else {
        db.bookings.save(booking, function(err, savedBooking){
            if(err){
                res.send(err);
            }
            res.json(savedBooking);
            if(nearByDriver.socketId){
                io.emit(nearByDriver.socketId + 'driverRequest', savedBooking);
            }else{
                console.log('driver not connected');
            }
        })
    }
})
module.exports = router;