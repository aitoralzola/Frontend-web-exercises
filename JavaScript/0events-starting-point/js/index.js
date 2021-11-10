

/*1 An event should be executed when all the DOM is loaded
and another event when the window of the browser is resized*/

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

//RESIZED

function reportWindowSize() {
  console.log("Window Heigth: "+window.innerHeight);
  console.log("Window Width: "+window.innerWidth);
}
window.onresize = reportWindowSize;

/*2 An event should be executed when the input gets the focus (with tabulator or mouse click for example),
another event should be executed when the focus is lost */

  var textChange = document.getElementsById("myTextInput");

  textChange.addEventListener("focus", function(event){
  event.target.style.background = "pink";
}, true);


/* An event should be executed when the input content is changed (the focus must be lost to see the result)*/

$(document).ready(

  function() {
      $('#myTextInput').keypress(
  
      function() {
          alert("hi");
      });
  })


/* onclick: This is the example one, use it for testing the function */
function myOnClickFunction(){
  var botonText = document.getElementById('writeMe');  
  console.log("Button was clicked") 
  botonText.innerHTML = "Button has been clicked";

}