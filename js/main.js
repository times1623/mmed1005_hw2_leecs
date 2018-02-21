// JavaScript Document
(() => {
  console.log('svg script file loaded');

  let svgs = document.querySelectorAll('svg');

  function logThisSVG() {
    console.log(this.id);
  }

  svgs.forEach(svg => svg.addEventListener('click', logThisSVG));



// MOVE ICON
var moveIcon = document.getElementById('moveIcon');  // 1

function makeIconBig() {  // 3

  console.log("hello");
}

moveIcon.addEventListener('click', makeIconBig)  // 2




})();
