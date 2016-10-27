define(["text!../views/GoodsDetails.html","zepto","$css!../css/GoodsDetails.css"],function(html){
	function render(){
		$(".container").html(html);
		$("footer").css("display","none");
		Zepto(".goods-goback").tap(function(){
			$("footer").css("display","flex");
		})
	}
	return {
		render:render
	}
})