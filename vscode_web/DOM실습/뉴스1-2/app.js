const container = document.getElementById('root');
//부모가 되는 뉴스 제목에 대해서 div태그로 감싸기(디자이너-내부외부여백, 글씨크기, 색상...)
const content = document.createElement('div');//div 생성하기
//노드{tag와 같다} 생성하기
//자바스크립트에서 변수 선언할때는 const{final상수}나 let{재정의가능한 변수 선언시 사용할것}을 사용함(ES6:2015)
//var는 사용하지 않기(이유는 호이스팅 이슈때문에...)
const ajax = new XMLHttpRequest();//비동기 통신 객체 이다
//왜 비동기 통신 객체를 사용해야 하나? - 자바스크립트는 순서대로 처리한다.-동기로 처리한다
//중간에 시간이 오래 걸리는 작업이 있을 경우에 지연이 발생한다- 이건 별로다
//그렇다면 데이터를 받아오는데 시간이 걸리는 동안 화면이 보이지 않는다.
//그래서 비동기 처리가 필요하다 -> 다운받는 동안에 다른일을 볼 수 있어야 한다.
//어떻게 가능한가? 0 -> 1 -> 2 -> 3 -> 4
//상태값이 바뀔 때 마다 콜백(callback-시스템이 알아서 호출함) 함수를 호출해줌
//해커뉴스서버에서 제공하는 최신 뉴스 목록을 받아올 수 있는 URL
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
//#1param-요청방식(GET or POST)
//#2param-url
ajax.open('GET',NEWS_URL,false)
ajax.send()//send함수를 호출해야 해커뉴스 서버에 요청을 해줌

//console.log(ajax.response)//브라우저 개발자 센터에 콘솔에 출력해줌
//document는 브라우저가 제공하는 내장객체이다.
//내장객체는 별도로 생성하는 코드 없이 즉시 사용가능함
//내장객체는 모든 브라우저가 제공하고 있다
//createElement는 document가 제공하는 함수이다. -  함수도 객체이다(중급키워드)
const newsList = JSON.parse(ajax.response);//mdn parse
const ul = document.createElement("ul");

window.addEventListener("hashchange", function (){
    console.log('해시가 변경될때 마다....')
    console.log(location.hash)
    //변경되는 해시값을 가져오기
    const id = location.hash.substring(1);//0을 주면 #까지 잘라오니까....1로 하자
    ajax.open('GET', CONTENT_URL.replace('@id', id),false) //true이면 동기적으로 false이면 비동기 처리해줌
    ajax.send()
    console.log(ajax.response)
    //ajax.response는 어디서 보내는 응답인가요? - 해커뉴스 서버에서 요청 URL에 대응하는 응답내용이다.
    //response 는 XMLHttpRequest객체가 선언하고 있는 속성임
    const newsContent = JSON.parse(ajax.response);//api 활용능력을 키우자
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;//newsContent.title 이렇게 쓸 수 있다. 나는
    content.appendChild(title)
});

for (let index = 0; index < newsList.length; index++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    //newsList[index].title은 문자열이다. - TextNode라고 함
    //태그이름은 없다. 노드이름은 없다
    a.href=`#${newsList[index].id}`;//링크 클릭시 이동할 페이지가 없어서....
    a.innerHTML = `${newsList[index].title}(${newsList[index].comments_count})`
    li.appendChild(a);
    ul.appendChild(li);
    //console.log(newsList[index].title)    
}//end of for
/*
DOM API를 사용해서 페이지 처리를 할 경우 덜 직관적이다
document.getElementById('root2').innerHTML = `<ul>
    <li>${newsList[0].title}</li>
    <li>${newsList[1].title}</li>
    <li>${newsList[2].title}</li>
</ul>`
*/

container.appendChild(ul);
container.appendChild(content);//content는 div태그를 받는 변수ㄴ

/* 
관전포인트
DOM API 를 사용해서 태그를 만들 수 있다.
for문에 사용이 가능해서 반복되는 코드는 줄었다.
그런데 직관적이지는 않았다 - 별로다
*/