define(["text!../views/aboutUs.html","$css!../css/aboutUs.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	return {
		render:render
	}
})