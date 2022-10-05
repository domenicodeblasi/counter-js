"use strict";
const body = document.body;

//let's create the heading
const heading = document.createElement("h2");
body.prepend(heading);
heading.className = "heading";
heading.innerHTML = ".counter.";

// let's create the counter
const counterContainer = document.createElement("div");
heading.after(counterContainer);
counterContainer.className = "counter-container";

const slot1 = document.createElement("div");
counterContainer.append(slot1);
slot1.className = "slot slot1";
slot1.innerHTML = "+";

const slot2 = document.createElement("div");
counterContainer.append(slot2);
slot2.className = "slot slot2";
slot2.innerHTML = "0";

const slot3 = document.createElement("div");
counterContainer.append(slot3);
slot3.className = "slot slot3";
slot3.innerHTML = "0";

const slot4 = document.createElement("div");
counterContainer.append(slot4);
slot4.className = "slot slot4";
slot4.innerHTML = "0";

const slot5 = document.createElement("div");
counterContainer.append(slot5);
slot5.className = "slot slot5";
slot5.innerHTML = "0";

const slot6 = document.createElement("div");
counterContainer.append(slot6);
slot6.className = "slot slot6";
slot6.innerHTML = "0";

// let's create the +/-/reset buttons
const buttonsContainer = document.createElement("div");
counterContainer.after(buttonsContainer);
buttonsContainer.className = "buttons-container";

const minusBtn = document.createElement("button");
buttonsContainer.prepend(minusBtn);
minusBtn.className = "btn minus-btn";
minusBtn.innerHTML = "-";

const resetBtn = document.createElement("button");
buttonsContainer.append(resetBtn);
resetBtn.className = "btn reset-btn";
resetBtn.innerHTML = ".reset.";

const plusBtn = document.createElement("button");
buttonsContainer.append(plusBtn);
plusBtn.className = "btn plus-btn";
plusBtn.innerHTML = "+";

// +100/-100 buttons
const minus100Btn = document.createElement("button");
buttonsContainer.append(minus100Btn);
minus100Btn.className = "btn";
minus100Btn.innerHTML = "-100";

const plus100Btn = document.createElement("button");
buttonsContainer.append(plus100Btn);
plus100Btn.className = "btn";
plus100Btn.innerHTML = "+100"; 

// let's make the counter works
let result = 0; //number that will be displayed
minusBtn.addEventListener("click", decreaseResult);
resetBtn.addEventListener("click", resetResult);
plusBtn.addEventListener("click", increaseResult);
minus100Btn.addEventListener("click", decrease100Result);
plus100Btn.addEventListener("click", increase100Result);

function decreaseResult() {
    result--;
    displayResult();
}
function resetResult() {
    result = 0;
    displayResult();
}
function increaseResult() {
    result++;
    displayResult();
}
function decrease100Result() {
    result -= 100;
    displayResult();
}
function increase100Result() {
    result += 100;
    displayResult();
}
function displayResult() {
    if (result >= 0) {
        slot1.innerHTML = "+";
        let tenK = result / 10000;
        slot2.innerHTML = Math.floor(tenK);
        let k = (result % 10000) / 1000;
        slot3.innerHTML = Math.floor(k);
        let hundred = ((result % 10000) % 1000) / 100;
        slot4.innerHTML = Math.floor(hundred);
        let ten = (((result % 10000) % 1000) % 100) / 10;
        slot5.innerHTML = Math.floor(ten);
        let unit = (((result % 10000) % 1000) % 100) % 10;
        slot6.innerHTML = Math.floor(unit);
    } else {
        slot1.innerHTML = "-";
        let tenK = result / 10000;
        slot2.innerHTML = Math.ceil(tenK) * (-1);
        let k = (result % 10000) / 1000;
        slot3.innerHTML = Math.ceil(k) * (-1);
        let hundred = ((result % 10000) % 1000) / 100;
        slot4.innerHTML = Math.ceil(hundred) * (-1);
        let ten = (((result % 10000) % 1000) % 100) / 10;
        slot5.innerHTML = Math.ceil(ten) * (-1);
        let unit = (((result % 10000) % 1000) % 100) % 10;
        slot6.innerHTML = Math.ceil(unit) * (-1);
    }

}