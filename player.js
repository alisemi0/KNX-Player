document.addEventListener('DOMContentLoaded', () => {
    // Plyr altyapısı ile KNX Player'ı başlatma
    const player = new Plyr('#knx-player', {
        controls: [
            'play-large', 'play', 'progress', 'current-time', 
            'mute', 'volume', 'fullscreen'
        ],
        tooltips: { controls: true, seek: true }
    });
    
    // Player hazır olduğunda
    player.on('ready', (event) => {
        console.log('KNX Player kullanıma hazır!');
    });
});
