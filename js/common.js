/*--Invokes-----------------------------------------------------------------------------*/
lineWidth();
hideContent();
replaceWith();
marginCategory();
/*--Ready functions-----------------------------------------------------------------------------*/
$(document).ready(function(){
  masonryGrid();
  $(window).resize(function(){
    lineWidth();
    marginCategory();
  });
  $(".goto-indepth").click(gotoIndepth);
  $("#indepth").click(showIndepth);
  $("#moreabout").click(function(){
    $('article.about').slideUp(1400,'easeInOutQuart',function(){
      $(".more").slideDown(1400,'easeInOutQuart',function(){
        $(".pictureme").animate({transform: 'scale(1,1)'},900,'easeOutElastic');
      });
    });
  });
});
/*--Scrolling to Section Function-----------------------------------------------------------------------------*/
function gotoIndepth() {
	$('html, body').animate({
    scrollTop: ($('#experience').offset().top - ($(window).height() / 2))
	}, 1000, 'easeInOutQuint', function(){
    $(".indepth-sec").slideDown(800,'easeOutQuart',function(){
      $('.indepthcolumn .xpbar').each(function(i){
        setTimeout(function(){
          $('.indepthcolumn .xpbar').eq(i).addClass('shown');
        }, 200 * (i+1));
      });
    });
  });
}
/*--Global functions-----------------------------------------------------------------------------*/
function lineWidth(){
  $('.line').width($('.firstline').width() - $('.plus').outerWidth(true));
}
function hideContent(){
  $(".more").hide();
  $(".indepth-sec").hide();
}
function replaceWith(){
  $(".imglink, .categoryimg").html(function(i, oldHTML) {
    return oldHTML.replace(/_/g, '<br/>');
  });
}
function marginCategory(){
  $(".category").each(function(){
    var margintopcat = -1 * ($(this).height() / 2);
    var marginleftcat = -1 * ($(this).width() / 2);
    $(this).css('marginTop', margintopcat);
    $(this).css('marginLeft', marginleftcat);
  });
}
function masonryGrid(){
  $('.portfoliogrid').masonry({
    itemSelector: '.griditem',
    columnWidth: 180
  });
}
function showIndepth(){
  $(".indepth-sec").slideToggle(800,'easeOutQuart',function(){
    $('.indepthcolumn .xpbar').each(function(i){
      setTimeout(function(){
        $('.indepthcolumn .xpbar').eq(i).addClass('shown');
      }, 200 * (i+1));
    });
  });
}

/*--Scrolling functions-----------------------------------------------------------------------------*/
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.overview').offset().top - ($(window).height() / 1.2)) {
    $('.overview .xpbar').each(function(i){
      setTimeout(function(){
        $('.overview .xpbar').eq(i).addClass('shown');
      }, 500 * (i+1));
    });
  }
});
