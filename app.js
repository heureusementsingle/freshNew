require.config({
	paths:{
		"jquery":"./lib/jquery",
		"zepto":"./lib/zepto",
		"text":"./lib/text",
		"$css":"./lib/css",
		"swiper":"./lib/swiper.min",
		"underscore":"./lib/underscore",
		"backbone":"./lib/backbone",
		"lazyLoad":"./lib/jquery.lazyload.min",
		"baidu": "./lib/baiduTemplate"
	}
})

require(['jquery',"backbone","./router"],function($,Backbone,Router){
	Backbone.history.start();
})
