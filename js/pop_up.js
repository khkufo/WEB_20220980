function pop_up(){
	window.open("../pop_up/pop_up.html","팝업테스트","width=400,height=300,top=10,left=10");
	//window.open()함수는 창을 열거나 닫는(.close) 전용 함수이다.
	// ../ 는 상위 경로를 가리키는 것*/
}

function show_clock(){
	
	let currentDate=new Date();
	let divClock=document.getElementById("divClock");
	let msg="현재 시간 : ";
	if(currentDate.getHours()>12){
		//12시보다 크면 오후 아니면 오전
		msg +="오후";
		msg+= currentDate.getHours()-12+"시";
	}
	else{
		msg+="오전"
		msg+=currentDate.getHours()+"시";
	}
	
	msg+=currentDate.getMinutes()+"분";
	msg+=currentDate.getSeconds()+"초";
	divClock.innerText = msg;
	
	if(currentDate.getMinutes()>58){
		//정각 1분전 빨강색 출력
		divClock.style.color="red";
	}
	setTimeout(show_clock, 1000); //1초마다 갱신
}