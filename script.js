var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = 'Welcome to the <span class = "highlight">TEDx Mystery</span> Memory Card Game!';
var typeTimer = setInterval(function() {
    n = n + 1;
    p.innerHTML = str.slice(0, n);
    if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = str;
    n = 0;
    setInterval(function() {

        if (n === 0) {
        p.innerHTML = str + "|"
        n = 1;
        } else {
        p.innerHTML = str
        n = 0;
        };
    }, 500);
    };
}, 60)

// Play Game Transition
function startGame() {
    const button = document.querySelector('.play-btn');
    button.textContent = "Loading...";
    button.style.background = "#fca311";

    setTimeout(() => {
        alert("Game is starting. Enjoy uncovering the mystery!");
        window.location.href = "game.html"; 
    }, 1500);
}

// Scroll Animation Logic
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
});
