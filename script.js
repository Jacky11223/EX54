$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
    e.preventDefault();
  });
});

var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  


  function myFunction() {
    var x = document.getElementByID("Text1").value;
  }
  if (x=="student"){
    alert(location.href="index.html");
    return false;
  }
  else if (x=="parent"){
    alert(location.href="COURSE.html");
  }
  document.getElementById("demo").innerHTML = greeting;
  }  

 
 
