const a = 1
//a = 3
let b = 5;
b = 10
console.log(a)
console.log(b)

console.log(typeof a)
console.log(typeof '이순신' == 'string')
console.log(typeof 123 == 'number')
console.log(typeof undefined == 'undefined')
console.log(typeof null == 'object')

// === 가 세개이면 값도 비교하고 타입도 비교한다 
// ==면 값만 같은지 비교한다  123 == '123' true,  123 === '123' false

console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log(typeof function(){} === 'function')

console.log([].constructor === Array)
console.log({}.constructor === Object)


/*
    변수 선언시 ES6 부터는 const, let사용할 것

*/