/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  let who = [
    "Putin",
    "My iguana",
    "The government",
    "My teacher",
    "Jennifer Lawrence"
  ];
  let action = ["ate", "ran over", "sold", "gave away", "burned", "wet"];
  let what = [
    "my gin tonic",
    "my car",
    "my money",
    "my alarm clock",
    "my tamagotchi"
  ];
  let when = [
    "while I was sleeping",
    "last Christmas",
    "when I was not watching",
    "on my birthday",
    "during breakfast"
  ];

  let finalExcuse =
    random_item(who) +
    " " +
    random_item(action) +
    " " +
    random_item(what) +
    " " +
    random_item(when);

  console.log(finalExcuse);

  //Parsing into HTML
  document.getElementById("excuse").innerHTML = finalExcuse;

  function refresh() {
    window.location.reload("Refresh");
  }
};
