document.getElementById("search_btn").addEventListener('click', search_message);

var search_array=[]; //빈 배열-전역 변수


function search_message(){
	//alert: 메시지 출력
	let search_str =document.querySelector("#search_txt"); //변수에 저장
	if(search_str.value.length===0){
		alert("검색어가 비었습니다. 입력해주세요");
	}
	else{
		no_str(search_str);
	}
	
	//let text=document.getElementById("search_message").innerHTML=search_array.toString(); //태그에 값 추가
	//document.querySelector('#form_main').submit();
	console.log(search_str.value); //콘솔에 출력
}
//getElementbyId 문서의 특정 id를 가져온다.  
//addEventListner로 이벤트를 등록한다. 
//click은 마우스 이벤트의 한 종류
//search_message는 함수이다. 

function no_str(message){
	if(message.value=="비속어1"){
		alert((message.value)+"은(는) 검색어로 적절하지 않습니다.");
	}
	else{
		alert("검색을 수행합니다!")
		search_array.push(message.value); //배열에 검색어 추가
		let text=document.getElementById("search_message").innerHTML=search_array.toString(); //값 변환
		var text2=document.getElementById('search_message').innerHTML=search_array; // 배열로 전송
		document.querySelector("#form_main").submit();
		arrayCheck();
	}
}

function arrayCheck(){
	if(search_array.length==10){
			search_array.shift();
			search_array.push(text2);
		}
}