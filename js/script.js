$(function () {
  $(".switch").click(function () {
    $("header").toggleClass("darkmode");
    $("#menu").toggleClass("darkmode");
    $(".switch").toggleClass("darkmode");
    $(".toggle").toggleClass("darkmode");
    $(".sun-moon").toggleClass("darkmode");
    $(".block").toggleClass("darkmode");
    $("#categories").toggleClass("darkmode");
    $("body").toggleClass("darkmode");
    $(".support-title").toggleClass("darkmode");
    $(".support-text").toggleClass("darkmode");
    $("#naar-contact").toggleClass("darkmode");
    $(".contact-card").toggleClass("darkmode");
    $(".name").toggleClass("darkmode");
    $(".function").toggleClass("darkmode");
    $(".email").toggleClass("darkmode");
    $("footer").toggleClass("darkmode");
    $("#KomMaarOp").toggleClass("darkmode");

  });
});


  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

// voor iedere video een pauzeer/play en rewind knop

$("video").each(function () {


  var player = videojs(this.id, {
      //  autoplay: 'muted',
      //  loop: true
  });

  $("button#rewind").click(function () {
      player.currentTime(-10);
  });

  let geklikt = false;

  $("button#toggle").click(function () {
      if (!geklikt) {
          player.pause();
          geklikt = true;
      } else {
          player.play();
          geklikt = false;
      }
  });


});

$( ".video-js" ).each(function() {
  var player = videojs(this);

  player.on('ended', function() {
    $("#modal").toggleClass("active");
  });
});


$( "#modal" ).click(function() {
  $(this).toggleClass("active");
});



function buttonClick(buttonId) {
  var buttonHandle = "#" + buttonId
  switch ($(buttonHandle).attr('class')) {
      case 'player-button':
          var player = videojs($(buttonHandle).siblings(".video-js")[0])
          videojs.log(player);
          videojs.log(player.paused)
          if (!player.paused()) {
              // video speelt
              player.pause();
              $(buttonHandle).html("<p>&#9658;</p>");
          } else {
              // video pauze
              player.play();
              $(buttonHandle).html("<p>&#9612;&#9612;</p>");
          };
          break;
      case 'rewind-button':
        var player = videojs($(buttonHandle).siblings(".video-js")[0])
        var time = player.currentTime();
        player.currentTime(time - 10);
        break;
      case 'forward-button':
        var player = videojs($(buttonHandle).siblings(".video-js")[0])
        var time = player.currentTime();
        player.currentTime(time + 10);
        break;
  }
}





