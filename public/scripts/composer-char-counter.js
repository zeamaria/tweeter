$(document).ready(function() {
  $("#tweet-text").on("input", function(){
    let value = 140 - $(this).val().length
    $(".counter").text(value);
    $(".counter").css("color", "red");
    // if less than 140 go red when go < 0  less than. 
  })
});



