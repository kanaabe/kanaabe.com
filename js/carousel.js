(function($){
  $(document).ready(function (){
      $('#slider').fullscreen_slider({
        easing: 'easeOutQuad',
        handle_width: 30, //Prev next show width
        speed: 'slow'
      });
  });
  $(window).resize(function() {
      $('#slider').fullscreen_slider('resize');
  });
})(window.jQuery);