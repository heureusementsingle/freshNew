define(["backbone"],function(Backbone){
	var Router = Backbone.Router.extend({
	  	routes: {
	    	"home":		  	"home",
	    	"market":     	"market",
	    	"shopCar":    	"shopCar",
	    	"mine":       	"mine",
	    	"GoodsDetails": "GoodsDetails",
	    	"aboutUs":		"aboutUs",
	    	"crazySeckill":	"crazySeckill",
	    	"fresh":		"fresh",
	    	"hairy":		"hairy",
	    	"member":		"member",
	    	"*action":		"defaultAction"
		},
	
		home: function() {
			require(["./modules/home"],function(home){
				home.render();
			});
		},
		market: function() {
			require(["./modules/market"],function(market){
				market.render();
			});
		},
		shopCar: function(){
		  	require(["./modules/shopCar"],function(shopCar){
				shopCar.render();
			});
		},
		aboutUs: function(){
		  	require(["./modules/aboutUs"],function(aboutUs){
				aboutUs.render();
			});
		},
		mine: function(){
		  	require(["./modules/mine"],function(mine){
				mine.render();
			});
		},
		GoodsDetails: function(){
		  	require(["./modules/GoodsDetails"],function(GoodsDetails){
				GoodsDetails.render();
			});
		},
		crazySeckill: function(){
		  	require(["./modules/crazySeckill"],function(crazySeckill){
				crazySeckill.render();
			});
		},
		fresh: function(){
		  	require(["./modules/fresh"],function(fresh){
				fresh.render();
			});
		},
		hairy: function(){
		  	require(["./modules/hairy"],function(hairy){
				hairy.render();
			});
		},
		member: function(){
		  	require(["./modules/member"],function(member){
				member.render();
			});
		}
//		defaultAction: function(){
//			location.hash="home";
//		}
	});
	var router=new Router();
})