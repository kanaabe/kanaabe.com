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
<script>
	function displaybg()
	{
		document.body.style.backgroundImage="url('Images/bg.JPG')";
	}
</script>

<body>

<div id="slider" class="fullscreen_slider">
    <div class="fullscreen_slider_child">
        <div class="fullscreen_slider_image">
            <img src="Images/installation/1.jpg"  />
        </div>
        <div class="fullscreen_slider_caption">Visual Stress Ball, Spring 2012
        Support: Arduino microcontroller, Processing language, and pressure sensor.
A User may squeeze the foam ball to relieve stress both physically and visually.<br>
The projection begins with a blazing red and as the User applies pressure, he/
she will start to see the red slowly deplete into a calming blue.</div>
    </div>
    <div class="fullscreen_slider_child">
        <div class="fullscreen_slider_image">
            <img src="Images/installation/2.jpg" />
        </div>
        <div class="fullscreen_slider_caption">Twitter Scambler: Fall 2012; Support: Arduino microcontroller, Processing language, Twitter API, Java, TVOut library, and hacked RCA cord. A comparison of news headlines on Twitter. Pulled tweets from MSNBC and FOX News, parsed the messages, scrambled the messages, and displayed them on a lo-fi television set in real time. </div>
    </div>
    <div class="fullscreen_slider_child">
        <div class="fullscreen_slider_image">
            <img src="Images/installation/3.jpg" />
        </div>
        <div class="fullscreen_slider_caption">Twitter Scrambler</div>
    </div>
</div>


</body>
</html>

