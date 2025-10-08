# Week 2
    #JavaScript #HTML #DOM

## Migration
      JS 파일로 이사하기...
      how? -> by <script> 태그의 src 속성!
### id
: __id 속성__   

속성? == `<tag attribute> 내용 \</tag>` 이 요소에서 attribute 부분이 속성!
한 id는 고유한 id로서 하나의 태그만을 의미

### Counter App 
``` javascript
<body>
    <h1> Counter App </h1>

    <p id="counting-num">0</p>
    <button id="decrease">-1</button>
    <button id="reset">RESET</button>
    <button id="increase">+1</button>

    <script src = "./app.js"></script> /js 연결!
</body>
```
```javascript
const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
let count = 0;
number.textContent = count;

function increaseCount () {
    count++; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}
incButton.addEventListener("click",increaseCount);
...
```
.....

## 브라우저의 동작방식 
> script 태그를 body 태그의 맨 아래에 두는 이유는 무엇일까요

* 브라우저의 동작 방식
    1. HTML 파일 열기
    2. HTML 문서를 한 줄씩 순차적으로 읽기 (파싱)
    3. DOM 트리 만들기
    4. 화면에 표시하기
       
* ?! 만약 HTML 파싱 중에 script를 발견한다면?
    1. 파싱 중단
    2. script 파일 (js)을 다운받는다.
    3. script 파일을 실행한다.
    4. HTML을 다시 이어 파싱한다.

=> js 파일을 중간에 받으면 HTML 해석이 늦어져 화면이 늦게 뜨거나 순서가 꼬여 에러가 날 수 있음!   
    ex) 어떤 태그에 접근했는데 아직 정의되지 않았을 때

## 브라우저는 왜 JS를 쓸 수 있을까?
> 원론적 토크로 돌아가봅시다...
    
    태초의 브라우저 (웹통신 + 문서) 리더기
    +
    JS 실행 엔진

### 크롬의 등장.. 두둥탁
+ 개발 표준 (ECMA)를 따르기에 개발 편의성 증가 (빠르다는 건 많은 일을 도전할 수 있다는 것!)
+ 오픈소스인 V8엔진

빠르고 편하고 도전의 장인데 안할 이유가?

+ 파급효과
    1. 웹 앱
        페이지, 문서 수준이 아닌 웹 앱으로 발전
    2. Node.js
        브라우저 바깥에서도 JS 실행할 수 있는 '런타임 환경'   
        cf)npm 라이브러리 :남들이 만든 코드를 받아서 node환경에서 런~  

---
## JavaScript 문법

### # 변수 선언
- let : 업데이트 가능한 값. 재할당 O 재선언 X
- const : 상수, 바뀌지 않는 값
- var : 재할당 O, 재선언 O   

    > 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼! (스코프 단위 발생)

#### 변수의 생성 과정

1. 선언단계
2. 초기화단계
3. 할당 단계 

> var : 1+2 →3 = 선언 및 초기화(undefined 할당) 후 할당   
⇒ 할당 전 호출 시 undefined (에러발생 x)

> let : 1→2→3 = 호이스팅되며 선언 후 코드에 도달 했을 때 초기화   
⇒ 코드에 닿기 전 호출 시 reference error 발생

> const : 1+2+3 = let var는 값을 바꿀 수 있기에.. 미리 선언하고 나중에 할당해도 되지만 const는 아님 **선언과 동시에 할당하기!**

#### 스코프

**var** : 함수 스코프   
블록 내부에서 선언 후 블록 밖에서 사용 가능   
함수 내에서 선언 시, 함수 밖에서는 사용 **불가**   
    -> 함수에만 갇힌다고 생각하자!

**let, const** : 블록 스코프   
블록 외부에서 사용 불가

### # 함수

- 함수 선언문 : 어디서든 호출 가능
    => 호이스팅 때문!
    ```javascript
    function sayHi(){
    console.log('Hello');} // 함수 선언문
    ```
- 함수 표현식 : 코드에 도달하면 생성 -> 그 이후부터 사용가능
    ``` javascript
    let sayHi = function(){
    console.log('Hello');} // 함수 표현식
   ```
- 화살표 함수
    - return문 단일 {} -> ()로 전환 가능
    - return문 한줄일 때 () 생략 가능
    - 인수가 하나라면 () 생략 가능 (인수 없다면 생략 불가!)
    - return 전에 코드가 있다면 {} 사용해야함
    ``` javascript
    let add = function(num1,num2){
    return num1 + num2;
    }// 화살표 함수로 변환
    let add (num1,num2) => (num1 + num2;) 
    // return 한줄이므로 ()도 생략 가능
    ```

## Next...
    #NodeJS #React #Component #JSX