// Boolean
const a = true
const b = false

if (a) {
    console.log('first')
}
//undefined는 값이 할당되지 않은 상태 - 기본적으로 갖는 값
let age = undefined
console.log(age)

setTimeout(()=>{//2초 있다가 호출해주세요 . 실행할께요
    age = 30
    console.log(age)
},2000)//밀리세크 단위 1000 이 1초다