const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('li');
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
    }); 

    navLinks.forEach((link, index) => {
        link.style.animation = `ulFade 0.5s ease forwards ${index / 7}s`;
    });
}

navSlide();