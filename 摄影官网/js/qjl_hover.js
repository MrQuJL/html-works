/* hover插件 v1.0 MrQuJL .@CopyRight2017 http://www.qjlwebapp.online*/
// 使用说明:
// 1.需同时引入qjl_hover.js和qjl_hover.css两个文件
// 2.调用插件,例:$.qjl_hover({obj:object,width:i_width,height:i_height});
// 1).将模板追加到object对象中
// 2).i_width-->模板的宽度
// 3).i_height-->模板的高度
$.qjl_hover = function(opts){
	$('.qjl_hover').remove();
	// 创建一个插件模板
	var $hover = $("<div class='qjl_hover'></div>").addClass('magictime swashIn');
	var $hover_center = $("<img class='center' src='images/center.png' width='30' height='30' />");
	$hover.append($hover_center);
	var $hover_bottom = $("<ul><li class='bottom_1'><i class='iconfont icon-xiangce1'></i></li><li class='bottom_2'><i class='iconfont icon-connect'></i></li><li class='bottom_3'><i class='iconfont icon-xinxi'></i></li><li class='bottom_4'><i class='iconfont icon-xin'></i></li></ul>");
	$hover.append($hover_bottom);
	// 动态的设置宽和高
	if(opts.width){$hover.width(opts.width);}
	if(opts.height){$hover.height(opts.height);}
	// 追加模板到图片上方
	$(opts.obj).append($hover);
}