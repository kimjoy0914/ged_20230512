//노드{tag와 같다} 생성하기
//자바스크립트에서 변수 선언할때는 const{final상수}나 let{재정의가능한 변수 선언시 사용할것}을 사용함(ES6:2015)
//var는 사용하지 않기(이유는 호이스팅 이슈때문에...)
const ajax = new XMLHttpRequest();
//해커뉴스서버에서 제공하는 최신 뉴스 목록을 받아올 수 있는 URL
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
//#1param-요청방식(GET or POST)
//#2param-url
ajax.open('GET',NEWS_URL,false)
ajax.send()//send함수를 호출해야 해커뉴스 서버에 요청을 해줌

console.log(ajax.response)//브라우저 개발자 센터에 콘솔에 출력해줌
//document는 브라우저가 제공하는 내장객체이다.
//내장객체는 별도로 생성하는 코드 없이 즉시 사용가능함
//내장객체는 모든 브라우저가 제공하고 있다
//createElement는 document가 제공하는 함수이다. -  함수도 객체이다(중급키워드)
const newsList = JSON.parse(ajax.response);//mdn parse
const ul = document.createElement("ul");
for (let index = 0; index < newsList.length; index++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    //newsList[index].title은 문자열이다. - TextNode라고 함
    //태그이름은 없다. 노드이름은 없다
    a.href='#';//링크 클릭시 이동할 페이지가 없어서....
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

document.getElementById("root").appendChild(ul);

/* 
관전포인트
DOM API 를 사용해서 태그를 만들 수 있다.
for문에 사용이 가능해서 반복되는 코드는 줄었다.
그런데 직관적이지는 않았다 - 별로다
*/