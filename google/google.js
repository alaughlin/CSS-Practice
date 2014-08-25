$(document).ready(function() {
  $(".apps").on("click", function (event) {
    $(".apps-div").toggleClass("show");
    $("#container").toggleClass("overlay");
    event.stopPropagation();
  });

  $("#container").on("click", function (event) {
    $(".apps-div").removeClass("show");
    $("#container").removeClass("overlay");
  });

  $(".search").on("click", function (event) {
    var query = $(".search-box").val();
    var url = "https://www.google.com/?gws_rd=ssl#q=" + query;
    console.log(url);
    if (query !== "") {
      window.location.href = "https://www.google.com/?gws_rd=ssl#q=" + query;
    }
  });

  $(".search-box").on("click", function (event) {
    $(".search-box-container").addClass("focus");
  });

  $(".search-box-container").on("click", function (event) {
    $(".search-box-container").addClass("focus");
    $(".search-box").focus();
  });

  $(".search-box").on("focusout", function (event) {
    console.log("fired");
    $(".search-box-container").removeClass("focus");
  });

  $(".lucky").on("click", function (event) {
    $(".search-box").val("You think you're lucky, punk?");
  });
});