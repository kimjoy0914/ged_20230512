function hap(a1, a2){//1번 선언적 함수
    console.log(a1+a2)
}

hap(2,3)

const hap1 = function (a1, a2){ //일급함수
    const result = a1+a2
    return result
}

const result = hap1(1,2)
console.log(result)

//arrow function에서 파라미터가 1이면 괄호생략가능함
const hap2 = a1 => {
    const result = a1
    return result
}

const result2 = hap2(10)
console.log(result2)