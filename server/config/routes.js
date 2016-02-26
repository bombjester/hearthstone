var doge = require("./../controllers/controller.js");

module.exports = function(app){
	app.get('/get3', function(req,res){
		
		doge.get3(req,res);
	})




}






