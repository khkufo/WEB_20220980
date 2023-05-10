function pop_up(){
	var cookieCheck=getCookie("popupYN");
	if(cookieCheck !="N"){
		window.open("pop_up.html","팝업테스트","width=400,height=300,top=10,left=10");
	}
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

function setCookie(name,value,expiredays){
	var date=new Date(); //현재 시간 기준-date
	date.setDate(date.getDate()+expiredays); //setDate함수는 시간을 설정
	document.cookie=escape(name)+"="+escape(value)+";expires="+date.toUTCString()+"SameSite=None;Secure";
	//getDate 함수는 utc표준 날짜 리턴
}

function getCookie(name){ //쿠키가 존재하면 얻는다(쿠키는 키,값으로 이루어짐. 값은 인덱스 [1])
	var cookie=document.cookie;
	console.log("쿠키를 요청합니다.");
	if(cookie !=""){
		var cookie_array=cookie.split(";");
		for(var index in cookie_array){
			var cookie_name=cookie_array[index].split("=");
			if(cookie_name[0]=="popupYN"){ //popupYN을 찾아 값을 리턴
				return cookie_name[1];
			}
		}
	}
	return;
}

function closePopup(){ //체크박스 클릭시 윈ㄷ우 닫는 함수-id값이 존재하면 클릭후 쿠키를 set
	if(document.getElementById('check_popup').value){
		setCookie("popupYN","N",1);
		console.log("쿠키를 설정합니다.");
		self.close(); //현재 보고 있는 창 자신을 닫는다.
	}
}
