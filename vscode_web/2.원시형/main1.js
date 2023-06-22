// 변수 선언시 var는 사용하지 않습니다. - ES5까지는 var를 사용함
// 왜냐면 호이스팅 이슈가 있어서 그렇다
// ES6(2015) - const, let
// 호이스팅(hoisting) - 블록안에서 선언된 지역변수가 코드 블록 밖으로 끌어 올려지면서
//강제로 전역변수화 되는 현상
const num1 = 100;
const pi = 3.14

console.log(typeof(num1+undefined))
console.log(typeof pi)

// 너 숫자타입이야?
const isNum = typeof(num1);
console.log(isNum)

/*
자료형 (Data Type)
1. 원시형자료(primative type)
: 특정값이 메모리에 저장(값만)
- 문자(String)
- 숫자(Number)
- 논리형(Boolean : true, false)
- undefined : 변수를 선언하고 그 값을 할당하지 않으면 undefined가 대신 저장(에러상황)


2. 참조형 자료(reference type)
:값이 위치하고 있는 참조 주소값만 메모리에 저장(내장함수도 같이 접근가능)
- null(Object) :  명시적으로 특정 변수의 값을 비워둘 때
- array(Object) : 연관된 값들을 그룹으로 묶어서 관리하는 자료형태
- 객체(Object) : Object데이터를 key라는 인덱스를 통해 자료를 구조적으로 묶어 놓은 형태

*/