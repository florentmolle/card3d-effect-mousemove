
// get what we need
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
const cardContentBox = document.querySelector('#card-contentbox');
const cardText = document.querySelector('#card-text');
const cardTitle = document.querySelector('#card-title');


// event mouse move when hovering the card-container
cardContainer.addEventListener('mousemove', (e)=>{
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})

// this just anime when we enter the card container with mouse
cardContainer.addEventListener('mouseenter', ()=>{
    card.style.transition = '.1s';
    cardContentBox.style.transition = '.5s';
    cardText.style.transition = '.5s';
    cardTitle.style.transition = '.5s';

    cardContentBox.style.transform = 'translate3d(0,0,60px)';
    cardText.style.transform = 'translate3d(0,0,60px)';
    cardTitle.style.transform = 'translate3d(0,0,60px)';
})

// this just anime when we leave the card container with mouse
cardContainer.addEventListener('mouseleave', ()=>{
    card.style.transition = '.5s';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cardContentBox.style.transform = 'translate3d(0,0,1px)';
    cardText.style.transform = 'translate3d(0,0,1px)';
    cardTitle.style.transform = 'translate3d(0,0,1px)';
})