window.onload = function(){
	//头部获取时间
	showTime();
}

//检查时间
function checkTime(i){
	if(i<10){
		i = '0'+i;
	}
	return i;
}
//头部获取时间
function showTime(){
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	minute = checkTime(minute);
	second = checkTime(second);
	var week = today.getDay();
	var weekday = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	document.getElementById('date').innerHTML = year+'年'+month+'月'+day+'日'+hour+':'+minute+':'+second+weekday[week];
	setTimeout('showTime()',500);
}
