/* jQuery */
$(document).ready(function() {

// Lancement Slick carousel
$('.carousel-servers').slick({
  dots: true,
  infinite: true,
  speed: 200,
  cssEase: 'linear'
});

$('.carousel-renderers').slick({
  dots: true,
  infinite: true,
  speed: 200,
  cssEase: 'linear'
});

// fermeture spash
$('#splash span').on('click',function(){
  $('#splash').addClass('fadeout');
});

// click/tap sur server Plex Media Server: RPI 3
  $('#listeservers ul li:first-child').on('click',function(){
    $('#listeservers').addClass('hidden'); // la classe hidden est celle de Bootstrap
    $('#servers #plex1niv1').removeClass('hidden').addClass('visible');
  });

  // click/tap sur songs
  $('#plex1niv1 #plex1songs').on('click',function(){
    $('#plex1niv1').addClass('hidden');
    $('#servers #plex1niv2').removeClass('hidden').addClass('visible');
  });

  // click/tap sur Ikeda
  $('#plex1niv2 #songikeda').on('click',function(){
    $(this).addClass('isplaying');
    $('#kodi').append('<img src="ikeda.jpg"/>Data: Microhelix — Ryoji Ikeda');
    $('#kodi button').html('pause');
  });
});
