$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#Cat").prepend("<li>Meow!</li>");
    $("ul#Dog").prepend("<li>Bark!</li>")
  });

  $("button#Bark").click(function() {
    $("ul").prepend("<li>Bark!</li>");
  });

});
