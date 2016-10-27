define(["text!../views/crazySeckill.html","$css!../css/crazySeckill.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	$.ajax({
		type:"get",
		url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
		success:function(data){
			setInterval(function(){
				for(var i=0;i< $(".status").length;i++){
					var time=parseInt($($(".startTime").get(i)).text());
					var date=new Date();
					if(time==date.getHours()){
						var hour=date.setTime(time);
						switch(date.getHours()){
							case date.getHours():
							case date.getHours()+1:
							case date.getHours()+2:$($(".status").get(i)).text("正在抢购");
							$($(".crazyActice li").get(i)).css({"background-color":"#fdd000","color":"#333"});
							var currentDate=new Date();
							var durationHour=currentDate.getHours()-hour;
							var durationMinute=currentDate.getMinutes();
							var durationSecond=currentDate.getSeconds();
							var durationTime=durationHour*3600*1000+durationMinute*60*1000+durationSecond*1000;
							if(durationTime<2*1000*3600){
								var t=2*1000*3600-durationTime;
								durationHour=parseInt(t/1000/3600);
								durationMinute=parseInt(t/1000%3600/60);
								durationSecond=parseInt(t/1000%60);
								$(".durationHour").text("0"+durationHour+":");
								if(durationMinute>9){
									$(".durationMinute").html(durationMinute+":");
								}else{
									$(".durationMinute").text("0"+durationMinute+":");
								}
								if(durationSecond>9){
									$(".durationSecond").text(durationSecond);
								}else{
									$(".durationSecond").html("0"+durationSecond);
								}
								$(".endDistance").text("距本场结束");
							}else{
								$(".durationHour").text("00 :");
								$(".durationMinute").text(" 00 :");
								$(".durationSecond").text(" 00");
								$(".endDistance").text("本场已结束");
							}
							break;
						}
					}else if(time<date.getHours()){
						$($(".status").get(i)).text("已结束");
						$($(".crazyActice li").get(i)).css({"background-color":"rgba(0,0,0,0.8)","color":"#fff"});
					}else if(time<date.getHours()+2&&time>date.getHours()){
						$(".endDistance").text("距本场开始");
						$($(".status").get(i)).text("即将开始");
						var h=time-date.getHours();
						var m=59-date.getMinutes();
						var s=59-date.getSeconds();
						if(h>9){
							$(".durationHour").text(h+":");
						}else{
							$(".durationHour").text("0"+h+":");
						}
						if(m>9){
							$(".durationMinute").html(m+":");
						}else{
							$(".durationMinute").text("0"+m+":");
						}
						if(s>9){
							$(".durationSecond").text(s);
						}else{
							$(".durationSecond").html("0"+s);
						}
						$($(".crazyActice li").get(i)).css({"background-color":";rgba(0,0,0,0.8)","color":"#fff"});
					}else{
						$($(".status").get(i)).text("即将开始");
					}
				}		
			},1000)
		}
	});
	return {
		render:render
	}
})