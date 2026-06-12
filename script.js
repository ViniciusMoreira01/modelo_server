// Animação dos cards ao scroll

const cards = document.querySelectorAll('.card,.server-card,.side-card');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

// Glow seguindo mouse

document.addEventListener("mousemove",(e)=>{

const glow = document.querySelector(".mouse-glow");

if(glow){

glow.style.left = e.clientX+"px";
glow.style.top = e.clientY+"px";

}

});