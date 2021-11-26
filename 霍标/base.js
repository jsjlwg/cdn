
$(function () {
	$(".primary-toggle").click(function() {
        if ($(".navbar").css("display") == "none") {
			$(this).addClass("current");
            $(".navbar").show();
            $(".searchPop").hide();
        } else {
			$(this).removeClass("current");
            $(".navbar").hide();
        }
    });

	 $(".drop-down").click(function(event){
        event.stopPropagation();
        $(".drop-box").slideToggle();
    });
	$(document).click(function(){
        $(".drop-box").slideUp('slow');
    });
	$(".open-search").click(function(){
		var Seacrh=$(".header__search");
		Seacrh.addClass("active").siblings().hide();
		Seacrh.find(".form-control").focus();
		$(".search-close").click(function(){
			Seacrh.removeClass("active").siblings().show();
		});
	});	
	$(".pliebiao")[0] && $(".pliebiao").click(function(e) {
		if ($(".plb").css("display") == "none") {
			$(this).addClass("current");
			$(".plb").show();
            $(".headerChannelList").hide();
		} else {
			$(this).removeClass("current");
			$(".plb").hide();
		}
	});
	$(".jq")[0] && $(".jq").click(function(e) {
		if ($(".juqing").css("display") == "none") {
			$(this).addClass("current");
			$(".juqing").show();
            $(".headerChannelList").hide();
		} else {
			$(this).removeClass("current");
			$(".juqing").hide();
		}
	});
	/* detail-intro-more */	
	$("#detail-intro-more").on('click', function (event) {
        event.preventDefault();
        var that = $(this),
			selector = that.parent("div");   
        if (selector.hasClass("owl")){
            selector.removeClass("owl");
			that.text("详情");
        }else{
			selector.addClass("owl");
			that.text("收起");
		}
    });
	$(".close_tips").click(function(){
		$("#fd_tips").remove();
	});
});

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"active":"";
		con.style.display=i==cursel?"block":"none";
	}
};
$(".open-desc").on('click',function(){
	$(".data-more").slideToggle("slow")
});
function divrefresh(){
	$("a.lazyload").lazyload({effect:"show"});
}


window.onload=function(){
	var huan=document.querySelectorAll("a.huan");
	for(var i=0;i<huan.length;i++){
		huan[i].onclick=function(){
			var suba=this.parentNode.querySelectorAll("div");
			for(var j=0;j<suba.length;j++){
				if(suba[j].style.display=="block"){
					suba[j].style.display="none";
					suba[(j+1)%suba.length].style.display="block";
				break;
				}
			}
		}
	}
}