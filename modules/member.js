define(["text!../views/member.html","zepto","$css!../css/member.css"],function(html){
	function render(){
		$(".container").html(html);
		$("footer").css("display","none");
		Zepto(".member-goback").tap(function(){
			$("footer").css("display","flex");
		})
	}
	return {
		render:render
	}
})