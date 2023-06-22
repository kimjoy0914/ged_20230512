//전개 연산자  -  배열 객체
let items = [
    { id:1, name: "벤치프레스", count: 10},
    { id:2, name: "랫풀다운", count: 12},
    { id:3, name: "스쿼트", count: 30},
]

// 깊은복사 & 얕은복사
let item2 = [items]
console.log(items===item2)
console.log(items==item2)
console.log(item2)

let item3 = [...items]
console.log(item3===items)
console.log(item3)

item3 = [...items, {id:4, name:"덤벨프레스", count: 7}]

console.log(item3)
