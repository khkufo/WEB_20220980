function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check=document.querySelector("#idSaveCheck");
    
    form.action = "../index_login.html";
    form.method = "get";
    
	if(check.checked==true){//아이디 체크 ㅇ
		alert("쿠키를 저장합니다");
		setCookie("id",id.value,1); //1일 저장
		alert("쿠키 값: "+id.value);
	}
	else{//아이디 체크 x 
		setCookie("id",id.value,0); // 날짜를 0-쿠키 삭제
	}
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
        form.submit();
	}
}

function logout(){
	location.href="index.html";
}

function get_id(){
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
}; // 함수 끝
alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
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

function init(){ //로그인 폼에 쿠키에서 가져온 아이디 입력
	let id=document.querySelector("#floatingInput");
	let check=document.querySelector("#idSaveCheck");
	let get_id=getCookie("id");
	if(get id){
		id.value=get_id;
		check.checked=true;
	}
}
