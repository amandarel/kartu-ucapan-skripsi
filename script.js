const envelopeWrapper = document.getElementById('envelope-wrapper');
let isOpen = false;

envelopeWrapper.addEventListener('click', (e) => {
  
    if (e.target.closest('.letter-content') && isOpen) {
        return; 
    }

    if (!isOpen) {
        envelopeWrapper.classList.add('open');
        isOpen = true;
        setTimeout(createConfetti, 600);
    } else {
        envelopeWrapper.classList.remove('open');
        isOpen = false;
    }
});

function createConfetti() {
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#ff9ff3'];
    
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = -10 + 'px';
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() + 's';
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

