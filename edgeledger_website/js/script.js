let scrolled;
const navbar = document.querySelector('#navbar');

const main = () => {
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      navbar.classList.remove('top');

      if (!scrolled) {
        navbar.style.transform = 'translateY(-70px)';
      }

      setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
        scrolled = true;
      }, 200);
    } else {
      navbar.classList.add('top');
      scrolled = false;
    }
  };

  // Smooth Scrolling
  window.jQuery &&
    $('#navbar a, .btn').on('click', function (e) {
      const { hash } = this;

      if (hash) {
        e.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100,
          },
          800
        );
      }
    });
};

window.onload = main;
