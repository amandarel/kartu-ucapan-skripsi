const book = document.getElementById('myBook');
let isOpen = false;

book.addEventListener('click', () => {
    book.classList.toggle('open');
    isOpen = !isOpen;

    if (isOpen) {
        createConfetti();
    }
});

function createConfetti() {
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6'];
    
    for (let i = 0; i < 50; i++) {
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