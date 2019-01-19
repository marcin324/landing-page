// JS

const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const btnUp = document.querySelector('.btn-up');
const iconUp = document.querySelector('i.icon-up-open-big');
const menuElements = document.querySelectorAll('nav a');

menuElements.forEach((menuElement) => {
    menuElement.addEventListener('click', () => {

        const goToSection = menuElement.getAttribute('class');

        window.scrollTo({
            top: document.querySelector('[data-section=' + goToSection + ']').offsetTop,
            /*left: 0,*/
            behavior: 'smooth'
        });
    });
});

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        /*left: 0,*/
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const heightScroll = window.scrollY;
    const headerHeight = header.clientHeight;
    const heroHeight = hero.clientHeight;

    if (heightScroll >= headerHeight + heroHeight) {
        iconUp.classList.add('active');
    }

    if (heightScroll < 100) {
        iconUp.classList.remove('active');
    }
});


// jQuery

/*$('nav a').on('click', function () {
    const goToSection = $(this).attr('class');
    $('body, html').animate({
        scrollTop: $('[data-section=' + goToSection + ']').offset().top
    }, 1000)
});

$('.btn-up').on('click', function () {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 1000)
});*/