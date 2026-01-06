let screens = document.querySelectorAll('.screen');
let current = 0;

function nextScreen() {
    screens[current].classList.remove('active');
    current++;
    if (screens[current]) {
        screens[current].classList.add('active');
    }
}

/* floating hearts generator */
const heartContainer = document.getElementById('hearts-container');

for (let i = 0; i < 50; i++) {
    let heart = document.createElement('span');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.fontSize = (10 + Math.random() * 25) + 'px';
    heartContainer.appendChild(heart);
}
