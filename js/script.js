// JS

const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const hero = document.querySelector('.hero');
const layer = document.querySelector('.layer');
const btnUp = document.querySelector('.btn-up');
const iconUp = document.querySelector('i.icon-up-open-big');
const menuElements = document.querySelectorAll('nav a');

burger.addEventListener('click', () => {
    burger.classList.toggle('move');
    layer.classList.toggle('move');
    header.classList.toggle('move');
});

menuElements.forEach((menuElement) => {
    menuElement.addEventListener('click', () => {

        const goToSection = menuElement.getAttribute('class');

        window.scrollTo({
            top: document.querySelector('[data-section=' + goToSection + ']').offsetTop,
            behavior: 'smooth'
        });
    });
});

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const heightScroll = window.scrollY;

    if (heightScroll > 500) {
        iconUp.classList.add('active');
    } else {
        iconUp.classList.remove('active');
    }
});


// jQuery

/*const $iconUp = $('i.icon-up-open-big');
const headerHeight = $('header').innerHeight();

$('nav a').on('click', function () {
    const goToSection = $(this).attr('class');
    $('body, html').animate({
        scrollTop: $('[data-section=' + goToSection + ']').offset().top
    }, 1000);
});

$('.btn-up').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000);
});

window.addEventListener('scroll', () => {
    const heightScroll = $(document).scrollTop()

    if (heightScroll > 500) {
        $iconUp.addClass('active');
    } else {
        $iconUp.removeClass('active');
    }
});

$('.burger').on('click', function () {
    $(this).toggleClass('move');
    $('.layer').toggleClass('move');
    $('header').toggleClass('move');
});*/