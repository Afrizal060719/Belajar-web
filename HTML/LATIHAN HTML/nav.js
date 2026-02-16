const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function() {
    console.log('Burger clicked');
    menu.classList.toggle('show');
});