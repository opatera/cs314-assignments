'use strict';

function age() {
  let ConfirmResponse = confirm("Are you over the age of 21?");
  if(ConfirmResponse){
    alert("Welcome1");
  }
  else{
    alert("Please exit page, you are not of age1");
  }
  alert(ConfirmResponse ? "welcome2" : "Please exit page, you are not of age2")
};

function number(){
  let age = prompt("What's your age?");
  if(age == null){
    alert("Please enter an age");
    number();
  }
  else if(isNaN(age)){
    alert("Please enter a numeric value with no letters");
    number();
  }
  else{
    alert("Thank you for entering your age");
  }
};

function object(){
  let obj = {
  a: 1,
  b: 2,
  };
  let copy = obj;

  obj.a = 5;
  copy.c = 3;
  console.log(copy.c);
};

function copy(obj, num){ //10
  let name = Object.assign(obj);
  if(num != null){
    console.log(num);
    name.c = num;
  }
  if(num == null){
    console.log("num null");
    delete name.c
  }

  return(name);
};

function Person(first, last, eyes) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eyes;
    this.eye2 = ref(this.eye2, this.eyeColor);
}

function ref(one, two){
  one = two;
  return one;
}

age();
number();
object();
const me = new Person("Owen", "Patera", "green"); //11
console.log("original object: ", me);

let copy1 = copy(me, 5);
console.log("Copy of original plus add key: ", copy1);

let copy2 = copy(me);
console.log("Copy of original:", copy2);
