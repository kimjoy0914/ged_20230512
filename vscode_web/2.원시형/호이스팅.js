console.log(text)

text = 'hello'
var text
console.log(text)

// 호이스팅을 방어하기 위해 즉시실행 함수를 사용하였다.
// 같은 이름이 2개 이상이면 자동으로 배열로 전환됨
const btns = document.querySelectorAll("ul li")
// 즉시 실행 함수 적용 - 자주사용되지는 않으니까....
// 괄호가 2개 들어감
// 첫번째  - 함수의 선언부임
// 두번째 - 함수를 호출하는 괄호임
// 익명함수 형태인데 호출이 되는 이유는 두번째 괄호가 있어서 가능함
for(var  j =0;j<btns.length;j++){
    ((index) => {
        btns[j].addEventListener('click', () => {
            console.log(index) // 0 1 2
        }
    )})(j)
}//end of for