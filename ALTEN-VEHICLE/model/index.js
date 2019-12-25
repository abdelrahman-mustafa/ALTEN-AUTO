const mongoose = require('mongoose');
var config = require('./../config');


module.exports.connect = function(){
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongodb.uri,config.mongodb.option, (err) => {
      if(err){
          console.log(`Could not connect to database ${config.mongodb.db} :` , err);
        }else{
          //console.log(config.secret);
        console.log('Connected to database : '+ config.mongodb.db);
      }
    });
}

