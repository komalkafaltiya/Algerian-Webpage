
//LODER FUNCTION:
// Function to show loader on submitting rechercher form
document.querySelector('.rechercher-button').addEventListener('click', function () {
  var button = document.getElementById('rechercher-btn');
  var loader = document.getElementById('loader');
  var thankYouMessage = document.getElementById('thank-you-message');

  // button is visible
  if (loader.classList.contains('d-none')) {
      // Disable button
      button.style.pointerEvents = 'none';

      // Hide button and show loader
      button.classList.add('d-none');
      loader.classList.remove('d-none');

      // 3 second timer
      setTimeout(function () {
          // Show button and hide loader
          button.classList.remove('d-none');
          loader.classList.add('d-none');

          // Re-enable the button
          button.style.pointerEvents = 'auto';

          // thank-you message
          thankYouMessage.classList.remove('d-none');
      }, 1000); // 1000ms = 1 seconds
  }
});


//SLIDER-1:

$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // $('.slider2').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });
    
  // SLIDER-3:

  $(document).ready(function () {
    $(".slider2").slick({
      dots:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 1000,
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
      ]
    });
  });

  // SLIDER-3:

  $('.slider3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 756,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });