const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const incTButton = document.getElementById("increase10");
const decButton = document.getElementById("decrease");
const decTButton = document.getElementById("decrease10");
const resetButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increaseCount () {
    count++; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}
function increaseTenCount () {
    count+=10; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}
function decreaseTenCount () {
    count-=10; // count = count - 10
    number.textContent = count; // 숫자 변화 반영
}
function decreaseCount () {
    count--; // count = count - 1
    number.textContent = count; // 숫자 변화 반영
}
function resetCount () {
    count = 0; // count = 0 으로 초기화
    number.textContent = count; // 숫자 변화 반영
}

incButton.addEventListener("click",increaseCount);
decButton.addEventListener("click",decreaseCount);
resetButton.addEventListener("click",resetCount);
decTButton.addEventListener("click",decreaseTenCount);
incTButton.addEventListener("click",increaseTenCount);