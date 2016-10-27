define(["text!../views/market.html","baidu","zepto","$css!../css/market.css"],function(html){
	function render(){
		$(".container").html(html);
		for(var i=0;i<$(".marketContent>ul li").length;i++){
			(function(i){
				Zepto($(".marketContent>ul li").get(i)).tap(function(){
					$(this).css("border-left","0.15625rem solid #ffd600");
					$($(".marketInner>ul").get(i)).css("display","block");
					for(var j=0;j<$(".marketContent>ul li").length;j++){
						if(j!=i){
							$($(".marketContent>ul li").get(j)).css("border-left","none");
							$($(".marketInner>ul").get(j)).css("display","none");
						}
					}
				})
			}(i));
		}
		$.ajax({
			type:"get",
			url:"http://10.3.156.235:8020/beequick/modules/category.json",
			success:function(result){
				var data=result.data;
				var html=baidu.template("categoryData",data);
				var Text=baidu.template("EveryProductList",data);
				$(".marketContent>ul").html(html);
				$(".marketInnerPro").html(Text);
			}
		});
		var flag=false;
		for(var i=0;i<$(".category_pull").length;i++){
			(function(i){
				Zepto($(".category_pull").get(i)).tap(function(){
					if(!flag){
						flag=true;
						$(this).css("transform","rotate(180deg)");
						$(".marketInnet-tit-part").get(i).style.display="block";
						for(var j=0;j<$(".category_pull").length;j++){
							if(j!=i){
								$(".category_pull").get(j).style.transform="rotate(0deg)";
								$(".marketInnet-tit-part").get(j).style.display="none";
							}	
						}
					}else{
						flag=false;
						$(this).css("transform","rotate(0deg)");
						$(".marketInnet-tit-part").get(i).style.display="none";
					}
				})
			}(i))
		}
	}
	return {
		render:render
	}
})
