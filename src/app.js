/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.myFunction2 = function myFunction2() {
  //write your code here

  let palo = ["♦", "♥", "♠", "♣"];
  let carta = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];

  let x = Math.floor(Math.random() * carta.length);
  //document.getElementById("element2").innerHTML = x;
  let y = Math.floor(Math.random() * palo.length);

  if (y === 1 || y === 0) {
    document.getElementById("element1").style.color = "red";
    document.getElementById("element3").style.color = "red";
  } else {
    document.getElementById("element1").style.color = "black";
    document.getElementById("element3").style.color = "black";
  }
  document.getElementById("element1").innerHTML = palo[y];
  document.getElementById("element2").innerHTML = carta[x];
  document.getElementById("element3").innerHTML = palo[y];
};

window.setInterval(myFunction2, 1000);

window.myFunction = function myFunction() {
  let palo = ["♦", "♥", "♠", "♣"];
  let carta = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];

  let x = Math.floor(Math.random() * carta.length);
  //document.getElementById("element2").innerHTML = x;
  let y = Math.floor(Math.random() * palo.length);

  if (y === 1 || y === 0) {
    document.getElementById("element1b").style.color = "red";
    document.getElementById("element3b").style.color = "red";
  } else {
    document.getElementById("element1b").style.color = "black";
    document.getElementById("element3b").style.color = "black";
  }
  document.getElementById("element1b").innerHTML = palo[y];
  document.getElementById("element2b").innerHTML = carta[x];
  document.getElementById("element3b").innerHTML = palo[y];
};
