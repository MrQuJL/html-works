/* hover��� v1.0 MrQuJL .@CopyRight2017 http://www.qjlwebapp.online*/
// ʹ��˵��:
// 1.��ͬʱ����qjl_hover.js��qjl_hover.css�����ļ�
// 2.���ò��,��:$.qjl_hover({obj:object,width:i_width,height:i_height});
// 1).��ģ��׷�ӵ�object������
// 2).i_width-->ģ��Ŀ��
// 3).i_height-->ģ��ĸ߶�
$.qjl_hover = function(opts){
	$('.qjl_hover').remove();
	// ����һ�����ģ��
	var $hover = $("<div class='qjl_hover'></div>").addClass('magictime swashIn');
	var $hover_center = $("<img class='center' src='images/center.png' width='30' height='30' />");
	$hover.append($hover_center);
	var $hover_bottom = $("<ul><li class='bottom_1'><i class='iconfont icon-xiangce1'></i></li><li class='bottom_2'><i class='iconfont icon-connect'></i></li><li class='bottom_3'><i class='iconfont icon-xinxi'></i></li><li class='bottom_4'><i class='iconfont icon-xin'></i></li></ul>");
	$hover.append($hover_bottom);
	// ��̬�����ÿ�͸�
	if(opts.width){$hover.width(opts.width);}
	if(opts.height){$hover.height(opts.height);}
	// ׷��ģ�嵽ͼƬ�Ϸ�
	$(opts.obj).append($hover);
}