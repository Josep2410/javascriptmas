/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

// target all elements with class "lights"
//const elementsArr = Array.from(document.getElementsByClassName("lights"))

// Flash red and blue lights together
/* setInterval(function(){
  elementsArr.map(item => item.classList.toggle("lights-on"))
  
}, 800) */



//target elements with class "red"
const redElements = Array.from(document.getElementsByClassName("red"))
const blueElements = Array.from(document.getElementsByClassName("blue"))

redElements.map(element => element.classList.toggle("lights-on"))


setInterval(function(){
  redElements.map(element => element.classList.toggle("lights-on"))
  blueElements.map(element => element.classList.toggle("lights-on"))
}, 800)


