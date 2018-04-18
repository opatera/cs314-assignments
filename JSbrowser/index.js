"use strict";

let counter = 0;

window.onload = function(){
  //Select number to scroll
  document.getElementById("button1").onclick = function(){
    document.getElementById("one").scrollIntoView();
  };
  document.getElementById("button2").onclick = function(){
    document.getElementById("two").scrollIntoView();
  };
  document.getElementById("button3").onclick = function(){
    document.getElementById("three").scrollIntoView();
  };
  document.getElementById("button4").onclick = function(){
    document.getElementById("four").scrollIntoView();
  };
  document.getElementById("button5").onclick = function(){
    document.getElementById("five").scrollIntoView();
  };

  //Pick a background color
  document.getElementById('blue').onclick = function(){
    document.getElementById("one").style.backgroundColor = "blue";
  };

  document.getElementById('green').onclick = function(){
    document.getElementById("one").style.backgroundColor = "green";
  };

  //Pink and orange
  document.getElementById('pink').onclick = function(){
    counter++;
    if(counter%2 == 1){
      document.getElementById("two").style.backgroundColor = "pink";
      document.getElementById('pink').innerHTML = "Click for orange!";
      console.log("wow");
    }else{
      document.getElementById("two").style.backgroundColor = "orange";
      document.getElementById('pink').innerHTML = "Click for pink!";;
    };
  };

    //Input text to add to the list below
    document.getElementById('buttonSubmit').onclick = function(){
     console.log("submit");
     var newVal = document.getElementById('inputNew').value;
     var list = document.getElementById("listExpandable");
     var entry = document.createElement('LI');
     entry.appendChild(document.createTextNode(newVal));
     list.appendChild(entry);
    };

    //4. If an item is clicked, remove it from the list.
    var listDelete = document.getElementsByClassName("delete");

    var deleteFunction = function() {
      var list = document.getElementById("listDelete");
      list.removeChild(this);
    }

    Array.from(listDelete).forEach(function(element) {
       element.addEventListener('click', deleteFunction);
     });

  // 5. If an item is clicked, select it (highlight it) and de-select everything else.
  var listSelect = document.getElementsByClassName("listSelect");

    function deselectAll() {
      Array.from(listSelect).forEach(function(element) {
         element.style.background = "lightGrey";
       });
    }

    var selectFunc = function() {
      deselectAll();
      this.style.backgroundColor = "yellow";
    }

    Array.from(listSelect).forEach(function(element) {
       element.addEventListener('click', selectFunc);
     });


};
