define(["text!../views/home.html","baidu","swiper","$css!../css/home.css","$css!../css/swiper.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	$.ajax({
		type:"get",
		url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
		success:function(data){
			$(".onLoading").css("display","none");
			var data=JSON.parse(data);
			for(var i=0;i<data.data["slide"].length;i++){
				$(".swiper-wrapper").append($("<div class='swiper-slide'><img src="+data.data["slide"][i].activity["img"]+"/></div>"));
			}
			for(var menu of data.data["menu"]){
				$("#HomeActive ul").append("<li><a href='#crazySeckill'><p class='HomeActiveImg'><img src='"+menu.activity["img"]+
				"'/></p><p class='ActiveName'>"+menu.activity["name"]+"</p></a></li>")
			}
			$(function(){
			    var mySwiper = new Swiper('.swiper-container',{
			         pagination: '.pagination',
			         autoplay:3000,
			        loop:true,
			       	grabCursor: true,
			       	autoplayDisableOnInteraction : false,
			    })
			});
		}
	});
	$.ajax({
		type:"get",
		url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
		success:function(result){
			var data=JSON.parse(result);
			var html=baidu.template("hot_tpl",data);
			$(".home-hot-sale ul").html(html);
		}
	})
	return {
		render:render
	}
})