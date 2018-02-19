function lun1(){
	var m = document.getElementById('one');
	if(m.style.zIndex==2){
		m.style.zIndex=1;
	}else{
		m.style.zIndex=2;
	}
}

setInterval(lun1,1500);
