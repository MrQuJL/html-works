// 搜索框切换
var s_flag = true; //true:点开,false:收起
$('.h_con_c_search a span').click(function(ev){
	if(s_flag){ //点开
		$('.h_con_c_search a span.s_bottom').css({"display":"block","border":"1px solid #dadada","borderTop":"none"});
		$('.h_con_c_search a span.s_top').css({'border':"1px solid #dadada","borderBottom":"none"}).html($(this).html());
		ev.stopPropagation();
		s_flag = !s_flag;
	}else{ //收起
		$('.h_con_c_search a span.s_bottom').css("display","none");
		var con = $(this).html(); //获取当前点击的内容
		var other = $(this).siblings('span').html() //获取另一个的内容
		if(con!=$('.h_con_c_search a span.s_top').html()){ //当前点击的不是自身
			$('.h_con_c_search a span.s_top').css({"border":"1px solid transparent"}).html(con).siblings('span').html(other);
			$('#sousuo').attr({"placeholder":"搜索"+con});
		}else{ //点击的是自身
			$(this).css({"border":"1px solid transparent"});
		}
		ev.stopPropagation();
		s_flag = !s_flag;
	}
});
$(document).click(function(){
	$('.h_con_c_search a span.s_bottom').css("display","none");
	$('.h_con_c_search a span.s_top').css("border","1px solid transparent");
	s_flag = true;
});

//-----------------------------------------------------------------------

// 中间轮播图
var bgItem = $('ul#banner_imgs li'); //获取轮播图中的每一个图片背景li
var liItem = $('#banner_ico li'); //获取每一个小圆点对象
var timer; //设置定时器
var num = 0; //设置角标
for(var i = 0; i < liItem.length;i++){
	liItem.eq(i).mouseover(function(){
		num = $(this).index(); //获取当前圆点的角标
		run();
	});
}
// 轮播过程
function run(){
	liItem.eq(num).css({"background":"#fff"}).siblings().css({"background":""});
	bgItem.eq(num).fadeIn().siblings('li').fadeOut();
}
// 自动轮播
function autoplay(){
	timer = setInterval(function(){
		num = (num+1)%8;
		run();
	},1500);
}
autoplay();
// 点击后退按钮
$('#banner_imgs div.left').click(function(){
	num--;
	if(num<0){num=7;}
	run();
});
// 点击前进按钮
$('#banner_imgs div.right').click(function(){
	num = (num+1)%8;
	run();
});
$('#banner_imgs div').select(function(){
	return false;
});
// 鼠标划入清除定时器,鼠标划出开启定时器
$('#banner_imgs').mouseover(function(){
	clearInterval(timer);
}).mouseout(function(){
	autoplay();
});
//-----------------------------------------------------------------------

//换一批
var guess_num=0;
$('#change-like').click(function(){
	$('.guess-like .guess-like-box ul').eq(guess_num).css({"z-index":"5"}).siblings().css("z-index","0");
	guess_num = (guess_num+1)%4;
});

//-----------------------------------------------------------------------




















