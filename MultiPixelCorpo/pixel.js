
document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
 
    navbarCollapse.addEventListener('click', function () {
        if (window.innerWidth < 768) {
            var navbarToggle = document.querySelector('.navbar-toggler');
            if (navbarToggle.getAttribute('aria-expanded') === 'true') {
                navbarToggle.click();
            }
        }
    });
 
  
    $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
        var navbarToggle = document.querySelector('.navbar-toggler');
        navbarToggle.setAttribute('aria-expanded', 'false');
    });
 });


mybutton = document.getElementById("myBtn");

window.onscroll = function () {
 scrollFunction();
};
function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
 } else {
  mybutton.style.display = "none";
 }
}

function topFunction() {
 document.body.scrollTop = 0; // 
 document.documentElement.scrollTop = 0; 
}

 
 $(document).ready(function(){
    $(".card-link").click(function(){
       var imageUrl = $(this).data("image-src");
       var productName = $(this).data("product-name");
       var productDesc = $(this).data("product-desc");
 
       $(".rounded").attr("src", imageUrl);
       $(".product_name").text(productName);
       $(".product_desc").text(productDesc);
    });
 
    $(window).resize(function(){
       if($(window).width() < 600) {
          $(".modal-content").css("transform", "scaleX(1)");
       }
       else {
          $(".modal-content").css("transform", "scaleX(1.4)");
       }
    });
 });

  
  document.addEventListener('DOMContentLoaded', function () {
    
    var sendMessageBtn = document.getElementById('sendMessageBtn');

    
    sendMessageBtn.addEventListener('click', function () {
      
      var modal = new bootstrap.Modal(document.getElementById('modalID'));
      modal.hide();

      
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });




  document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("fade-in");
            }, index * 200); 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );

    carouselItems.forEach((item) => {
      observer.observe(item);
    });
  });



   document.addEventListener('DOMContentLoaded', function () {
     const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
 
     const options = {
       root: null,
       rootMargin: '0px',
       threshold: 0.5,
     };
 
     const observer = new IntersectionObserver(function (entries, observer) {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add('fade-in');
           observer.unobserve(entry.target);
         }
       });
     }, options);
 
     sectionsToAnimate.forEach((section) => {
       observer.observe(section);
     });
   });

     document.addEventListener("DOMContentLoaded", function () {
       const cards = document.querySelectorAll(".fade-in-card");
   
       const observer = new IntersectionObserver(
         (entries, observer) => {
           entries.forEach((entry, index) => {
             if (entry.isIntersecting) {
               setTimeout(() => {
                 entry.target.classList.add("fade-in");
               }, index * 200); 
               observer.unobserve(entry.target);
             }
           });
         },
         { threshold: 0.5 }
       );
   
       cards.forEach((card) => {
         observer.observe(card);
       });
     });
   
       document.addEventListener("DOMContentLoaded", function () {
         const aboutElements = document.querySelectorAll(".about-container .fade-in-element");

         const observer = new IntersectionObserver(
           (entries, observer) => {
             entries.forEach((entry, index) => {
               if (entry.isIntersecting) {
                 setTimeout(() => {
                   entry.target.classList.add("fade-in");
                 }, index * 200); 
                 observer.unobserve(entry.target);
               }
             });
           },
           { threshold: 0.5 }
         );
     
         aboutElements.forEach((element) => {
           observer.observe(element);
         });
       });

  document.addEventListener("DOMContentLoaded", function () {
    const contactElements = document.querySelectorAll(".contact-container .fade-in-element");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("fade-in");
            }, index * 200); 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );

    contactElements.forEach((element) => {
      observer.observe(element);
    });
  });

    document.addEventListener("DOMContentLoaded", function () {
      const footer = document.querySelector("#footer");
  
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("fade-in");
              }, 200); 
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } 
      );
  
      observer.observe(footer);
    });


$(document).ready(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault();

    $('#confirmation-message').html('');

    var isEmpty = false;
    $('#contact-form input[type="text"], #contact-form textarea').each(function() {
      if ($(this).val() === '') {
        isEmpty = true;
        return false;
      }
    });

    if (isEmpty) {
      $('#confirmation-message').html('<div class="alert alert-danger" role="alert">Fields can\'t be empty</div>');
    } else {
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: $('#contact-form').serialize(),
        dataType: 'json',
        success: function(response) {
          if (response.success) {
            $('#confirmation-message').html('<div class="alert alert-success" role="alert">' + response.message + '</div>');
            $('#contact-form')[0].reset();
          } else {
            $('#confirmation-message').html('<div class="alert alert-danger" role="alert">' + response.message + '</div>');
          }
        },
        error: function(xhr, status, error) {
          $('#confirmation-message').html('<div class="alert alert-danger" role="alert">Error: ' + error + '</div>');
        }
      });
    }
  });
});


     


 