$(window).scroll(function(){

  if(wScroll > $('.experience').offset().top - ($(window).height() / 1.2)) {

    $('.overview .xpbar').each(function(i){

      setTimeout(function(){
        $('.overview .xpbar').eq(i).addClass('shown');
      }, 200 * (i+1));
    });

  }
});



$(document).ready(function(){
    $(".indepth").hide();
    $("button").click(function(){
        $(".indepth").slideToggle(800,function(){
            $('.indepthcolumn .xpbar').each(function(i){

              setTimeout(function(){
                $('.indepthcolumn .xpbar').eq(i).addClass('shown');
            }, 200 * (i+1));
            });
        });
    });
});
