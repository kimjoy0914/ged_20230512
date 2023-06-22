// 함수는 하나의 데이터 이다. - 고차함수, 일급함수(리액트- 16.8버전리액트훅(Hook)), 구독발행 모델....(리액트-리덕스밀접관련-중급이상)
// 함수형 프로그래밍

const  a = () => {//ES6{arrow function}, ES7문법 사용하자
    console.log('A')
}
//old version
function  a1(){
    console.log('a1')
}
//바닐라스크립트에서는 파라미터로 함수를 넘길 수 있다.- 함수도 객체이다
//결론 : c와 c()는 다르다 
const b = (c) => {
    console.log(c)
    c()
}

a()
a1()
b(a)