<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>installation</title>
<link rel="stylesheet" type="text/css" href="css/normalize.css" media="screen, projection" />
<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
<link rel="stylesheet" type="text/css" media="screen" href="css/fullscreen_slider.css" />
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery.touchswipe.js"></script>
<script type="text/javascript" src="js/fullscreen_slider.js"></script>

<script type="text/javascript">
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
</script>

</head>

<body>
<p>Coming soon</p>
</body>
</html>

