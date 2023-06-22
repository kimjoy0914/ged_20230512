//전개 연산자 - 배열
const a = [1,2,3]
const b =[4,5,6]

const c = a.concat(b)

console.log(c) // [1,2,3,4,5,6]

console.log(...c)

const d = [a,b]

console.log(d) //2차배열

const e = [...a, ...b]

console.log(e)