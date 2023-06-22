const fruits = ['🍓','🍅','🥝']
const fruits2 = [...fruits, '🍉']
console.log(fruits)
console.log(fruits2)

fruits.forEach((item, index)=>{
    console.log(`${index}번째 아이템은  ${item}`)
})

const fruits3 = [...fruits, ...fruits2]

console.log(fruits3)

//리액트에서는 데이터셋을 비교해서 데이터셋이 변경된 태그만 새로 렌더링해준다.
//먼저 출력된 화면에서 쥐고 있는 데이터와 어떤 이벤트 로 인해서 재요청이 일어났을 때
//먼저 출력된 데이터와 나중에 들어온 데이터를 비교하는 알고리즘{ 리액트-키값이 필요함}을 갖고 있어서
//서로 다른값이 존재하면 그 태그만 다시 그린다
fruits.forEach((row, i)=>{
    console.log(`${i}번째 아이템은  ${row}`)
})