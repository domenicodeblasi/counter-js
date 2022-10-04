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

const slot2 = document.createElement("div");
counterContainer.append(slot2);
slot2.className = "slot slot2";

const slot3 = document.createElement("div");
counterContainer.append(slot3);
slot3.className = "slot slot3";

const slot4 = document.createElement("div");
counterContainer.append(slot4);
slot4.className = "slot slot4";

const slot5 = document.createElement("div");
counterContainer.append(slot5);
slot5.className = "slot slot5";

const slot6 = document.createElement("div");
counterContainer.append(slot6);
slot6.className = "slot slot6";