document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btn-menu');
    const menuLista = document.getElementById('menulista');
    
    // Crea el overlay dinámicamente
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    document.body.appendChild(overlay);

    function toggleMenu() {
        btnMenu.classList.toggle('activo');
        menuLista.classList.toggle('activo');
        overlay.classList.toggle('activo');
        document.body.style.overflow = menuLista.classList.contains('activo') ? 'hidden' : 'auto';
    }

    btnMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Cierra el menú al hacer click en un link
    document.querySelectorAll('#menulista a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuLista.classList.contains('activo')) {
                toggleMenu();
            }
        });
    });
});