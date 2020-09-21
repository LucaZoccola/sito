// TOGGLE WORKS

$('#work-name1').click(function() {
        $('#cv-cont5').slideToggle("slow");
});

$('#work-name1b').click(function() {
        $('#cv-cont5b').slideToggle("slow");
});

$('#work-name3').click(function() {
        $('#cv-cont12').slideToggle("slow");
});

$('#work-name3b').click(function() {
        $('#cv-cont12b').slideToggle("slow");
});

$('#work-name7').click(function() {
        $('#cv-cont6').slideToggle("slow");
});

$('#work-name7b').click(function() {
        $('#cv-cont6b').slideToggle("slow");
});


$('#work-name2').click(function() {
        $('#cv-cont7').slideToggle("slow");
});


$('#work-name9').click(function() {
        $('#cv-cont9').slideToggle("slow");
});

$('#work-name9b').click(function() {
        $('#cv-cont9b').slideToggle("slow");
});


$('#work-name8').click(function() {
        $('#cv-cont8').slideToggle("slow");
});

$('#work-name8b').click(function() {
        $('#cv-cont8b').slideToggle("slow");
});


$('#work-name4').click(function() {
        $('#cv-cont11').slideToggle("slow");
});


$('#work-name4b').click(function() {
        $('#cv-cont11b').slideToggle("slow");
});


$('#work-name5').click(function() {
        $('#cv-cont14').slideToggle("slow");
});


$('#work-name5b').click(function() {
        $('#cv-cont14b').slideToggle("slow");
});
// TOGGLE CV ABOUT

$('#cv-name1').click(function() {
        $('#cv-cont1').slideToggle("slow");
});


$('#cv-name2').click(function() {
        $('#cv-cont2').slideToggle("slow");
});


$('#cv-name3').click(function() {
        $('#cv-cont3').slideToggle("slow");
});


$('#cv-name4').click(function() {
        $('#cv-cont4').slideToggle("slow");
});


// GO TO TOP WORK
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()  {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
}

// responsiveSlides
  $(function() {
    $(".rslides").responsiveSlides();
  });
