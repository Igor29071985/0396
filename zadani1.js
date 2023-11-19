// ==UserScript==
// @name         zadani1.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Petryakov Igor
// @match        https://yahoo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zapmeta.com
// @grant        none
// ==/UserScript==

document.getElementsByName("p")[0].value = "электроинструменты"
document.getElementById("ybar-search").click();

let links = document.links;
for (let i = 0; i < links.length; i++) {
  if (links[i].href.includes("220-volt.ru")) {
    console.log("Нашел строку " + links[i])
  }
}
