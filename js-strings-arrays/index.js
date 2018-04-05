'use strict';

function setCharAt(str,index,chr) {
    if(index > str.length-1){
        return str;
      } else {
        return str.substr(0,index) + chr + str.substr(index+1);
    }
}

//Char Swap 1
function swap() {
  let text = prompt("Enter something");
   if(text.length > 1){
     //console.log("yes");
     var newString = text;
     let length = text.length - 1;
     newString = setCharAt(newString, 0, text.charAt(length));
     newString = setCharAt(newString, length, text.charAt(0));
     alert(newString);
  }
  else{
    swap();
  }
};

//Hi String 2
function hiString() {
  let text = prompt("Enter something");
  if(text.length > 0 && typeof text == "string"){
    if (text == "HI" || "Hi" || "hi"){
      console.log(text);
      return text;
    } else{
      return "Hi" + text;
    }
  }else{
    hiString();
  }
}

//Three Chars to Front 3
function three() {
  let text = prompt("Enter something");
   if(text.length > 2){
     let math = text.length;
     let temp = text.slice(math-3, math);
     let newString = temp + text;
     console.log(newString);
     return(newString);
   }
   else{
     three();
   }
}

//String to Sentence 4
function sentence(){
  let text = prompt("Enter string with commas");
  if(text.length > 0 && text.includes(",")){
    let arr = text.split(", ");
    alert(`Sentence one ${arr[0]}, Sentence two ${arr[1]}, Sentence three ${arr[2]}`);
    console.log(arr);
  }else{
    sentence();
  }
}

//Upper or Lower 5
function upLow(){
  let text = prompt("Enter a word");
  if(text.length < 3){
    text = text.toUpperCase();
    return(text);
  }else{
    let newString1 = text.slice(0, 3);
    let newString2 = text.slice(3);
    newString1 = newString1.toLowerCase();
    newString1 = newString1 + newString2;
    alert(newString1);
  }
}

//Integer Swap 6
function intSwap(){
  let text = prompt("Enter numbers seperated by commas");
  var arr = text.split(", ");
  if(text.length < 2 && text.includes(",")){
    intSwap();
  }
  else{
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length-1] = temp;
    alert(arr);
  }
}

//Longest String 7
function longest(){
  let longestString = 0;
  let text = prompt("Enter strings seperated by commas");
  let arr = text.split(", ");
  if(text.includes(",")){
    let arraylength = arr.length;
    for(var i = 0; i < arraylength; i++){
      if(arr[i].length > longestString){
        longestString = arr[i].length;
      }
    }
    alert("Longest String: " + longestString);
  }else{
    longest();
  }
}

//Largest Even Number 8
function largest(){
  let lar= 0;
  let text = prompt("Enter numbers seperated by commas");
  let arr = text.split(", ");
  if(text.includes(",")){
    let arraylength = arr.length;
    for(var i = 0; i < arraylength; i++){
      if(arr[i] % 2 == 0){
        if(arr[i] > lar){
          lar = arr[i];
        }
      }
    }
    alert("Largest Even Number: " + lar);
  }else{
    largest();
  }
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

//Curent Day Time 9
function time(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  let date = new Date();
  let theTime = formatAMPM(date);
  alert("Today is " + dayName + " \nit is " + theTime);
}

//Unlimited Fucntion
function unlimited(...args){
  alert(args);
}

swap();
hiString();
three();
sentence();
upLow();
intSwap();
longest();
largest();
time();
unlimited(1,2,3,4,5,6,7,8);
