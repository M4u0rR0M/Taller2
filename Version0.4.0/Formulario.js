document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-registro');
    const btnsAbrir = document.querySelectorAll('.abrir-modal'); // querySelectorAll
    const btnCerrar = document.querySelector('.cerrar-modal');
    const form = document.getElementById('form-registro');

    if (!modal || btnsAbrir.length === 0) {
        console.error('Error: No se encontró el modal o los botones');
        return;
    }

    // Abrir modal con cualquier botón
    btnsAbrir.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('activo');
            document.body.style.overflow = 'hidden';
        });
    });

    // El resto igual...
    if (btnCerrar) {
        btnCerrar.addEventListener('click', function() {
            modal.classList.remove('activo');
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('activo');
            document.body.style.overflow = 'auto';
        }
    });
});
