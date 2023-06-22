// 전개연산자 
// 얕은복사 와 깊은 복사
//ES6 - 변수 선언시 const or let을 사용하기
//더 이상 var는 안된다 - 왜냐면 호이스팅 이슈 : 지변인데 마치 전변처럼 처리가 되는 것
// typescript(5.0발표)
// html -> nodejs(라이언달-2009년 V8 엔진:JVM, 브라우저 없이도 테스트가능함)
// -> javascript -> react or vue -> typescript
// [] -> 배열, {} -> 객체

const a =  { x:1, y:2 }
const b =  { x:1, y:2 }

console.log(a)
console.log(b)
console.log('first')
console.log(a==b) //값을 비교하면 true가 출력, 주소번지를 비교하면 false출력
console.log(a===b) //a와b가 같고 타입도 같은거야?

const c = a
console.log(a==c) //값을 비교하면 true가 출력, 주소번지를 비교하면 false출력
console.log(a===c) //a와b가 같고 타입도 같은거야?

//결론 : a와 c는 얕은 복사
//깊은복사:값을 가지고 그대로 새로운 객체가 만들어짐 - 주소번지가 다르다