// Modal with content description open
var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function(){
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "block";
    }, false);
}


// close modal
$(document).ready(function() {
	$(".close").click(function(){
        $(".modal").hide();
    });
});


// Show associate content - Technical Skills
function showDiv(num) {
    document.getElementById('div1').style.display='none';
    document.getElementById('div2').style.display='none';
    document.getElementById('div3').style.display='none';
    document.getElementById('div4').style.display='none';
    document.getElementById('div'+num).style.display='block'
}


// Arrow scroll top
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



