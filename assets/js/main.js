document.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded');

    const menuToggler = document.querySelector('.nav__bar-menu-toggler');
    const menu = document.querySelector('.nav__bar-menu-small-screen');
    const navBar = document.querySelector('.nav__bar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navBar.classList.add('nav__bar-scrolled');
        } else {
            navBar.classList.remove('nav__bar-scrolled');
        };
    });


    menuToggler.addEventListener('click', function () {
        this.querySelector('.icon-hamburger')
            .classList.toggle('hidden');
        this.querySelector('.icon-x')
            .classList.toggle('hidden');
        if (window.scrollY > 10) {
            menu.classList.toggle('animate-fade-in-scrolled');
        } else {
            menu.classList.toggle('animate-fade-in');
        };
    });
});