// 전개연산자 - 객체

const a = {x:1, y:2} //{}객체
const b = {y:3, z:4}

const c = {a, b}

console.log(c)

const d = {...a, ...b}

console.log(d)//y속성값은 나중에 들어온 값으로 덮어짐
