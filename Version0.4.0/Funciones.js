document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const items = document.querySelectorAll('.carrusel-item');

    let indiceActual = 0;
    const totalItems = items.length;
    const tiempoAutoplay = 4000;
    let intervalo;

    function moverCarrusel(indice) {
        const anchoItem = items[0].offsetWidth + 20;
        carrusel.scrollTo({
            left: anchoItem * indice,
            behavior: 'smooth'
        });
        indiceActual = indice;
    }

    btnSiguiente.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % totalItems;
        moverCarrusel(indiceActual);
        reiniciarAutoplay();
    });

    btnAnterior.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + totalItems) % totalItems;
        moverCarrusel(indiceActual);
        reiniciarAutoplay();
    });

    function iniciarAutoplay() {
        intervalo = setInterval(() => {
            indiceActual = (indiceActual + 1) % totalItems;
            moverCarrusel(indiceActual);
        }, tiempoAutoplay);
    }

    function reiniciarAutoplay() {
        clearInterval(intervalo);
        iniciarAutoplay();
    }

    carrusel.addEventListener('mouseenter', () => clearInterval(intervalo));
    carrusel.addEventListener('mouseleave', iniciarAutoplay);

    iniciarAutoplay();
});

    //Formulario ↓
