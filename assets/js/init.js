 $(window).on('load', () => { 
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
  })

$(()=>{
  $('.parallax').parallax();
  $('.sidenav').sidenav({
    "onOpenStart": () => $(".sidenav-overlay").css("z-index", 0),
  });
  $('.disabled').on('click', (e) => e.preventDefault())
}) 
