const btnIconMobile = document.getElementById('icon-menu-mobile');

const asideMobile = document.querySelector('.navegadorMobile');

btnIconMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    asideMobile.classList.toggle('inactive');
}