//alert('11')
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
//addEventListener는 이벤트 처리를 담당하는 함수임
//파라미터가 두개 필요함(첫째파라미터는 이벤트 핸들러 이름{click, keyup, keydown, mouseover, mousemove,....}, 
//두번째 파라미터는 이벤트 처리함수가 온다)
//document.addEventListener('mousemove',  function (event) {})익명함수 - 이벤트처리, 콜백함수
//클라우드 서비스, 카카오서비스, 구글 서비스 구현
document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y} `);
    //style속성은 사용자가 정의한 태그에 스타일을 추가할 때 사용함
    //트러블슈팅 -  html문서는 순서대로 실행됨. 그런데 공공칠.js에서 2번 라인에서 class vertical을 찾을 수 
    //없었다 그래서 에러가 발생했는데 메시지가 style로 출력됨(에러메시지가 정확하지 않다)- 더 조심해야 됨
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    //span태그 내부에 html코드를 삽입할 때 사용함
    tag.innerHTML = `<b>${x}px</b>, ${y}px`;//innerHTML{태그는 해석해서 출력이 안됨} <-> innerText{태그를 그대로 문자열로 취급해서 출력}



})