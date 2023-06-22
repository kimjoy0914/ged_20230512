const container = document.getElementById('root');
const content = document.createElement('div');
const ajax = new XMLHttpRequest();

const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

const getNews = (url) => {
    ajax.open('GET',url,false)
    ajax.send();
    return JSON.parse(ajax.response);
 }//end of getNews

const newsList =getNews(NEWS_URL);// 쥐고 있다 뉴스목록(JSON)
const ul = document.createElement("ul");

window.addEventListener("hashchange", function (){
    console.log('해시가 변경될때 마다....')
    console.log(location.hash)
    const id = location.hash.substring(1);//0을 주면 #까지 잘라오니까....1로 하자
    const newsContent = getNews(CONTENT_URL.replace('@id', id));//api 활용능력을 키우자
    console.log(newsContent)
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;//newsContent.title 이렇게 쓸 수 있다. 나는
    content.appendChild(title)
});

for (let i = 0; i < newsList.length; i++) {
    //DOM API를  문자열로 바꾸어 처리해보기 - 누가 더 직관적인가요?
    const div = document.createElement('div');

    div.innerHTML = `
        <li>
            <a href="#${newsList[i].id}">
                ${newsList[i].title}(${newsList[i].comments_count})
            </a>
        </li>
    `;
    ul.appendChild(div.firstElementChild);
}//end of fors
container.appendChild(ul);
container.appendChild(content);//content는 div태그를 받는 변수ㄴ

/* 
관전포인트
뭔가 좀 심플해졌다 - 느낌
실제로 네트워크를 통해서 데이터를 가져오고 그것을 자바스크립트 객체로 변환하는 코드가 없어짐
getNews에게 몽땅 다 위임해 버림
두 가지 URL이 필요하므로  필요한 url만 넘겨주는 코드로 대체 해서
사용하는 코드 쪽에서는 단순해짐

잇점
: 코드를 계속 늘려도 양은 늘어나지만 복잡도가 늘어나는 일은 없을 것이다.
*/