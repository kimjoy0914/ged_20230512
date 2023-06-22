const dept = {
    deptno: 30,
    dname:'개발부',
    loc:'제주도'
}

const emp = {
    empno: 7566,
    ename: 'scott',
    sal: 2500
}

const imsi = {dept, emp}
console.log(imsi)

const merge = { ...dept, ...emp}
console.log(merge)

//객체에 전개연산자를 사용할 경우 같은 속성이면 덮어씌워짐
const emp2 = { ...emp, empno: 7499, ename:'tiger', sal: 3000}
console.log(emp)
console.log(emp2)