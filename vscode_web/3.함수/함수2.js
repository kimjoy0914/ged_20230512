// c와 c()는 다르다
//arrow function - ECMAScript6
const getNumber = () => {
    return 123
}

const getNumber2 = function(){
    return 5
}

console.log(typeof getNumber)//function 
console.log(typeof getNumber())//number

console.log(getNumber)//주소번지
console.log(getNumber())//함수 호출