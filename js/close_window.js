//close, setTimeout, clearTimeout 등은 js 내장 함수이다.
var close_time; //시간 정보
var close_time2=10; //10초 설정

clearTimeout(close_time); //재호출 정지
close_time=setTimeout("close_window()", 10000); // 1/1000초 지정, 바로 시작
//이 두 함수는 세트. 일정 시간동안 기다렸다가 특정 함수를 호출할 때 사용
//setTimeout으로 이벤트를 열었으면 그게 백그라운드에서 루프가 됨. clearTimeout으로 이벤트 종료
show_time(); //실시간 시간 보여주기

function show_time(){
	let divClock=document.getElementById('Time'); 
	divClock.innerText=close_time2; //10초 삽입 시작
	close_time2--; //1초씩 감소
	setTimeout(show_time, 1000); //1초마다 갱신
}

function close_window(){//함수 정의
	window.close(); //해당 윈도우를 닫는 기능
}

window.onload=showWindow;