define(["text!../views/market.html","baidu","zepto","$css!../css/market.css"],function(html){
	function render(){
		$(".container").html(html);
		$.ajax({
			type:"get",
			url:"http://10.3.156.235:8020/beequick/modules/category.json",
			success:function(result){
				var data=result.data;
				var html=baidu.template("categoryData",data);
				$(".marketContent>ul").html(html);
				for(var i=0;i<$(".marketContent>ul li").length;i++){
					(function(i){
						Zepto($(".marketContent>ul li").get(i)).tap(function(){
							console.log(i);
							$(this).css("border-left","0.15625rem solid #ffd600");
							if($(this).text()=="热销榜"){
								$.ajax({
									type:"get",
									url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E7%83%AD%E9%94%80%E6%A6%9C",
									success:function(data){
										var data=JSON.parse(data);
										console.log(data);
										var Text=baidu.template("EveryProductList",data);
										$(".marketInner>ul").html(Text);
									}
								});
							}else if($(this).text()=="天天特价"){
								$.ajax({
									type:"get",
									url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E5%A4%A9%E5%A4%A9%E7%89%B9%E4%BB%B7",
									success:function(data){
										var data=JSON.parse(data);
										var Text=baidu.template("EveryProductList",data);
										$(".marketInner>ul").html(Text);
										console.log(data);
									}
								});
							}else if($(this).text()=="优选水果"){
								$.ajax({
									type:"get",
									url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E4%BC%98%E9%80%89%E6%B0%B4%E6%9E%9C",
									success:function(data){
										var data=JSON.parse(data);
										var Text=baidu.template("EveryProductList",data);
										$(".marketInner>ul").html(Text);
									}
								})
							}else if($(this).text()=="牛奶面包"){
								$.ajax({
									type:"get",
									url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E4%BC%98%E9%80%89%E6%B0%B4%E6%9E%9C",
									success:function(data){
										var data=JSON.parse(data);
										var Text=baidu.template("EveryProductList",data);
										$(".marketInner>ul").html(Text);
									}
								})
							}else{
								$.ajax({
									type:"get",
									url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E7%89%9B%E5%A5%B6%E9%9D%A2%E5%8C%85",
									success:function(data){
										var data=JSON.parse(data);
										var Text=baidu.template("EveryProductList",data);
										$(".marketInner>ul").html(Text);
									}
								})
							}
							for(var j=0;j<$(".marketContent>ul li").length;j++){
								if(j!=i){
									$($(".marketContent>ul li").get(j)).css("border-left","none");
								}
							}
						})
					}(i));
				}
			}
		});
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=%E7%83%AD%E9%94%80%E6%A6%9C",
			success:function(data){
				var data=JSON.parse(data);
				var Text=baidu.template("EveryProductList",data);
				$(".marketInner>ul").html(Text);
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
