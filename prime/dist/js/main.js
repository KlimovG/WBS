$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		event.preventDefault(); 
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});
});

// Click on logo
$(document).ready(function () {
	$('.logo').click(function(){
    location.href="https://tranedev.com/";
  });
	$('#repair').click(function(){
    location.href="https://tranedev.com/repairdesignproject/";
  });
	$('#zaochnik').click(function(){
    location.href="https://tranedev.com/zaochnik/";
  });
	$('#veloservice').click(function(){
    location.href="https://tranedev.com/veloservice/";
  });
	$('#webbattle').click(function(){
    location.href="https://web-battle.info/";
  });
});

// Smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
