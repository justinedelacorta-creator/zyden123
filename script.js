// Target birthday date: September 22, 2026
const targetDate = new Date(2026, 8, 22, 15, 0, 0).getTime();

// --- 1. COUNTDOWN TIMER ---
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.querySelector('.countdown').innerHTML = "<b style='color:#0083b0;'>It's Celebration Day! 🎉💙</b>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- 2. CONFETTI EFFECT ---
function launchConfetti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
}

// --- 3. OPEN INVITATION & PLAY MUSIC ---
const music = document.getElementById('bgMusic');
const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('welcomeOverlay');

openBtn.addEventListener('click', function() {
    music.play();
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
    launchConfetti();
});

// --- 4. VIDEO POPUP CONTROLS ---
const watchVideoBtn = document.getElementById('watchVideoBtn');
const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const birthdayVideo = document.getElementById('birthdayVideo');

// Buksan ang Video Modal
watchVideoBtn.addEventListener('click', function() {
    videoModal.style.display = 'flex';
    music.pause(); // I-pause muna ang background music habang may video
    birthdayVideo.play(); // I-play ang video
});

// Isara ang Video Modal
function closeVideo() {
    videoModal.style.display = 'none';
    birthdayVideo.pause(); // I-pause ang video
    birthdayVideo.currentTime = 0; // I-reset sa simula
    music.play(); // I-play ulit ang background music
}

closeVideoBtn.addEventListener('click', closeVideo);

// Isara rin kapag nag-click sa labas ng video player
window.addEventListener('click', function(event) {
    if (event.target === videoModal) {
        closeVideo();
    }
});

// --- 5. GOOGLE MAPS DIRECT LINK ---
document.getElementById('locationBtn').addEventListener('click', function() {
    const googleMapsUrl = "3FP2+6W2, Toril, Davao City, Davao del Sur";
    window.open(googleMapsUrl, '_blank');
});
