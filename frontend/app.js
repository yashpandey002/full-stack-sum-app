"use strict";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

async function onFromSubmit(event) {
    event.preventDefault();

    const num1Value = Number(num1.value);
    const num2Value = Number(num2.value);

    const sum = await getSumFromServer(num1Value, num2Value);

    result.innerText = sum;
}

async function getSumFromServer(a, b) {
    const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
    const { sum } = await response.json();

    return sum;
}
