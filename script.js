// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
let heartsStarted = false;

// Click Envelope
window.addEventListener("DOMContentLoaded", () => {
    startHearts();
});

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Happy Valentine's Day Robyn!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    stopHearts();
});

// Floating hearts animation
// function startHearts(){
//     // Make a few hearts every second
//     setInterval(() => {
//       for (let i=0; i<3; i++) spawnHeart();
//     }, 900);
//   }
let heartTimer = null;

function startHearts(){
    if (heartTimer) return; // already running

    heartTimer = setInterval(() => {
        for (let i = 0; i < 3; i++) spawnHeart();
    }, 900);
}
function stopHearts(){
    if (heartTimer) {
        clearInterval(heartTimer);
        heartTimer = null;
    }
}


function spawnHeart(){
    const h = document.createElement("div");
    h.className = "heart";
    const hearts = ["💖","💘","💝","💕","💗","❤️"];
    h.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (6 + Math.random()*5) + "s";
    h.style.fontSize = (14 + Math.random()*22) + "px";
    document.body.appendChild(h);

    // Clean up
    setTimeout(() => h.remove(), 12000);
}