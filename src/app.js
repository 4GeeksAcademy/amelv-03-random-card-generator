/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  btn.addEventListener("click", function() {
    generateCard();
  });
};


const generateCard = () => {
  let suit = ["♦", "♣", "♥", "♠"];
  let rank = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomRank = rank[Math.floor(Math.random() * rank.length)];

  if (randomSuit === "♦","♥"){
    btn.style.color = "red";
  }
};
