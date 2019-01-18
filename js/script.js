const btnUp = document.querySelector('.btn-up');
const iconUp = document.querySelector('i.icon-up-open-big');
/*const header = document.querySelector('header');
const intValue = 500;
let heightScroll = document.body;

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});*/

window.addEventListener('scroll', () => {
    const heightScroll = window.scrollY;

    const about = document.querySelector('.about');

    const windowHeight = window.outerHeight;
    const aboutHeight = about.clientHeight;


    const aboutFromTop = about.offsetTop;


    if (heightScroll > aboutFromTop + aboutHeight - windowHeight) {
        iconUp.classList.add('active');
    }


    if (heightScroll < 100) {
        iconUp.classList.remove('active');
    }
});

$('nav a').on('click', function () {
    const goToSection = $(this).attr('class');
    $('body, html').animate({
        scrollTop: $('[data-section=' + goToSection + ']').offset().top
    }, 1000)
});

$('.btn-up').on('click', function () {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 1000)
});