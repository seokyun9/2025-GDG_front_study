# Week 3
    #NodeJS #React #Component # JSX

## 1. 더 편하고 간결하게

    한 코드를 여러명이 작업할 때 line-by-line 으로 작업한다면..? so 비효율 i hate this

    코드의 규모가 커질 수록... 비용과 시간이 많이 든다! -> 코드 맥락의 이해가 필요해~

### 지난주 복습 겸. . .
<img src = "image-1.png" alt = "counter app">

* 브라우저의 동작 방식
    1. HTML 파일 열기
    2. HTML 문서를 한 줄씩 순차적으로 읽기 (파싱)
    3. **DOM 트리 만들기**
    4. 화면에 표시하기   

    ### DOM이 뭘까요?! 
    : HTML 태그 하나하나를 JS로 컨트롤 할 수 있도록 만든 **계층적** 객체 체계
    cf) 트리구조

## 2. React를 왜?
    HTML 없이 JS만으로 모든 화면을 동작하고 싶어요

    태그 만들어서 데이터를 넣는 방식... => 코드가 너무 많아짐!!
   
    JS 파일 안에 HTML 태그 쓰면 안돼요...???
    -> 안됨
    =>그래서 나온 확장팩 JSX!
        이 친구를 쓰면 JS 코드 안에서 HTML과 비슷한 태그를 써서 UI를 작성할 수 있게 해준다고 해요 babel 같은 트랜스파일러(like 컴파일러)를 통해 일반 JS 코드로 변환된다고 합니다!    

cf) 컴파일 vs 트랜스파일 vs 인터프리터

| 컴파일 | 트랜스파일 |인터프리터 |
| :--- | :--- | :--- |
| 한 언어로 작성된 소스코드를 다른 언어로 변환 | 컴파일의 Subset 한 언어로 작성된 소스코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환| 고급 언어 -> 저급 언어를 한 줄씩!!! |
| 꼭 고수준의 언어를 기계어로 변환해야 컴파일인 것은 아님!! **한 언어로 작성된 코드를 다른 언어로 옮기는 일 자체** | 언어 to 언어를 같은 레벨에서 하는 느낌... |
| Ex) C -> 기계어 | TypeScript -> JavaScript  | python JavaScript | 

<br>

이러한 확장팩으로   
-> SPA의 시대가...! ~~spa브랜드~~    
    
    Single Page Application (SPA)
    : 새로고침 없이 페이지를 하나의 앱처럼!

<br>

## 3. React를 사용해보아요
    리액트는 라이브러리. Next.js는 프레임워크.

### npm 사용법!
: npm is 패키지 매니저

__자주 쓰는 명령어__
- npm -version : 버전확인
- npm init : node.js 프로젝트 시작 시 package.json (프로젝트의 정보와 프로젝트가 의존하는 패키지(모듈)에 대한 정보가 저장된 파일) 생성!
- npm i 패키지명 (install) : 패키지 설치
    - 옵션   
        -g : global 설치 -> 다른 프로젝트에서도 사용 가능
- npm uninstall 패키지명 : 삭제!
- npm update 패키지명 : 최신 버전으로 업데이트(에러 주의...)

### React 컴포넌트
React는 컴포넌트(고유한 로직과 모양을 가진 UI_사용자인터페이스의 일부)로 구성된다.
컴포넌트는 마크업을 반환하는 JS 함수로 크게 함수형 / 클래스형이 있다.

- 함수형 컴포넌트   
    js 함수 작성하여 컴포넌트를 간단하게 정의
    ``` javascript
    function Dog() {
    return (
    <div>
    <h2>흰둥이</h2>
    <p>으르르 컹컹</p>
     </div>
     );
     }
     export default Dog;

     ```
이런식으로 Dog를 선언했으므로 다른 컴포넌트 안에 중첩할 수 있다.

```javascript
function App() {

 return (

 <div className="App">
    <Dog />
 </div>


 );

}
```
`<Dog />` 가 대문자로 시작함에 주의**    
<br>
__**React 컴포넌트는 항상 대문자로 시작하고 HTML 태그는 소문자로 시작해야한다!**__

`export default` 키워드 : 파일의 기본 컴포넌트를 지정, 해당 모듈에 하나의 개체만 있음을 나타냄..

### JSX로 마크업 작성
앞서 정리한 JSX 가 바로 위와 같은 문법이다.   
컴포넌트는 여러개의 JSX 태그를 반환할 수 없다.   
`<div>...</div>` 또는 `<>...</>` 와 같은 태그로 감싸주어야한다!

`<img className="avatar" />` 별도의 CSS 파일에 따로 내용을 작성한다. 

```CSS
.avatar {
  border-radius: 50%;
}
```

React는 CSS 파일을 추가하는 방법을 규정하지 않는다고 한다...<br> 
간단하게 HTML에 `<link>` 태그를 추가함으로써 CSS 파일을 추가할 수 있다.

### 스타일 추가
React는 `className`으로 CSS 클래스를 지정한다. HTML의 `class`와 동일하게 동작한다.

더 자세한 내용은 추후에...   
cf) [React 공식문서](<https://ko.react.dev/learn>)