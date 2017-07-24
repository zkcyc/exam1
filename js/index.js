/*jq实现轮播图*/
var n = t = 0,count;
$(document).ready(function(){
	count = $('#banner_list a').length;
	$('#banner_list a:not(:first-child)').hide();//设置除了第一张图片，其他图片隐藏
	$('#banner_info').html($('#banner_list a:first-child').find('img').attr('alt'));//获取第一张图片对应的alt属性，赋值给提示信息框
	$('#banner_info').click(function(){
		window.open($('#banner_list a:first-child').find('img').attr('href'),'_blank');
	})
	$('#banner_btn li').click(function(){
		var i = $(this).text()-1;
		n = i;
		if(i>=count){
			return;
		}
		$('#banner_info').html($('#banner_list a').eq(i).find('img').attr('alt'));
		$('#banner_info').unbind().click(function(){
			window.open($('#banner_list a').eq(i).find('img').attr('href'),'_blank');
		})
		$('#banner_list a').filter(':visible').fadeOut(500).parent().children().eq(i).fadeIn(1000);
		document.getElementById('banner').style.background = '';
		$(this).toggleClass('on');//该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。
		$(this).siblings().removeAttr('class');
	})
	
	t = setInterval('showAuto()',4000);
	$('#banner').hover(function(){
		clearInterval(t);
	},
	function(){
		t = setInterval('showAuto()',4000);
	})
	
})
function showAuto(){
	n = n>=(count-1)?0:++n;
	$('#banner li').eq(n).trigger('click');//trigger触发被选元素的指定时间类型
}
