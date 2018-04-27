'use strict';
let hide1 = 0;
let hide2 = 0;
let hide3 = 0;
let hide4 = 0;
let hide5 = 0;
let hide6 = 0;
let hide7 = 0;
let hide8 = 0;
let hide9 = 0;
let hide10 = 0;
//let icon = '<i class="far fa-times-circle"></i>';

$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  dataType: "json",
})
.done(function( json ) {
  $(event.target).attr('data-loaded', 'true');
  printBlocks(json);
} )

function printBlocks(response) {
  for(let i = 0; i < response.length; i++){
    //console.log("name is: " + response[i].name);
    print(i+1);
    document.getElementById(i+1).innerHTML = response[i].name + ", " +
     response[i].email + ", " + response[i].company.name;
  }
}


//A lot of code for todo's
document.getElementById("button1").onclick = function(){
    console.log("button");
    hide1 = hide1 + 1;
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      type: "GET",
      dataType: "json",
      data: {
        userId: 1
      }
    })
    .done(function( json ) {
      $(event.target).attr('data-loaded', 'true');
      if (hide1 % 2 == 0){
        $(".todo1").empty();
      }else{
        displaytodo(json, 1);
      }
    } )
  };
document.getElementById("button2").onclick = function(){
  console.log("button");
  hide2 = hide2 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 2
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide2 % 2 == 0){
      $(".todo2").empty();
    }else{
      displaytodo(json, 2);
    }
  } )
};
document.getElementById("button3").onclick = function(){
  console.log("button");
  hide3 = hide3 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 3
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide3 % 2 == 0){
      $(".todo3").empty();
    }else{
      displaytodo(json, 3);
    }
  } )
};
document.getElementById("button4").onclick = function(){
  console.log("button");
  hide4 = hide4 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 4
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide4 % 2 == 0){
      $(".todo4").empty();
    }else{
      displaytodo(json, 4);
    }
  } )
};
document.getElementById("button5").onclick = function(){
  console.log("button");
  hide5 = hide5 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 5
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide5 % 2 == 0){
      $(".todo5").empty();
    }else{
      displaytodo(json, 5);
    }
  } )
};
document.getElementById("button6").onclick = function(){
  console.log("button");
  hide6 = hide6 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 6
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide6 % 2 == 0){
      $(".todo6").empty();
    }else{
      displaytodo(json, 6);
    }
  } )
};
document.getElementById("button7").onclick = function(){
  console.log("button");
  hide7 = hide7 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 7
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide7 % 2 == 0){
      $(".todo7").empty();
    }else{
      displaytodo(json, 7);
    }
  } )
};
document.getElementById("button8").onclick = function(){
  console.log("button");
  hide8 = hide8 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 8
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide8 % 2 == 0){
      $(".todo8").empty();
    }else{
      displaytodo(json, 8);
    }
  } )
};
document.getElementById("button9").onclick = function(){
  console.log("button");
  hide9 = hide9 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 9
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide9 % 2 == 0){
      $(".todo9").empty();
    }else{
      displaytodo(json, 9);
    }
  } )
};
document.getElementById("button10").onclick = function(){
  console.log("button");
  hide10 = hide10 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    data: {
      userId: 10
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide10 % 2 == 0){
      $(".todo10").empty();
    }else{
      displaytodo(json, 10);
    }
  } )
};

function displaytodo(data, number){
  for(let post of data){
    let icon = '<i class="far fa-check-square"></i>';
    //console.log(post.completed);
    if(post.completed){
      icon = '<i class="fas fa-check-square"></i>';
      //console.log("if");
    } else{
      icon = '<i class="far fa-times-circle"></i>';
      //console.log("else");
    }
    $(".todo" + number).append("<p>" + post.title + icon + "</p>");
  }
}

//code for albums
function displayAlbum(data, number){
  for(let post of data){
    console.log(post.title);
    $(".todo" + number).append("<p>" + post.title + "</p>");
  }
}

document.getElementById("album1").onclick = function(){
  hide1 = hide1 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 1
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide1 % 2 == 0){
      $(".todo1").empty();
    }else{
      displayAlbum(json, 1);
    }
  } )
}

document.getElementById("album2").onclick = function(){
  hide2 = hide2 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 2
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide2 % 2 == 0){
      $(".todo2").empty();
    }else{
      displayAlbum(json, 2);
    }
  } )
}

document.getElementById("album3").onclick = function(){
  hide3 = hide3 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 3
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide3 % 2 == 0){
      $(".todo3").empty();
    }else{
      displayAlbum(json, 3);
    }
  } )
}

document.getElementById("album4").onclick = function(){
  hide4 = hide4 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 4
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide4 % 2 == 0){
      $(".todo4").empty();
    }else{
      displayAlbum(json, 4);
    }
  } )
}

document.getElementById("album5").onclick = function(){
  hide5 = hide5 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 5
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide5 % 2 == 0){
      $(".todo5").empty();
    }else{
      displayAlbum(json, 5);
    }
  } )
}

document.getElementById("album6").onclick = function(){
  hide6 = hide6 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 6
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide6 % 2 == 0){
      $(".todo6").empty();
    }else{
      displayAlbum(json, 6);
    }
  } )
}

document.getElementById("album7").onclick = function(){
  hide7 = hide7 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 7
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide7 % 2 == 0){
      $(".todo7").empty();
    }else{
      displayAlbum(json, 7);
    }
  } )
}

document.getElementById("album8").onclick = function(){
  hide8 = hide8 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 8
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide8 % 2 == 0){
      $(".todo8").empty();
    }else{
      displayAlbum(json, 8);
    }
  } )
}

document.getElementById("album9").onclick = function(){
  hide9 = hide9 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 9
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide9 % 2 == 0){
      $(".todo9").empty();
    }else{
      displayAlbum(json, 9);
    }
  } )
}

document.getElementById("album10").onclick = function(){
  hide10 = hide10 + 1;
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "GET",
    dataType: "json",
    data: {
      userId: 10
    }
  })
  .done(function( json ) {
    $(event.target).attr('data-loaded', 'true');
    if (hide10 % 2 == 0){
      $(".todo10").empty();
    }else{
      displayAlbum(json, 10);
    }
  } )
}
