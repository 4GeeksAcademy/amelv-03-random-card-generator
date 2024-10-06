/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";
let btn = document.querySelector(".btn");
let topsuit = document.querySelector(".top");
let bottomsuit = document.querySelector(".bottom");
let rank = document.querySelector(".rank");
window.onload = function() {
  //write your code here
  btn.addEventListener("click", function() {
    generateCard();
  });
};

const generateCard = () => {
  let suit = ["♦", "♣", "♥", "♠"];
  let ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  if (randomSuit == "♥" || randomSuit == "♦") {
    topsuit.style.color = "red";
    bottomsuit.style.color = "red";
    rank.style.color = "red";
  } else {
    topsuit.style.color = "black";
    bottomsuit.style.color = "black";
    rank.style.color = "black";
  }
  topsuit.innerHTML = randomSuit;
  bottomsuit.innerHTML = randomSuit;
  rank.innerHTML = randomRank;
};
