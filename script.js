document.addEventListener('DOMContentLoaded', function() {
   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });
  
    
    slideIndex = 1;
    showSlides(slideIndex);
    autoChangeSlides(); 
  });
  

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function toggleMenu() {
    var menu = document.getElementById('navbar').getElementsByTagName('ul')[0];
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  }

  // oikea slide
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    showNumberText(); 
  }
  
  // numerot hetken
  function showNumberText() {
    const numberTextElements = document.querySelectorAll('.numbertext');
    numberTextElements.forEach(element => {
      element.style.opacity = '1';
    });
    setTimeout(() => {
      numberTextElements.forEach(element => {
        element.style.opacity = '0';
      });
    }, 1000);
  }
  
  // automaattinen vaihto
  function autoChangeSlides() {
    setTimeout(function() {
      plusSlides(1);
      autoChangeSlides();
    }, 5000); 
  }
  
