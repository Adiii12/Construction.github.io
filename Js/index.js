// serve offer tabs
function openServeTab(evt, techName) {
  var i, serveContent, serveLinks;
  // Get all elements with class="serveContent" and hide them
  serveContent = document.getElementsByClassName("serveContent");
  for (i = 0; i < serveContent.length; i++) {
    serveContent[i].style.display = "none";
  }
  // Get all elements with class="serveLinks" and remove the class "active"
  serveLinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < serveLinks.length; i++) {
    serveLinks[i].className = serveLinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(techName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//   about us section
function aboutUs(evt, aboutSection) {
  // Declare all variables
  var i, workContent, aboutLink;

  // Get all elements with class="workContent" and hide them
  workContent = document.getElementsByClassName("workContent");
  for (i = 0; i < workContent.length; i++) {
    workContent[i].style.display = "none";
  }

  // Get all elements with class="workLink" and remove the class "active"
  aboutLink = document.getElementsByClassName("aboutLink");
  for (i = 0; i < aboutLink.length; i++) {
    aboutLink[i].className = aboutLink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(aboutSection).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("OpenDefault").click();

//  jquery header owl carousel code
const $owlCarousel = $(".header-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplayTimeout: 7000,
  // autoplaySpeed: 2000,
  autoplay: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
});
$owlCarousel.on("changed.owl.carousel", (e) => {
  $(".owl-slide-animated").removeClass("is-transitioned");
  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
});

// // Headers text animation
// const  slideTitle = document.querySelector('.owl-slide-title');
// // const  slideTitle = document.querySelector('.owl-slide-subtitle');
// // const  slideTitle = document.querySelector('.owl-slide-cta');
// // const  slideTitle = document.querySelector('.owl-slide-img');

// const tl = new TimelineMax();
// tl.fromTo(slideTitle , 1 , {x: "-20%"},{x : "0%" , ease: Power2.easeInOut});

//   jquery owl carousel code
$(".team-carousel").owlCarousel({
  loop: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  nav: true,
  autoplayTimeout: 3000,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
});

// //Get the button
var mybutton = document.getElementById("moveTo-Top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
    document.getElementById("navbar").style.padding = "10px 3px 10px 3px";
  } else {
    mybutton.style.display = "none";
    document.getElementById("navbar").style.padding = "20px 10px 20px 10px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// ==============Modal gallery section

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
