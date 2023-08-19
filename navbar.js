const menu = document.getElementById('open-menu');

const inputCard = document.getElementById('input-card');
const inputCardConsejo = document.getElementById('input-card-consejo');
const inputCardServices = document.getElementById('input-card-services');
let more = document.querySelector('.more')

more.addEventListener('click' , () => {
    more.classList.toggle('active_card');
    more.classList.toggle('more-bg');
})


// for (let i = 0; i <more.length; i++) {
//     more[i].addEventListener('click', function(){
//         more[i].parentNode.classList.toggle('more-bg')
//     })
// }

// BOTON MENU
menu.addEventListener('click', () => {
    document.getElementById('header-toggle').classList.toggle('active');
})


// INPUTS-CARDS**********


inputCardServices.addEventListener('click', () => {
    document.getElementById('span-card-input-services').classList.toggle('span-hidden')
    document.getElementById('list-services').classList.toggle('input-open-card');
})

inputCard.addEventListener('click', () => {
    document.getElementById('span-card-input-nosotros').classList.toggle('span-hidden')
    document.getElementById('confia-en-nosotros').classList.toggle('input-open-card');
})

inputCardConsejo.addEventListener('click', () => {
    document.getElementById('span-card-input-consejo').classList.toggle('span-hidden')
    document.getElementById('un-consejo').classList.toggle('input-open-card');


})


