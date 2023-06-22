// 고차함수
// : 함수를 반환하는 함수를 고차함수라 한다.
// 활용예) 리액트 리덕스 재현해 볼 때, 구독발행 모델(리덕스), 커리함수

const sayHello = function () {
    return function(){// 고차함수
        console.log('Hello')
    }
}

const myFunc = sayHello();
myFunc()