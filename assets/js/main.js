window.addEventListener('scroll', function () {
    const page = document.getElementById('backgroundImage');
    const scrollPoint = 1000;

    if (window.scrollY > scrollPoint) {
      page.classList.add('scrolled');
    } else {
      page.classList.remove('scrolled');
    }
  });