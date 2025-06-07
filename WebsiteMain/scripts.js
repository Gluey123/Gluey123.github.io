document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const code = btn.getAttribute('data-code');
    navigator.clipboard.writeText(code);
    const tip = btn.querySelector('.copy-tip');
    tip.textContent = 'Copied!';
    setTimeout(() => { tip.textContent = 'Copy Code'; }, 1200);
  });
});

const words = [
  "Cybersec Portfolio",
  "Security Research",
  "CTF Logs",
  "Labs",
  "Pentesting Projects"
];

const typewriter = document.getElementById("typewriter");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 1200;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, typingSpeed / 2);
    }
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

if (typewriter) type();

// Modal image viewer
document.querySelectorAll('.cert-img-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const imgSrc = btn.getAttribute('data-img');
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
  });
});

document.getElementById('img-modal-close').onclick = function() {
  document.getElementById('img-modal').style.display = 'none';
};
document.getElementById('img-modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};


// Spinning word effect
document.addEventListener("DOMContentLoaded", function() {
  const words = [
    "Site",
    "Portfolio",
    "Labs",
    "CTF Writeups",
    "Projects"
  ];
  const spinword = document.getElementById("spinword");
  let wordIndex = 0;

  function spinToNextWord() {
    // Add blur/spin class
    spinword.classList.add("spin-blur");
    setTimeout(() => {
      // Change word after blur/spin
      wordIndex = (wordIndex + 1) % words.length;
      spinword.textContent = words[wordIndex];
      // Remove blur/spin
      spinword.classList.remove("spin-blur");
    }, 300);
  }

  // Start with a delay, then repeat
  setInterval(spinToNextWord, 2200); // Change every 2.2 seconds
});
