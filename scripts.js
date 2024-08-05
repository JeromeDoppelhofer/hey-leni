// A (document) .ready() block.

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>


$(function(){
    $('#navbar1').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#navbar1').data('size') == 'big')
        {
            $('#navbar1').data('size','small');
            $('#navbar1').stop().animate({
                height:'40px'
            },600);
        }
    }
    else
    {
        if($('#navbar1').data('size') == 'small')
        {
            $('#navbar1').data('size','big');
            $('#navbar1').stop().animate({
                height:'100px'
            },600);
        }  
    }
});
















