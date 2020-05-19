var check = $("#check");

//this function gets parent of checkbox, then applies strike thorugh, then applies fade in, the redirects to deletion link for that id
check.click(function () {
  console.log($("#check").parents());
  $("#check").parents().eq(2).css("text-decoration", "line-through");
  jQuery("#check")
    .parents()
    .eq(3)
    .fadeOut(1000, function () {
      let url = window.location.href + "strike-off/" + check.attr("value");
      window.location.replace(url);
    });
});
