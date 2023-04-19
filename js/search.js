document.getElementById("search_btn").addEventListener('click', search_message);

var search_array=[]; //빈 배열-전역 변수

function search_message(){
	alert("검색을 수행합니다!"); //alert: 메시지 출력
	search_array.push(search_str.value); //배열에 검색어 추가
	let search_str =document.querySelector("#search_txt"); //변수에 저장
	let text=document.getElementById("search_message").innerHTML=search_array.toString(); //태그에 값 추가
	document.querySelector('#form_main').submit();
	console.log(search_str.value); //콘솔에 출력
}
//getElementbyId 문서의 특정 id를 가져온다.  
//addEventListner로 이벤트를 등록한다. 
//click은 마우스 이벤트의 한 종류
//search_message는 함수이다. 