$(document).ready(function(){
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 110){
      $(".logo").addClass("reducirLogo");
      $(".header").addClass("menuFixed");
    }
    else{
      $(".logo").removeClass("reducirLogo");
      $(".header").removeClass("menuFixed");
    }
  });
  var muted = document.getElementById('muted');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var audio = document.getElementById('audio');
  var menuIcon = document.getElementById('menuIcon');
  muted.addEventListener('click', function(){
    if(audio.muted == true){
      audio.muted = false;
    }else{
      audio.muted = true;
    }
  });
  play.addEventListener('click', function(){
    audio.play();
    $('#play').attr("class","muted corneta2");
    $('#pause').attr("class","muted corneta");
  });
  pause.addEventListener('click', function(){
    audio.pause();
    $('#play').attr("class","muted corneta");
    $('#pause').attr("class","muted corneta2");
  });
  menuIcon.addEventListener('click', function(){
    $(".menu-main-ul").toggleClass("mostrar");
  });
});