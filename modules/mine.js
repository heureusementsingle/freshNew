define(["text!../views/mine.html","$css!../css/mine.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	return {
		render:render
	}
})