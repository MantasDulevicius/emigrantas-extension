import React from 'react'
import {render} from 'react-dom'
import App from './App'


window.addEventListener('load', () => {

  if(document.readyState === 'complete'){
    addActive();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        addActive();
      }
  }}


  const injectDOM = document.createElement('div');
  injectDOM.className = 'extension';
  document.querySelector('#avc').appendChild(injectDOM);
  render(<App />, injectDOM);

  let episodes = document.querySelectorAll('#items1 > .item');
  episodes.forEach(epp => epp.addEventListener('click', (e) => {
    if(e.target.className === 'mcp'){
      document.querySelector('#items1 > .item.active').classList.remove('active');
      e.target.parentElement.classList.add('active');
      e.target.parentElement.querySelector('#rec').click();
    }
  }));


  //Inject font

  let styleNode           = document.createElement ("style");
  styleNode.type          = "text/css";
  styleNode.textContent   = "@font-face { font-family: icomoon; src: url('"
                          + chrome.extension.getURL ("assets/fonts/icomoon.ttf")
                          + "'); }"
                          ;
  document.head.appendChild (styleNode);
  
  //TITLE INJECT**************

  episodes.forEach(epp => epp.addEventListener('click', (e) => {

    setTimeout(() => {
      let date = document.querySelector('#block1 > h3').textContent;
      let currentEppName
      currentEppName = document.querySelector('.item.active > .mcp').textContent;
      currentEppName = document.querySelector('.item.active > .mcp').textContent;
     
      const injectTitle = document.createElement('div');
      injectTitle.className = 'title2';
      document.querySelector('#avc').appendChild(injectTitle);
      document.querySelector('.title2').innerHTML = `<span>${date}</span><span>${currentEppName}</span>`;
      document.querySelector('.title2').classList.add('active'); 
      resetDelay();
      startDelay();
    },200);

  }));

});

let delay
function startDelay() {
  delay = setTimeout(() => {
    document.querySelector('.title2').classList.remove('active'); 
  },2000);
} 

function resetDelay() {
  clearTimeout(delay);
}


function addActiveAction() {
    let currentEppName = document.querySelector('#tvEpg1 > span').textContent.slice(0,5);
    if(currentEppName.slice(1,2) === ":"){currentEppName = '0' + currentEppName}
    let allElements = document.querySelectorAll('#items1 > .item');
    let currentEppByName;
    allElements.forEach(eppElement => {if(eppElement.childElementCount > 0){if(eppElement.querySelector('.mcp').textContent.includes(currentEppName)){currentEppByName = eppElement}}});
    currentEppByName.classList.add('active');
}

function addActive() {
  setTimeout(() => {
    addActiveAction();
  },3000);
}


