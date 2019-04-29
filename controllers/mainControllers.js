let mongoose = require('mongoose');
let Restaurant = mongoose.model('restaurants');

let home = function(req, res){
    Restaurant.find(function(err, restaurants){
        if(!err){
            res.render('index', {
                restaurants: restaurants
            });
        }else{
            res.sendStatus(404);
        }
    }).limit(5);
};

let maps = function(req, res){
    res.render('maps');
};

let ratings = function(req, res){
    res.send('This is the Health Ratings Page');
};

let reviews = function(req, res){
    res.send('This is the reviews Page');
};

let findAllRestaurants = function(req,res){
    Restaurant.find(function(err, restaurants){
        if(!err){
            res.render('restaurants', {
                restaurants: restaurants
            });
        }else{
            res.sendStatus(404);
        }
    });
};

let findRestaurantByID = function(req,res){
    Restaurant.findById(req.params.id,function(err,restaurant){
        if(!err){
            res.render('detail', {
                r: restaurant
            });
        }else{
            res.sendStatus(404);
        }
    });
};

let findRestaurantByName = function(req, res){
    let restName = req.params.name;
    Restaurant.find({name:restName},function(err,restaurant){
        if(!err){
            res.write(`Restaurant name: ${restName}\n`);
            res.write(restaurant.toString());
            res.send();
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.home = home;
module.exports.maps = maps;
module.exports.ratings = ratings;
module.exports.reviews = reviews;
module.exports.findAllRestaurants = findAllRestaurants;
module.exports.findRestaurantByID = findRestaurantByID;
module.exports.findRestaurantByName = findRestaurantByName;