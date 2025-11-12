# Week 4
    #React #State #Props

`npx create-react-app week4`를 통해 파일을 받아오고
`cd week4` `npm start` 를 통해 실행!

## 1. React의 탄생
    React : 2013년생
    13년에 오픈소스 릴리즈, 사실 10년부터 태동이...

### REACT
facebook 시절로 돌아가보아요...
어떤 문제를 마주쳐서 React가 탄생했는지!

- 서버 비용의 문제
![alt text](/week4/public/image.png)
-> 좋아요 갯수만 받을까? => 일부 데이터만 바꾸면 되니까 __데이터 운송 비용 down__
-> 전환되는 HTML 태그 부품을 따로 관리할까?    
-> 여러 기능을 한 페이지에 넣어서 '효율'적인 관리를 위해 태그를 부품화 할까?    
-> 개발하기 복잡하니까 여러 부품을 따로 관리해볼까?    

----> 각 부품을 서로 독립적인 원자로, 모이면 하나의 전체로!
=> __**REACT!**__

### Virtual DOM

빈번한 DOM 조작은 브라우저 리소스가 많이 들어간다. 
    ![DOM 생성 과정](/week4/public/image-1.png)
so heavy한 과정...

-> 가벼운 가상의 DOM을 생성하자!
    => **Virtual DOM**
    : 메모리 상에 '가벼운 가상의 DOM'을 만들어 미리 조작하고, 그 결과만 모아서 일괄적으로 Real DOM에 반영하는 방식!

---

    cf. virtual DOM의 작동방식
        react는 항상 2개의 가상 DOM을 갖는다.
        1. 렌더링 이전 화면 구조
        2. 렌더링 이후 보이게 될 화면 구조
        state가 바뀔 때마다 가상돔을 JS 객체로 만들어 메모리에 저장한다.   
        1과 2를 비교해 차이가 발생한 부분만 렌더링한다.


## 2. Counter App을 만들어봅시다.

`week4/src/App.js`
```javascript
 import './App.css';
 function App() {
 return (
 <div className="App">
 <h1>Counter App</h1>
 </div>
 );
 }
 export default App;

```

`week4/src/Counter.js`
```javascript
function Counter() {
 let count = 0;
 function increment() {
 count++;
 }
 }
 return (
 <div>
 <h2>{count}</h2>
 <button onClick={increment}>+1</button>
 </div>
 )
 export default Counter;
```

이렇게하면. . . 안된다!

    WHY?? 
    화면이 업데이트되지 않음 (콘솔 값을 보면 count 값 상승)
    React는 DOM을 직접 다루지 않고 V-DOM을 통해 간접적으로 다루기 때문에 count 값이 바뀐 것을 알 수 없다!
    
> => 컴포넌트의 상태가 바뀌었음을 알려줘야함

    HOW??
    HOOK을 통해 컴포넌트의 상태 전달

```javascript
 import { useState } from 'react';
 function Counter() {
 const [count, setCount] = useState(0);
 function increment() {
 setCount(count+1);
 }
 }
 return (
 <div>
 <h2>{count}</h2>
 <button onClick={increment}>+1</button>
 </div>
 )
 export default Counter
```
이렇게 바꿔보면 잘 동작함을 알 수 있다.

### 컴포넌트화
전체를 감싸는 Counter 컴포넌트와 그 안의 countNumber 컴포넌트와 Button 컴포넌트 3개로 나누어보자

`src/CountNumber.js`
```javascript
function CountNumber(properties) {
 return (
 <h2>{properties.count}</h2>
 )
 }
 export default CountNumber
 ```

`App.js`에 컴포넌트 삽입 후 CountNumber 태그의 count property(속성)에 state의 count 값을 전달하면 `CountNum.js`는 props 중 count 값을 return에 사용함

**상위 컴포넌트의 state 값을 하위 컴포넌트에서 사용**
-> 상위 컴포넌트의 state 가 바뀌면 하위 컴포넌트가 새롭게 렌더링됨

## 3. 컴포넌트의 생애

### 컴포넌트의 3단계 생애
    (?) 생애주기 (lifecycle) : 탄생부터 죽음까지의 패턴, cycle

- 컴포넌트의 생애는 3단계
    - Mount
    - Update
    - UnMount
    컴포넌트는 새로운 props나 state를 수신하면 업데이트된다!

### React 발전사
> #class #function

과거에는 class로 컴포넌트를 관리    
'구조적' 이고 '패턴'화 할 수 있을 것 같지만 코드 길이가 길다! ㅠㅠ   

- 클래스형 컴포넌트의 장점
    1. 정형화된 개발 패턴
        일관된 구조로 협업에 적합 (백엔드도 class 문법 사용)
    2. 컴포넌트 생애 전반 디테일한 조절
        라이프 사이클을 통제 및 관리하는 클래스 내부 함수 또는 메소드 존재    

- 클래스형 컴포넌트의 단점
    1. 협업을 위한 조건
        class 문법, js 특유의 this 문법, 내부 메소드, 개발 패턴, 객체지향적 사고에 대한 이해가 없다면 협업 불가!
    2. 컴포넌트 생애 전반 디테일한 조절
        해당하는 메소드를 배우기 어려움! 디테일한 조절을 위해서는 높은 '이해도' 요구

### 과거 함수형 컴포넌트의 단점
React 16.8 전까지 **state** 사용이 불가하다는 치명적 단점이 존재...<br>
props만 사용하는 **반쪽짜리** 컴포넌트였다. . .

=> React 16.8 버전부터 Hook을 사용할 수 있게 되었다!

### Hook의 탄생
클래스형 컴포넌트 자체의 어려운 문법과 이해도...   
함수형은 Hook (내장함수) 덕분에 더 직관적이고 편리하다.

    cf.모든 Hook은 `use`로 시작한다