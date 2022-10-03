"use strict";
const body = document.body;

//let's create the heading
const heading = document.createElement("h2");
body.prepend(heading);
heading.className = "heading";
heading.innerHTML = ".counter.";