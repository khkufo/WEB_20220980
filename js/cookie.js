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
			if(cookie_name[0]=="id"){ //popupYN을 찾아 값을 리턴
				return cookie_name[1];
			}
		}
	}
	return;
}

function deleteCookie(cookieName){
	var expireDate=new Date();
	expireDate.setDate(expireDate.getDate()-1);
	document.cookie=cookieName+"="+"; expires="+expireDate.toGMTString();
}