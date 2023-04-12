var ib='hi'; //변수 선언 후 주석 가능
//자바스크립트,파이썬 문자는 작은따옴표/큰따옴표 무관
var a=1;
var b;
b=5;

if(true){
	let c='let 접근'; //지역변수
	var c_1='var 접근'; //전역변수
}
//console.log(c); //if문 내에서만 사용되는 let변수이므로 에러남
console.log(c_1); //출력

let d=5; //let=var
//let d='값 재할당'; //let은 값 재할당이 안됨. 
console.log(d);

const e='상수 1 접근'; //상수는 선언과 동시에 초기화해주기
//e=5;
//const f //Error?
console.log(e);