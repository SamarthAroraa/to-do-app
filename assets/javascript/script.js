var check = $(".check");

//this function gets parent of checkbox, then applies strike thorugh, then applies fade in, the redirects to deletion link for that id
check.click(function () {
  let id = "#" + $(this).attr("value");
  let delid = $(this).attr("value");
  console.log($(id));
  $(id).parent().css("text-decoration", "line-through");
  $(id)
    .parent()
    .fadeOut(1000, function () {
      let url = window.location.href + "strike-off/" + delid;
      window.location.replace(url);
    });
});
