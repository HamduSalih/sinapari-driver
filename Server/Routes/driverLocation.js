var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs('mongodb://sinapari:sinapari@cluster0-shard-00-00-rzltc.mongodb.net:27017,cluster0-shard-00-01-rzltc.mongodb.net:27017,cluster0-shard-00-02-rzltc.mongodb.net:27017/sinacargo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', ['driversLocations']);


//upadate driver socket id

router.put("/driverLocationSocket/:id", function(req, res, next){

	var io = req.app.io;
	if(!req.body){
		res.status(400);
		res.json({
			"error":"Bad data"
		});

	}else{
		db.driversLocations.update({_id:mongojs.ObjectId(req.params.id)}, 
			{$set: {socketId:req.body.socketId}}, function(err, updateDetails){
				if(err){
					res.send(err);
				}else{
					res.send(updateDetails);
				}
		});
	}
});


//get nearby driver
//parsefloat below is used to pass values which are received as strings
router.get("/driverLocation", function(req, res, next){
	var ycord = req.query[1];
	var xcord = req.query[0];
	//ensure index concentrates only on the data we need
	db.driversLocations.createIndex({"coordinate":"2dsphere"});
	db.driversLocations.find({
			"coordinate":{
				"$near":{
					"$geometry":{
						"type":"Point",
						"coordinates": [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
					},
					"$maxDistance":20000
				}
			}
		}, function(err, location){
			if(err){
				res.send(err);

			}else{
				res.send(location);
			}
	});

});//we will create a redux session to use this api

//Get Single Driver and emit track by user to driver
router.get("/driverLocation/:id", function(req, res, next){
	var io = req.app.io;
    db.driversLocations.findOne({driverId: req.params.id},function(err, location){
        if (err){
            res.send(err);
        }
        res.send(location);
        io.emit("trackDriver", location);
    });
});

//Update Location by driver to user
router.put("/driverLocation/:id", function(req, res, next){
    var io = req.app.io;
    var location = req.body;
    var latitude = parseFloat(location.latitude);
    var longitude = parseFloat(location.longitude);
    if (!location){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.driversLocations.update({_id: mongojs.ObjectId(req.params.id)},{ $set: {
        	socketId:location.socketId,
        	coordinate:{
                "type": "Point",
        		coordinates:[
                    latitude,
        			longitude
    			]
    		}
    	}}, function(err, updateDetails){
        if (err){
            console.log(updateDetails);
            res.send(err);
        }
        if (updateDetails){

            //Get updated location
            db.driversLocations.findOne({_id:  mongojs.ObjectId(req.params.id)},function(error, updatedLocation){
                if (error){
                    res.send(error);
                }
                res.send(updatedLocation);
                io.emit("action", {
                    type:"UPDATE_DRIVER_LOCATION",
                    payload:updatedLocation
                });
            });
        }
    });
    }
});

module.exports = router;
