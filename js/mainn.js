/*jslint browser: true*/
/*global $, jQuery*/
$(function () {
    'use strict';
    var winH    = $(window).height(),
        upperH  = $('.upper_bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    
    $('.slider , .carousel-item').height(winH - (upperH + navH));


// shuffle work

  $('.featured-work ul li').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');

      if($(this).data('class') === 'all') 
      {
          $('.shuffle-images .col-md').css('opacity' , 1);
      }
      else
      {
        $('.shuffle-images .col-md').css('opacity' , 0.3);
        $($(this).data('class')).parent().css('opacity' , 1);

      }
   });



});