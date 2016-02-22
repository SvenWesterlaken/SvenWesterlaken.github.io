$(document).ready(function(){
    $('.portfoliogrid').masonry({
      itemSelector: '.griditem',
      columnWidth: 180
    });
    $(".imglink").html(function(i, oldHTML) {
      return oldHTML.replace(/_/g, '<br/>');
    });

    $('.line').width($('.firstline').width() - $('.plus').outerWidth(true));

    $(".indepth").hide();
    $(".more").hide();
    $("#indepth").click(function(){
        $(".indepth").slideToggle(800,'easeOutQuart',function(){
            $('.indepthcolumn .xpbar').each(function(i){

              setTimeout(function(){
                $('.indepthcolumn .xpbar').eq(i).addClass('shown');
            }, 200 * (i+1));
            });
        });
    });
    $("#moreabout").click(function(){
        $('article.about').slideUp(1400,'easeInOutQuart',function(){
          $(".more").slideDown(1400,'easeInOutQuart',function(){
            $(".pictureme").animate({transform: 'scale(1,1)'},900,'easeOutElastic');
          });
        });
    });
});

var expanded = false;
$(".aboutcontainer").hide();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.overview').offset().top - ($(window).height() / 1.2)) {

    $('.overview .xpbar').each(function(i){

      setTimeout(function(){
        $('.overview .xpbar').eq(i).addClass('shown');
    }, 500 * (i+1));
    });

  }

  if(!expanded && wScroll >= $('section.about').offset().top - ($(window).height() - $('footer').outerHeight(true))) {

   expanded = true;
   $(".aboutcontainer").slideDown(1400,'easeInOutQuart');

  }

});
