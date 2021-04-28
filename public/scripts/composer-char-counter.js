$(document).ready(function() {
  $("#tweet-text").on("input", function(){
    let value = 140 - $(this).val().length
    $(".counter").text(value);
    if (value < 0) {
      $(".counter").css("color", "red");
    }
    else {
      $(".counter").css("color", "black");
    }
  })
});



