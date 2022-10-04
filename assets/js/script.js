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

// let's 