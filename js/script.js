const hamburgerButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');


hamburgerButton.addEventListener('click', ()=>{
    hamburgerButton.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
})