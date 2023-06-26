const menu = document.getElementById('open-menu');

menu.addEventListener('click', () => {
    document.getElementById('header-toggle').classList.toggle('active');
})