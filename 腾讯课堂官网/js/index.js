// �������л�
var s_flag = true; //true:�㿪,false:����
$('.h_con_c_search a span').click(function(ev){
	if(s_flag){ //�㿪
		$('.h_con_c_search a span.s_bottom').css({"display":"block","border":"1px solid #dadada","borderTop":"none"});
		$('.h_con_c_search a span.s_top').css({'border':"1px solid #dadada","borderBottom":"none"}).html($(this).html());
		ev.stopPropagation();
		s_flag = !s_flag;
	}else{ //����
		$('.h_con_c_search a span.s_bottom').css("display","none");
		var con = $(this).html(); //��ȡ��ǰ���������
		var other = $(this).siblings('span').html() //��ȡ��һ��������
		if(con!=$('.h_con_c_search a span.s_top').html()){ //��ǰ����Ĳ�������
			$('.h_con_c_search a span.s_top').css({"border":"1px solid transparent"}).html(con).siblings('span').html(other);
			$('#sousuo').attr({"placeholder":"����"+con});
		}else{ //�����������
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

// �м��ֲ�ͼ
var bgItem = $('ul#banner_imgs li'); //��ȡ�ֲ�ͼ�е�ÿһ��ͼƬ����li
var liItem = $('#banner_ico li'); //��ȡÿһ��СԲ�����
var timer; //���ö�ʱ��
var num = 0; //���ýǱ�
for(var i = 0; i < liItem.length;i++){
	liItem.eq(i).mouseover(function(){
		num = $(this).index(); //��ȡ��ǰԲ��ĽǱ�
		run();
	});
}
// �ֲ�����
function run(){
	liItem.eq(num).css({"background":"#fff"}).siblings().css({"background":""});
	bgItem.eq(num).fadeIn().siblings('li').fadeOut();
}
// �Զ��ֲ�
function autoplay(){
	timer = setInterval(function(){
		num = (num+1)%8;
		run();
	},1500);
}
autoplay();
// ������˰�ť
$('#banner_imgs div.left').click(function(){
	num--;
	if(num<0){num=7;}
	run();
});
// ���ǰ����ť
$('#banner_imgs div.right').click(function(){
	num = (num+1)%8;
	run();
});
$('#banner_imgs div').select(function(){
	return false;
});
// ��껮�������ʱ��,��껮��������ʱ��
$('#banner_imgs').mouseover(function(){
	clearInterval(timer);
}).mouseout(function(){
	autoplay();
});
//-----------------------------------------------------------------------

//��һ��
var guess_num=0;
$('#change-like').click(function(){
	$('.guess-like .guess-like-box ul').eq(guess_num).css({"z-index":"5"}).siblings().css("z-index","0");
	guess_num = (guess_num+1)%4;
});

//-----------------------------------------------------------------------




















