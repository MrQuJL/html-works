// 横条联动
var oLi = document.getElementsByClassName('nav')[0].getElementsByTagName('li');
var oP = document.getElementsByClassName('nav')[0].getElementsByClassName('follow')[0];
for(var i = 0;i < 4;i++){
	// 初始化索引值,方便与下面的绿色条关联
	oLi[i].index = i;
	oLi[i].onmouseover = function(){
		oP.className = 'follow move_'+(this.index+1);
	}
}

// mouse on picture
var oImg = $('.main .main_content .pic_box li');

// 循环为每一张图片添加hover事件
for(var i = 0;i < 18;i++){
	
	$(oImg[i]).hover(function(){
		var i_width = this.offsetWidth;
		var i_height = this.offsetHeight;
		// 调用插件
		$.qjl_hover({obj:this,width:i_width,height:i_height});
	},function(){
		$(this).find('.qjl_hover').remove();
	},1000);
}
