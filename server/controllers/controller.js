var Hearthstone = require('hearthstone-mashape')('4Bp0SsxOgymsh2Hwb99BDFLsDRpBp1jtupwjsnEyzcb9qK9RZQ', 'enUS');

var mongoose = require('mongoose');
var Values = mongoose.model("values");
// if locale is empty, the value by default is 'enUS' 
// var basic = {
//     set: "Basic", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var classic = {
// 	set: "Classic",
// 	collectible: 1,
// 	locale: "enUS"
// };
// var Naxxramas = {
//     set: "Naxxramas", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var GVG = {
//     set: "Goblins vs Gnomes", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var Reward = {
//     set: "Reward", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var Blackrock = {
//     set: "Blackrock Mountain", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var TGT= {
//     set: "The Grand Tournament", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };
// var explorer = {
//     set: "The League of Explorers", // Mandatory 
//     collectible: 1,
//     locale: "enUS"
// };

module.exports = (function() {
	return{

		get3: function(req,res){
			var rarity = Math.random();

				if (rarity < .58){
					rarity = 'Common';
				}
				else if (rarity >= .58 && rarity < .88){
					rarity = 'Rare';
				}
				else if (rarity >= .88 && rarity < .98){
					rarity = 'Epic';
				}
				else{
					rarity = 'Legendary';
				}
			var quality ={
				quality: rarity,
				collectible: 1,
				locale: "enUS"
			}
			
			
			Values.find({}, function(err,result){
				if(err){
					console.log("error");
				}
				else{
					// console.log("get here");
					// console.log(result);
					var a = result;

					if (rarity == "Common"){
							var array = [];
							var card1 = Math.floor(Math.random()*316);
							var card2 = Math.floor(Math.random()*316);
							var card3 = Math.floor(Math.random()*316);
							Hearthstone.quality(quality, function(err, data){
								for (x in a){
									if (data[card1].name == a[x].name){
										data[card1].value = a[x].value;
									}
									if (data[card2].name == a[x].name){
										data[card2].value= a[x].value;
									}

									if ( data[card3].name == a[x].name){
										data[card3].value = a[x].value;
									}
								}
								
								array.push(data[card1]);
								array.push(data[card2]);
								array.push(data[card3]);


								res.json(array);
							});
					}
					else if( rarity == "Rare"){
						var array =[];
						var card1 = Math.floor(Math.random()*183);
						var card2 = Math.floor(Math.random()*183);
						var card3 = Math.floor(Math.random()*183);
							Hearthstone.quality(quality, function(err, data){
								for (x in a){
									if ( data[card1].name == a[x].name){
										data[card1].value = a[x].value;
									}
									if (data[card2].name == a[x].name){
										data[card2].value= a[x].value;
									}
									if (data[card3].name == a[x].name){
										data[card3].value = a[x].value;
									}
								}
								
								array.push(data[card1]);
								array.push(data[card2]);
								array.push(data[card3]);
							
								res.json(array);
							});
					}
					else if( rarity == "Legnedary"){
						var array= [];
						var card1 = Math.floor(Math.random()*93);
						var card2 = Math.floor(Math.random()*93);
						var card3 = Math.floor(Math.random()*93);
							Hearthstone.quality(quality, function(err, data){
								for (x in a){
									if (data[card1].name == a[x].name){
										data[card1].value = a[x].value;
									}
									if (data[card2].name == a[x].name){
										data[card2].value= a[x].value;
									}
									if (data[card3].name == a[x].name){
										data[card3].value = a[x].value;
									}
								}
								
								array.push(data[card1]);
								array.push(data[card2]);
								array.push(data[card3]);
						
								res.json(array);
							});
					}
					else if(rarity == "Epic"){
						var array=[];
						var card1 = Math.floor(Math.random()*99);
						var card2 = Math.floor(Math.random()*99);
						var card3 = Math.floor(Math.random()*99);
						Hearthstone.quality(quality, function(err, data){
							for (x in a){
									if ( data[card1].name == a[x].name){
										data[card1].value = a[x].value;
									}
									if ( data[card2].name == a[x].name){
										data[card2].value = a[x].value;
									}
									if ( data[card3].name == a[x].name){
										data[card3].value = a[x].value;
									}
								}
								
							array.push(data[card1]);
							array.push(data[card2]);
							array.push(data[card3]);

							res.json(array);
						});
					}	
					
				}
			})
		}

	}
})();








//select a random set;
//var random = Math.random();
// if (random <= .1893){
// 		Hearthstone.set(basic, function(err, data) {
// 		console.log(data[0]);
// 	})
// }

// else if (random > .1893 || random <= .516){
// 	Hearthstone.set(classic, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .516 || random <= .556 ){
// 	Hearthstone.set(Naxxramas, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .556 || random <= .72 ){
// 	Hearthstone.set(GVG, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .72 || random <= .72268 ){
// 	Hearthstone.set(Reward, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .72268 || random <= .76398 ){
// 	Hearthstone.set(Blackrock, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .76398 || random <= .93998 ){
// 	Hearthstone.set(TGT, function(err, data) {
// 		console.log(data[0]);
// 	})
// }
// else if (random > .93998 || random <= 1 ){
// 	Hearthstone.set(explorer, function(err, data) {
// 		console.log(data[0]);
// 	})
// }



























