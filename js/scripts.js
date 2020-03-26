$(document).ready(function() {
  $("form#formGroup1").submit(function(event) {
    event.preventDefault();
      var selector = $("#selector").val();
      if(selector === "turtle") {
        $('#snakes').hide();
        $('#insects').hide();
        $('#turtles').show();
      } else if(selector === "snake") {
        $('#turtles').hide();
        $('#insects').hide();
        $('#snakes').show();
      } else if(selector === "insect") {
        $('#turtles').hide();
        $('#snakes').hide();
        $('#insects').show();
      }  
  });
});

// $(document).ready(function () {
//   $("form#calculator").submit(function(event) {
//     event.preventDefault();
//       var number1 = parseInt($("#add1").val());
//       var number2 = parseInt($("#add2").val());
//       var operation = $("#operation").val();
//       if(operation === "add"){
//         result = add(number1, number2);
//       } else if(operation === "subtract"){
//         result = subtract(number1, number2)
//       } else if(operation === "multiply"){
//         result = multiply(number1, number2)
//       } else if(operation === "divide"){
//         result = divide(number1, number2)
//       }
//       var result;
//       $("#output").text(result);
//   });
// });