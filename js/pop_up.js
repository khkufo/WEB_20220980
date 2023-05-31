function pop_up(){
	var cookieCheck=getCookie("popupYN");
	if(cookieCheck !="N"){
		window.open("pop_up.html","팝업테스트","width=400,height=300,top=10,left=10");
	}
	//window.open()함수는 창을 열거나 닫는(.close) 전용 함수이다.
	// ../ 는 상위 경로를 가리키는 것*/
}

function closePopup(){ //체크박스 클릭시 윈ㄷ우 닫는 함수-id값이 존재하면 클릭후 쿠키를 set
	if(document.getElementById('check_popup').value){
		setCookie("popupYN","N",1);  
		console.log("쿠키를 설정합니다.");
		self.close(); //현재 보고 있는 창 자신을 닫는다.
	}
}

function addJavascript(jsname){ //자바스크립트 외부 연동
	var th=document.getElementsByTagName('head')[0];
	var s=document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/popup_cookie.js');
addJavascript('/js/popup_showclock.js');