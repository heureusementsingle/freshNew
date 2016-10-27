define(["text!../views/shopCar.html","$css!../css/shopCar.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	return {
		render:render
	}
})