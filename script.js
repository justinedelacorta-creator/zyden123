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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
}

window.addEventListener('load', launchConfetti);

// --- 3. FORCE AUTOPLAY & UNMUTE ON TOUCH ---
const music = document.getElementById('bgMusic');

function enableAudio() {
    music.muted = false; // Tanggalin ang mute
    music.play().then(() => {
        // Kapag tumutugtog na nang may tunog, tanggalin na ang listeners
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
        document.removeEventListener('scroll', enableAudio);
    }).catch(error => {
        console.log("Autoplay waiting for interaction");
    });
}

// Subukang patugtugin agad pag-load
window.addEventListener('load', () => {
    music.play().catch(() => {});
});

// I-unmute sa unang tap, click, o kahit mag-scroll lang ang bisita sa CP
document.addEventListener('click', enableAudio);
document.addEventListener('touchstart', enableAudio);
document.addEventListener('scroll', enableAudio);

// --- 4. GOOGLE MAPS DIRECT LINK ---
document.getElementById('locationBtn').addEventListener('click', function() {
    const googleMapsUrl = "https://maps.google.com/?q=Grand+Celebration+Hall+Manila";
    window.open(googleMapsUrl, '_blank');
});