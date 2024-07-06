"use strict";
const inp_label = document.querySelector(".guess");
const btn_label = document.querySelector(".check");
const msg_label = document.querySelector(".message");
const number = document.querySelector(".number");
const score_label = document.querySelector(".score");
const again_btn = document.querySelector(".again");
const body_label = document.querySelector("body");
const high_score_label = document.querySelector(".highscore");

let total_score = 20;
let max_high_score = 0;
let hidden_num = Math.random() * 20 + 1;
hidden_num = Math.trunc(hidden_num);

console.log(hidden_num);

btn_label.addEventListener("click", function (event) {
  let input_value = Number(inp_label.value);
  if (input_value === hidden_num) {
    msg_label.textContent = "🥳 Correct!";
    body_label.style.background = "green";
    number.textContent = hidden_num;

    if (total_score > max_high_score) {
      max_high_score = total_score;
      high_score_label.textContent = max_high_score;
    }
  } else if (input_value > hidden_num) {
    msg_label.textContent = "📈 Too high!";
    total_score--;
    score_label.textContent = total_score;
  } else if (input_value < hidden_num) {
    msg_label.textContent = "📉 Too low!";
    total_score--;
    score_label.textContent = total_score;
  }
  if (total_score === 0) {
    msg_label.textContent = "You Lose the game 😔";
    score_label.textContent = total_score;
  }
});

again_btn.addEventListener("click", function (event) {
  hidden_num = Math.random() * 20 + 1;
  hidden_num = Math.trunc(hidden_num);
  number.value = hidden_num;
  total_score = 20;
  score_label.textContent = total_score;
  msg_label.textContent = "Start guessing...";
  body_label.style.backgroundColor = "#222";
  number.textContent = "?";
  inp_label.value = 0;
});
