var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// connect to the database
// mongoose.connect('mongodb://admin:1234@ds123956.mlab.com:23956/hearthstone');
mongoose.connect('mongodb://admin:1234@hearthstone-shard-00-00.jivgi.mongodb.net:27017,hearthstone-shard-00-01.jivgi.mongodb.net:27017,hearthstone-shard-00-02.jivgi.mongodb.net:27017/hearthstone?ssl=true&replicaSet=atlas-pk45cw-shard-0&authSource=admin&retryWrites=true&w=majority');
// specify the path to all of the models
var models_path = __dirname + '/../models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
