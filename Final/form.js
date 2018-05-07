"use strict";

document.getElementById('button').onclick = function(){
  var name = document.getElementById('input1').value;
  var email = document.getElementById('input2').value;
  var message = document.getElementById('input3').value;
  //console.log(name + email + message);

  var n = email.includes(".com");

  if(name && message && n){
    console.log("success");
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    $(".entry").append("You entered: " + name + ", " + email + ", " + message);
  }else{
    alert("One or more of the entries was invlaid. Try again.");
  }
}
