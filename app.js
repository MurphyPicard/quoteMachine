$(document).ready(function() {

    $(".submit1").on("click", function(){

      $.ajax({

        

        type: 'GET',
        url: "http://api.icndb.com/jokes/random",
        dataType: 'json',
        success: function(result){
              $(".thequote").html(result.value.joke);
        }//success

      });//ajax

    });//button

});//doc

// $.ajax({
//             url: uri,
//             beforeSend: function (request) {
//                 request.setRequestHeader("Authorization", "Negotiate");
//             },
//             async: true,
//             success: function (data) {
//                 alert(JSON.stringify(data));
//             },
//             error: function (xhr, textStatus, errorMessage) {
//                 alert(errorMessage);
//             }
//         });

// $( document ).ready(function() {
//    console.log( "ready!" );
// });

// $.ajax({
//   type: 'POST',
//   url: url,
//   data: postedData,
//   dataType: 'json',
//   success: callback
// });

// $("button").click(function(){
//     $.ajax({url: "demo_test.txt", success: function(result){
//         $("#div1").html(result);
//     }});
// });
