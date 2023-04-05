document.getElementById("search_btn").addEventListener('click', search_message);
function search_message(){
	alert("검색을 수행합니다!"); //alert: 메시지 출력
	let search_str =document.querySelector("#search_txt"); //변수에 저장
	document.getElementById("search_message").innerHTML=search_str.value; //태그에 값 추가
	console.log(search_str.value); //콘솔에 출력
}
//getElementbyld 문서의 특정 id를 가져온다.  
//addEventListner로 이벤트를 등록한다. 
//click은 마우스 이벤트의 한 종류
//search_message는 함수이다. 