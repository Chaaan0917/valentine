const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("valentineGif");
const text = document.getElementById("valentineText");
const buttonsDiv = document.querySelector('.buttons');
const container = document.querySelector('.container');

let noClicks = 0;
let followSpeed = 0;
let mouseX = 0;
let mouseY = 0;

// Track mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveYesButton() {
    if (followSpeed > 0) {
        const yesRect = yesBtn.getBoundingClientRect();
        const dx = mouseX - (yesRect.left + yesRect.width / 2);
        const dy = mouseY - (yesRect.top + yesRect.height / 2);

        yesBtn.style.left = yesRect.left + dx * followSpeed + "px";
        yesBtn.style.top = yesRect.top + dy * followSpeed + "px";
        yesBtn.style.position = "fixed";
    }
    requestAnimationFrame(moveYesButton);
}
moveYesButton();

noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    noClicks++;

    const yesRect = yesBtn.getBoundingClientRect();
    const yesLeft = yesRect.left;
    const yesTop = yesRect.top;
    const yesRight = yesRect.right;
    const yesBottom = yesRect.bottom;

    const padding = 10;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const minX = padding;
    const minY = window.innerHeight / 2;
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    let randomX, randomY;

    do {
        randomX = Math.random() * (maxX - minX) + minX;
        randomY = Math.random() * (maxY - minY) + minY;
    } while (
        randomX + buttonWidth > yesLeft &&
        randomX < yesRight &&
        randomY + buttonHeight > yesTop &&
        randomY < yesBottom
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    if (noClicks >= 10) {
        gif.src = "reaction-meme-stan-twt.gif";
        text.innerText = "Please Be My Valentine 💖";
    }

    if (noClicks >= 20) {
      text.innerText = "Please Please Please 🥺";
    }

    if (noClicks % 5 === 0) {
        followSpeed += 0.02; 
    }

});

 yesBtn.addEventListener('click', () => {
    valentineGif.src = '123.gif';

    buttonsDiv.remove();

    document.getElementById('valentineText').textContent = "Yay! 💖 You said yes!";

    const leftGif = document.createElement('img');
    leftGif.src = 'hhgf.gif'; 
    leftGif.classList.add('side-gif', 'left-gif');

    const rightGif = document.createElement('img');
    rightGif.src = 'excited.gif'; 
    rightGif.classList.add('side-gif', 'right-gif');

    container.appendChild(leftGif);
    container.appendChild(rightGif);
});
