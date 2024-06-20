
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.curiosidades-cards-container');
    const players = document.querySelectorAll('.curiosidades-efplayer');

    const imageUrlsDesktop = [
        'images/fake-asset.png',    
        'images/inspiracoes.png',
        'images/01-noticia.png',
        'images/02-noticia.png',
        'images/03-noticia.png',
        'images/04-noticia.png',
        'images/05-noticia.png',
        'images/fake-asset.png',
        'images/curiosidades.png',
        'images/curiosidade01-d.png',
        'images/curiosidade02-d.png',
        'images/curiosidade03-d.png',
        'images/curiosidade04-d.png',
        'images/curiosidade05-d.png',
        'images/curiosidade06-d.png',
        'images/curiosidade07-d.png',
        'images/curiosidade08-d.png',
        'images/curiosidade09-d.png',
        'images/curiosidade10-d.png',
        'images/curiosidade11-d.png',
        'images/curiosidade12-d.png',
        'images/fake-asset.png'
    ];

    const imageUrlsMobile = [
        'images/fake-asset.png',    
        'images/inspiracoes.png',    
        'images/01-noticia-mob.png',
        'images/02-noticia-mob.png',
        'images/03-noticia-mob.png',
        'images/04-noticia-mob.png',
        'images/05-noticia-mob.png',
        'images/fake-asset.png',
        'images/curiosidades.png',
        'images/curiosidade01-d.png',
        'images/curiosidade02-d.png',
        'images/curiosidade03-d.png',
        'images/curiosidade04-d.png',
        'images/curiosidade05-d.png',
        'images/curiosidade06-d.png',
        'images/curiosidade07-d.png',
        'images/curiosidade08-d.png',
        'images/curiosidade09-d.png',
        'images/curiosidade10-d.png',
        'images/curiosidade11-d.png',
        'images/curiosidade12-d.png',
        'images/fake-asset.png'
    ];

    function isMobile() {
        return window.innerWidth < 768;
    }

    function loadImages() {
        players.forEach((player, index) => {
            const img = document.createElement('img');
            img.src = isMobile() ? imageUrlsMobile[index] : imageUrlsDesktop[index];
            img.style.width = '100%';
            img.style.height = 'auto';
            img.loading = 'lazy'; // Lazy loading
            player.appendChild(img);
        });
    }

    function updatePlayerStyles() {
        const containerHeight = container.clientHeight;

        players.forEach((player) => {
            const rect = player.getBoundingClientRect();
            const playerCenter = rect.top + rect.height / 2;
            const containerCenter = containerHeight / 2;

            const distanceFromCenter = Math.abs(containerCenter - playerCenter);
            const scale = Math.max(0.5, 1 - distanceFromCenter / containerCenter);
            const zIndex = Math.round(scale * 100);
            const opacity = scale > 0.5 ? 1 : 0;

            gsap.to(player, {
                scale: scale,
                zIndex: zIndex,
                opacity: opacity,
                duration: 0.5
            });
        });
    }

    loadImages();
    container.addEventListener('scroll', updatePlayerStyles);
    window.addEventListener('resize', () => {
        players.forEach(player => player.innerHTML = '');
        loadImages();
        updatePlayerStyles();
    });
    updatePlayerStyles();
});
