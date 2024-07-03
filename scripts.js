// A (document) .ready() block.
$ (document) .ready(function(){

    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar1").style.padding = "30px 10px";
        document.getElementById("logo1").style.fontSize = "25px";
        } else {
        document.getElementById("navbar1").style.padding = "80px 10px";
        document.getElementById("logo1").style.fontSize = "35px";
        }
    } 











// Animate on scroll activate
AOS.init({
    duration: 500 // values from 0-3000 with 50ms 
});


});
