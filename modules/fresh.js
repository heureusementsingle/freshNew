define(["text!../views/fresh.html","$css!../css/fresh.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	return {
		render:render
	}
})