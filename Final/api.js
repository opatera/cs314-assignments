"use strict";

let hide1 = 0;
let hide2 = 0;
let hide3 = 0;
let hide4 = 0;
let hide5 = 0;
// var hn = require('hackernews-api');
// console.log(hn.getItem(8863));

$.ajax({
  url: "https://ghibliapi.herokuapp.com/films",
  type: "GET",
  dataType: "json",
})
.done(function( json ) {
  $(event.target).attr('data-loaded', 'true');
  printBlocks(json);
} )

function printBlocks(response) {
  for(let i = 0; i < 5; i++){
    console.log(response[i].title);
    document.getElementById(i+1).innerHTML = response[i].title;
  }
}

document.getElementById("button1").onclick = function(){
    console.log("button");
    hide1 = hide1 + 1;
    $.ajax({
      url: "https://ghibliapi.herokuapp.com/films",
      type: "GET",
      dataType: "json",
      data: {
        title: "Castle in the Sky"
      }
    })
    .done(function( json ) {
      $(event.target).attr('data-loaded', 'true');
      if (hide1 % 2 == 0){
        $(".desc1").empty();
      }else{
        display(json, 1);
      }
    } )
  };

  document.getElementById("button2").onclick = function(){
      console.log("button");
      hide2 = hide2 + 1;
      $.ajax({
        url: "https://ghibliapi.herokuapp.com/films",
        type: "GET",
        dataType: "json",
        data: {
          title: "Grave of the Fireflies"
        }
      })
      .done(function( json ) {
        $(event.target).attr('data-loaded', 'true');
        if (hide2 % 2 == 0){
          $(".desc2").empty();
        }else{
          display(json, 2);
        }
      } )
    };
    document.getElementById("button3").onclick = function(){
        console.log("button");
        hide3 = hide3 + 1;
        $.ajax({
          url: "https://ghibliapi.herokuapp.com/films",
          type: "GET",
          dataType: "json",
          data: {
            title: "My Neighbor Totoro"
          }
        })
        .done(function( json ) {
          $(event.target).attr('data-loaded', 'true');
          if (hide3 % 2 == 0){
            $(".desc3").empty();
          }else{
            display(json, 3);
          }
        } )
      };

      document.getElementById("button4").onclick = function(){
          console.log("button");
          hide4 = hide4 + 1;
          $.ajax({
            url: "https://ghibliapi.herokuapp.com/films",
            type: "GET",
            dataType: "json",
            data: {
              title: "Kiki's Delivery Service"
            }
          })
          .done(function( json ) {
            $(event.target).attr('data-loaded', 'true');
            if (hide4 % 2 == 0){
              $(".desc4").empty();
            }else{
              display(json, 4);
            }
          } )
        };
        document.getElementById("button5").onclick = function(){
            console.log("button");
            hide5 = hide5 + 1;
            $.ajax({
              url: "https://ghibliapi.herokuapp.com/films",
              type: "GET",
              dataType: "json",
              data: {
                title: "Only Yesterday"
              }
            })
            .done(function( json ) {
              $(event.target).attr('data-loaded', 'true');
              if (hide5 % 2 == 0){
                $(".desc5").empty();
              }else{
                display(json, 5);
              }
            } )
          };






  function display(data, number){
    for(let post of data){
      $(".desc" + number).append("<p>" + post.description + "</p>");
    }
  }
