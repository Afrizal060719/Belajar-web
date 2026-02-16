const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function() {
    console.log('burger klik');
    menu.classList.toggle('active');
});
