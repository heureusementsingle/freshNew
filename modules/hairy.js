define(["text!../views/hairy.html","zepto","$css!../css/hairy.css"],function(html){
	function render(){
		$(".container").html(html);
		$("footer").css("display","none");
		Zepto(".hairyBack").tap(function(){
			$("footer").css("display","flex");
		})
	}
	return {
		render:render
	}
})