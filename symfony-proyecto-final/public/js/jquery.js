$(document).ready(function(){
    $(".platillo").mouseenter(function(){
      $(this).css("background-color", "#E8E9EB");
    });
    $(".platillo").mouseleave(function(){
      $(this).css("background-color", "");
    });
    $(".platillo2").mouseenter(function(){
      $(this).css("background-color", "#87FF98");
    });
    $(".platillo2").mouseleave(function(){
      $(this).css("background-color", "");
    });
  });