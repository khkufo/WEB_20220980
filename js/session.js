/*
function session_set(){//세션 저장
	let id=document.querySelector("#floatingInput");
	if(sessionStorage){
		sessionStorage.setItem("Session_Storage_test",id.value);
	}
	else{
		alert("로컬 스토리지 지원 x");
	}
}
*/

function session_set(){ //세션 저장(객체)
	let id=document.querySelector("#floatingInput");
	let password=document.querySelector('#floatingPassword');
	let random=new Date(); //랜덤 타입스탬프
	
	const obj={ //객체 선언
	id:id.value,
	otp:random
	}
	if(sessionStorage){
		const objString=JSON.stringify(obj); //객체->JSON 문자열변환
		let en_text=encrypt_text(objString); //암호화
		sessionStorage.setItem('Session_Storage_object', objString);
		sessionStorage.setItem('Session_Storage_encrypted',en_text);
	   }else{
		   alert('세션 스토리지 지원 x');
	   }
}

function session_get(){//세션 읽기
	if(sessionStorage){
		return sessionStorage.getItem("Session_Storage_encrypted");
	}
	else{
		alert("세션 스토리지 지원x");
	}
}

function session_check(){//세션 검사
	if(sessionStorage.getItem('Session_Storage_object')){
		alert('이미 로그인 되었습니다.');
		location.href='index_login.html'; //로그인된 페이지로 이동
	}	
}

function session_del(){//세션 삭제
	//check if the sessionstorage ovject exists
	if(sessionStorage){
		//retrieve data
		sessionStorage.removeItem('Session_Storage_object');
		alert('로그아웃 버튼 클릭 확인: 세션 스토리지를 삭제합니다.');
	}
	else{
		alert('세션 스토리지 지원x');
	}
}