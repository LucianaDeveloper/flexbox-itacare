window.sr = ScrollReveal ({
    distance: '50px',
    duration: 1000,
    easing: 'ease',
    mobile: true,
    reset: false,
    viewFactor: 0.4,
});
sr.reveal('.hero h1, .hero h3, .btn',{
    origin: 'bottom',
//        scale: 0.3,
});
sr.reveal('.conheca h3, .conheca p, .conheca .grid li, .newsletter h3, .newsletter p, .newsletter form',{
    origin: 'left',
});
sr.reveal('.caracteristicas h3, .caracteristicas p, .caracteristicas .grid li, .caracteristicas .grid i, .caracteristicas h4',{
    scale: 0.9,
});