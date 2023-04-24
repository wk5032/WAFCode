$(function() {
	$("#header").load("../header.html");
	$("#main-left").load("../leftNav.html");
		
	//左边列表的高度控制
	if($('#main-left').height()<$(document).height()){
		$('#main-left').css('height', $(document).height()+(-50)+'px');
	}else{
		$('#main-left').css('height', $('#main-right').height()+'px');
	}
	
	// 黑白名单切换
	$(".t511-tit li").each(function(i){
		$(this).click(function(){
			$(".t511-tit li").removeClass("hover");
			$(this).addClass("hover");
			$(".t511-des").removeClass("show");
			$(".t511-des").eq(i).addClass("show");				
		});
	});
	
	// 搜索图标的悬停效果
	$(".t-btn-search").mouseover(function(){
		$(".search-btn").removeClass("active");
		$(this).find("input.search-btn").addClass("active");
	})
	.mouseleave(function(){
		$(this).find("input.search-btn").removeClass("active");
		$(".search-btn").eq(0).addClass("active");
	});
	
	//自定义列
	$(".t211-custom:has(span)").hover(function(){
		$(this).children("span").show();
    },function(){
		$(this).children("span").hide();
	});
	

	
	//协议还原配置--复选框选择状态要调整
	$("#conf-btn").click(function(){
		if($(this).hasClass("conf-btn-hover")){
			$(this).removeClass("conf-btn-hover");
			$("#conf-btn").css("background","url(../../images/btn-close.png) 50% 50% no-repeat");
			$(".conf-con-h .t-checkbox").children(':checkbox').attr('disabled','disabled');
		}else{
			$("#conf-btn").css("background","url(../../images/btn-open.png) 50% 50% no-repeat");
			$(".conf-con-h").children(':checkbox').removeAttr("disabled");
			$(this).addClass("conf-btn-hover");
		}
	});
	
	$("#conf-btn2").click(function(){
		if($(this).hasClass("conf-btn-hover")){
			$(this).removeClass("conf-btn-hover");
			$("#conf-btn2").css("background","url(../../images/btn-close.png) 50% 50% no-repeat");
			$(".conf-con-h2 a").css("background-color","#cacfdd");
		}else{
			$("#conf-btn2").css("background","url(../../images/btn-open.png) 50% 50% no-repeat");
			$(".conf-con-h2 a").css("background-color","#5492f5");
			$(this).addClass("conf-btn-hover");
		}
	});
	$("#conf-btn3").click(function(){
		if($(this).hasClass("conf-btn-hover")){
			$(this).removeClass("conf-btn-hover");
			$("#conf-btn3").css("background","url(../../images/btn-close.png) 50% 50% no-repeat");
		}else{
			$("#conf-btn3").css("background","url(../../images/btn-open.png) 50% 50% no-repeat");
			$(this).addClass("conf-btn-hover");
		}
	});
	//文件检测--状态配置
	$(".t214-status").click(function(){
		if($(this).hasClass("t214-close")){
			$(this).removeClass("t214-close");
		}else{
			$(this).addClass("t214-close");
		}
	});
	
	
	/*趋势图展示*/
	$("#chart_qu").click(function(){
		if($(this).hasClass("chart_qu_hover")){
			$("#chart_qu").css("background","#23b7e5");
			$("#chart_qu").text('展开');
			$("#chart_00").css("display","none");
			$(this).removeClass("chart_qu_hover");
		}else{
			$("#chart_qu").css("background","#7c7c7c;");
			$("#chart_qu").text('收起');
			$("#chart_00").css("display","block");
			$(this).addClass("chart_qu_hover");	
	    }			
	});

	/*分布图展示*/
	$("#chart_bu").click(function(){
		if($(this).hasClass("chart_bu_hover")){
			$("#chart_bu").css("background","#23b7e5");
			$("#chart_bu").text('展开');
			$("#chart_bu_10").css("display","none");
			$(this).removeClass("chart_bu_hover");
		}else{
			$("#chart_bu").css("background","#7c7c7c;");
			$("#chart_bu").text('收起');
			$("#chart_bu_10").css("display","block");
			$(this).addClass("chart_bu_hover");	
	    }			
	});

	/*TOPN表格展示*/
	$("#chart_top").click(function(){
		if($(this).hasClass("chart_top_hover")){
			$("#chart_top").css("background","#23b7e5");
			$("#chart_top").text('展开');
			$("#chart_20").css("display","none");
			$(this).removeClass("chart_top_hover");
		}else{
			$("#chart_top").css("background","#7c7c7c;");
			$("#chart_top").text('收起');
			$("#chart_20").css("display","block");
			$(this).addClass("chart_top_hover");	
	    }			
	});

	/*危险主机设置*/
	$("#host_btn").click(function(){
		if($(this).hasClass("host_btn_hover")){
			$("#host_btn").css("background","#23b7e5");
			$("#host_btn").text('展开');
			$("#chart_70").css("display","none");
			$(this).removeClass("host_btn_hover");
		}else{
			$("#host_btn").css("background","#7c7c7c;");
			$("#host_btn").text('收起');
			$("#chart_70").css("display","block");
			$(this).addClass("host_btn_hover");				
	    }			
	});

	//详细报表
	$("#t560-list li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("current")){
				$("#t560-list li").removeClass("current").children(".ico").removeClass("ico-up");
				$(this).addClass("current").children(".ico").addClass("ico-up");
				$("#t560-con .t560-con-data").removeClass("show");
				$("#t560-con .t560-con-data").eq(i).addClass("show");
			}
		});
	});
	//详细报表
	$("#t560-one li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){	
				$("#t560-one li").removeClass("hover");
				$(this).addClass("hover");
				$("#t560-one-des .t560-min").removeClass("show");
				$("#t560-one-des .t560-min").eq(i).addClass("show");
			}
		});
	});
	//详细报表
	$("#t560-two li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){
				$("#t560-two li").removeClass("hover");
				$(this).addClass("hover");
				$("#t560-two-des .t560-min").removeClass("show");
				$("#t560-two-des .t560-min").eq(i).addClass("show");
			}
		});
	});
	//弹窗效果
	/* $(".t-btn-new").click(function(event){
		$(".mask").css({"display":"block"});
		$(".dialog").css({"display":"block"});
	});
	
	$(".icon-close").click(function(event) {
		$(".mask").css({"display":"none"});
		$(".dialog").css({"display":"none"});
	}); */
	
	//右侧列表的高度控制
	if($('#main-cont').height()<$(document).height()){
		$('#main-side').css('height', $(document).height()+-60+'px');
		$('#main-side .history').css('height', $("#main-side").height()+-65+'px');
		$('#main-side .history-date').css('height', $("#main-side").height()+-65+'px');
		
	}else{
		$('#main-side').css('height', $('#main-cont').height()+'px');
		$('#main-side .history').css('height', $("#main-side").height()+-65+'px');
		$('#main-side .history-date').css('height', $("#main-side").height()+-65+'px');
	}
	//首页威胁分布
	/* $("#main-map-toggle").click(function(){
		if($(this).hasClass("icon-map-down")){
			$(this).removeClass("icon-map-down");
			$("#main-map").css("display","none");
			$(this).addClass("icon-map-left");
		}else{
			$(this).removeClass("icon-map-left");
			$("#main-map").css("display","inline-block");
			$(this).addClass("icon-map-down");
		}
	}); */

	//首页威胁排行
	/* $("#main-rain-toggle").click(function(){
		if($(this).hasClass("icon-map-down")){
			$(this).removeClass("icon-map-down");
			$("#main-rain").css("display","none");
			$(this).addClass("icon-map-left");
		}else{
			$(this).removeClass("icon-map-left");
			$("#main-rain").css("display","inline-block");
			$(this).addClass("icon-map-down");
		}
	}); */
	
	//大地图 菜单点击效果
	$("#icon-menu").click(function(){
		$("#menu-con").toggle();
	});
	$("#event-list01").click(function(){
		if($(this).hasClass("icon-list-down")){
			$(this).removeClass("icon-list-down");
			$("#event-des01").css("display","none");
			$("#event-top-list01").css("height","35px");
			$("#event-top-list01").css("marginTop","70px");
			$(this).addClass("icon-list-up");
		}else{
			$(this).removeClass("icon-list-up");
			$("#event-des01").css("display","block");
			$("#event-top-list01").css("height","105px");
			$("#event-top-list01").css("marginTop","0px");
			$(this).addClass("icon-list-down");
		}
	});
	$("#event-list02").click(function(){
		if($(this).hasClass("icon-list-down")){
			$(this).removeClass("icon-list-down");
			$("#event-des02").css("display","none");
			$("#event-top-list02").css("height","35px");
			$("#event-top-list02").css("marginTop","70px");
			$(this).addClass("icon-list-up");
		}else{
			$(this).removeClass("icon-list-up");
			$("#event-des02").css("display","block");
			$("#event-top-list02").css("height","105px");
			$("#event-top-list02").css("marginTop","0px");
			$(this).addClass("icon-list-down");
		}
	});
	$("#event-list03").click(function(){
		if($(this).hasClass("icon-list-down")){
			$(this).removeClass("icon-list-down");
			$("#event-des03").css("display","none");
			$("#event-top-list03").css("height","35px");
			$("#event-top-list03").css("marginTop","70px");
			$(this).addClass("icon-list-up");
		}else{
			$(this).removeClass("icon-list-up");
			$("#event-des03").css("display","block");
			$("#event-top-list03").css("height","105px");
			$("#event-top-list03").css("marginTop","0px");
			$(this).addClass("icon-list-down");
		}
	});
	
	//首页宽度小于1300时 底部实时告警隐藏
	if($(document).width()<1300){
		$("#event-list04").removeClass("icon-list-down");
		$("#event-des04").css("display","none");
		$("#event-bottom").css("height","45px");
		$(".event-top").css("bottom","65px");
		$("#event-list04").addClass("icon-list-up");
	}
	$("#event-list04").click(function(){
		if($(this).hasClass("icon-list-down")){
			$(this).removeClass("icon-list-down");
			$("#event-des04").css("display","none");
			$("#event-bottom").css("height","45px");
			$(".event-top").css("bottom","65px");
			$(this).addClass("icon-list-up");
		}else{
			$(this).removeClass("icon-list-up");
			$("#event-des04").css("display","block");
			$("#event-bottom").css("height","160px");
			$(".event-top").css("bottom","180px");
			$(this).addClass("icon-list-down");
		}
	});
	
	//大地图底部植入事件失陷事件切换
//	$("#event-ul03 li").each(function(i){
//		$(this).click(function(){
//			if(!$(this).hasClass("hover")){
//				$("#event-ul03 li").removeClass("hover");
//				$(this).addClass("hover");
//				$("#event-des03 .event-distr").removeClass("show");
//				$("#event-des03 .event-distr").eq(i).addClass("show");
//			}
//		});
//	});
	//右侧收缩效果
	$('#side-shortcut').click(function(){
		if($('#event-side-con').css('display')=='block'){
			$('#event-side-con').hide();
			$('#event-bottom').css('padding-right','20px');
			$('#event-bottom-bg').css('padding-right','20px;');
			$('.event-side').css('width','0px');
			$('#side-shortcut').css('background','url(../../images/page/shensuo.png)no-repeat scroll 50% 50%');			
		}else{
			$('#event-side-con').show();
			$('#event-bottom').css('padding-right','300px;');
			$('#event-bottom-bg').css('padding-right','300px;');
			$('.event-side').css('width','310px');
			$('#side-shortcut').css('background','url(../../images/page/shensuol.png)no-repeat scroll 50% 50%');
		}
	});	
	$('#side-shortcut').mouseenter(function(){
		if($('#event-side-con').css('display')=='block'){
			$('#side-shortcut').css('background','url(../../images/page/shensuolh.png)no-repeat scroll 50% 50%');		
		}else{
			$('#side-shortcut').css('background','url(../../images/page/shensuoh.png)no-repeat scroll 50% 50%');
		}
	})
	$('#side-shortcut').mouseleave(function(){
		if($('#event-side-con').css('display')=='block'){
			$('#side-shortcut').css('background','url(../../images/page/shensuol.png)no-repeat scroll 50% 50%');		
		}else{
			$('#side-shortcut').css('background','url(../../images/page/shensuo.png)no-repeat scroll 50% 50%');
		}
	})
	//右侧收缩效果
	$('#Pinchcut').click(function(){
		if($('#box').css('display')=='block'){
			$('#box').hide();
			$(this).removeClass("Pinchcut2");
			$(this).addClass("Pinchcut1");
			$('Pinchcut1').css('width','22px');
			$('Pinchcut1').css('background','url(../../images/page/leftcut1.jpg)no-repeat scroll 50% 50%');			
		}else{
			$('#box').show();
			$(this).removeClass("Pinchcut1");
			$(this).addClass("Pinchcut2");
			$('Pinchcut2').css('width','27px');
			$('Pinchcut2').css('background','url(../../images/page/leftcut2.jpg)no-repeat scroll 50% 50%');
		}
	});	
	//大地图菜单效果
	$("#menu-con li").mouseenter(function(){
		$(this).addClass("open")
			.children(".submenu2").show().end()
			.siblings().removeClass("open").children(".submenu2").hide();		
	}).mouseleave(function(){
		$(this).removeClass("open")
			.children(".submenu2").hide();
	});
	
	//流量检测-失陷主机
	$("#t218btn1").click(function(){
		if($(this).children().hasClass("icon-t218btnc")){
			$("#t218btn1 i").removeClass("icon-t218btnc");
			$(".t218-cont1").css("display","none");
			$("#t218btn1 i").addClass("icon-t218btnk");
		}else{
			$("#t218btn1 i").removeClass("icon-t218btnk");
			$(".t218-cont1").css("display","inline-block");
			$("#t218btn1 i").addClass("icon-t218btnc");
		}
	});

	$("#t218btn2").click(function(){
		if($(this).children().hasClass("icon-t218btnc")){
			$("#t218btn2 i").removeClass("icon-t218btnc");
			$(".t218-cont2").css("display","none");
			$("#t218btn2 i").addClass("icon-t218btnk");
		}else{
			$("#t218btn2 i").removeClass("icon-t218btnk");
			$(".t218-cont2").css("display","inline-block");
			$("#t218btn2 i").addClass("icon-t218btnc");
		}
	});
	//攻击检测-文件检测查询条件收缩展示
	$("#t218btn3").click(function(){
		if($(this).children().hasClass("icon-t218btnc")){
			$("#t218btn3 i").removeClass("icon-t218btnc");
			$(".t218-cont3").css("display","none");
			$("#t218btn3 i").addClass("icon-t218btnk");
		}else{
			$("#t218btn3 i").removeClass("icon-t218btnk");
			$(".t218-cont3").css("display","inline-block");
			$("#t218btn3 i").addClass("icon-t218btnc");
		}
	});
	//攻击检测-异常行为
	$("#mrank li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){
				$("#mrank li").removeClass("hover");
				$(this).addClass("hover");
				$(".mrankcon").removeClass("show");
				$(".mrankcon").eq(i).addClass("show");
			}
		});
	});

	$('.multiple_span_click').each(function () {
		$(this).children('span').each(function (i) {
            $(this).on('click', function () {
                if (i === 0) {
                    $(this).parent().children().removeClass('hover');
                    $(this).addClass('hover');
                } else {
                	if ($(this).hasClass('hover')) {
                		$(this).removeClass('hover');
                    } else {
                        $(this).parent().children().first().removeClass('hover');
                        $(this).addClass('hover');
                    }
                    if ($(this).parent().children('span[class=hover]').length === 0) {
                        $(this).parent().children().first().addClass('hover');
					}
                }
            });
        });
    });
	$('.multiple-span-click').each(function () {
		$(this).children('span').each(function (i) {
            $(this).on('click', function () {
                if (i === 0) {
                    $(this).parent().children().removeClass('hover');
                    $(this).addClass('hover');
                } else {
                	if ($(this).hasClass('hover')) {
                		$(this).removeClass('hover');
                    } else {
                        $(this).parent().children().first().removeClass('hover');
                        $(this).addClass('hover');
                    }
                    if ($(this).parent().children('span[class=hover]').length === 0) {
                        $(this).parent().children().first().addClass('hover');
					}
                }
            });
        });
    });
	
	//文件检测-基础设置
	$("#mrank2 li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){
				$("#mrank2 li").removeClass("hover");
				$(this).addClass("hover");
				$(".nav-flie-set").removeClass("show");
				$(".nav-flie-set").eq(i).addClass("show");
			}
		});
	});
	
	//文件检测-黑名单
	$("#mrank3 li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){
				$("#mrank3 li").removeClass("hover");
				$(this).addClass("hover");
				$(".mrankcon3").removeClass("show");
				$(".mrankcon3").eq(i).addClass("show");
			}
		});
	});
	//文件检测-白名单
	$("#mrank4 li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("hover")){
				$("#mrank4 li").removeClass("hover");
				$(this).addClass("hover");
				$(".mrankcon4").removeClass("show");
				$(".mrankcon4").eq(i).addClass("show");
			}
		});
	});
});

function checkIP(ip){
	var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;//正则表达式
	if(re.test(ip)){
	    if( RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256)
	    return true;
	}else
	{
		return (/^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/.test(ip));
	}
}

//e.g. 192.168.* 或 192.168.1.* IP验证
function checkIPlike(ip){
	if(ip.indexOf(":") > -1){
		if(ip.indexOf("*")> -1){
			var lastIP = ip.substring(ip.lastIndexOf(":")+1);
			//判断最后一个ip段中是否包含除*以为的字符，是则报错
			var reg1 = /^\*$/;
			if(!reg1.test(lastIP)){
				return false;
			}
			
			var ips = ip.split("*");
			if(ips.length != 2){
				return false;
			}else{
				//对ipv6的模糊查询校验，只简单判断冒号间的数据是否满足要求
				var ips1 = ips[0].split(":");
				var reg = /^[A-Fa-f0-9]{1,4}$/;
				for(var i=0;i<ips1.length;i++){
					if(ips1[i]!= '' && ips1[i] != undefined){
						if(!reg.test(ips1[i])){
							return false;
						}
					}
				}
			}
		}else{
			return (/^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/.test(ip));
		}
		
	}else{
		var ips = ip.split('.');
		if(ips.length<3||ips.length>4){
			return false;
		}
		
		if(ips.length<4&&ips[ips.length-1]!='*'){
			return false;
		}
		
		for(var i=0;i<ips.length;i++){
			if(""==ips[i]){
				return false;
			}
			//针对ip中 增加空格的形式做校验
			if(ips[i].indexOf(" ") > -1){
				return false;
			}
			
			if(i==ips.length-1){
				if((isNaN(ips[i])&&ips[i]!='*')||ips[i]<0||ips[i]>255)
				{
					return false;
				}else{
					return true;
				}
			}
			
			if(isNaN(ips[i])||ips[i]<0||ips[i]>255){
				return false;
			}
		}
	}
	
	return true;
}

String.prototype.cutByte = function (start, bytes) {
    for (var i=start; bytes>0; i++) {
        var code = this.charCodeAt(i);
        bytes -= code<256 ? 1 : 2;
    }
    var newStr = this.slice(start,i);
    return newStr == this ? newStr : newStr + '...';
};



function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

//数组去重 arr = arr.unique();
Array.prototype.unique = function(){
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
};

function changeTwoDecimal(x)  {  
	var f_x = parseFloat(x);  
	if (isNaN(f_x)){  
		alert('function:changeTwoDecimal->parameter error');  
		return false;
	}  
	var f_x = Math.round(x*100)/100;  
  
	return f_x;  
}

//防止冒泡事件
function stopBubble(evt) {
	//判断浏览器的类型，在基于ie内核的浏览器中的使用cancelBubble
	//在基于firefox内核的浏览器中支持做法stopPropagation
	var e = (evt) ? evt : window.event;
	if (window.event) {
		e.cancelBubble = true;
	} else {
		e.stopPropagation();
	}
}

//判断引用的文件是否存在
function isExistFile(filepath)
{
    var xmlhttp;
    if (window.XMLHttpRequest){
      xmlhttp=new XMLHttpRequest();
    }else{
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",filepath,false);
    xmlhttp.send();
    if(xmlhttp.readyState==4){  
        if(xmlhttp.status==200) return true; //url存在  
        else if(xmlhttp.status==404) return false; //url不存在  
        else return false;//其他状态  
    }
}


 function showUs()
{
	 $("#us_mask").css("display","block");
}

function closeUs()
{
	$("#us_mask").css("display","none");
}

function cutStr(str,len)
{
	
	//如果给定字符串小于指定长度，则返回源字符串；
		if (getLength(str) <= len) {
			return str;
		}
		var str_length = 0;
		var str_len = 0;
		str_cut = new String();
		charCode=-1;
		str_len = str.length;
		for (var i = 0; i < str_len; i++) {
			a = str.charAt(i);
			charCode = str.charCodeAt(i);
			str_length++;
			if (charCode < 0 || charCode > 128) {
				//中文字符的长度经编码之后大于4
				str_length++;
			}
			
			if(a=="<")
			{
				str_length=str_length+4;
				a="&lt;"
			}
			if(a==">")
			{
				str_length=str_length+4;
				a="&gt;"
			}
			
			str_cut = str_cut.concat(a);
			if (str_length >= len-3) {
				return str_cut+"...";
			}
		}
		
}

function getLength(str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
}

function timeStamp2String(time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function convertRegdetail(content) {
    if(content=='Local')
    {
    	content='内部网络';
    }
    /*if(content == 'Not Available'||content == 'Unknown'){
    	content = '未知';
    }*/
    return content;
}
