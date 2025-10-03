window.addEventListener('load', () => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    initParticles();
});

function initParticles(){
    particlesJS('hero', {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: true, distance: 150, color: '#0ff', opacity: 0.5 }
        }
    });
}
