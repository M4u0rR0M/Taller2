document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-registro');
    const btnsAbrir = document.querySelectorAll('.abrir-modal');
    const btnCerrar = document.querySelector('.cerrar-modal');
    const form = document.getElementById('form-registro');
    const mensajeExito = document.getElementById('mensaje-exito');
    const mensajeTexto = document.getElementById('mensaje-texto');
    const modalTitulo = document.getElementById('modal-titulo');

    if (!modal || btnsAbrir.length === 0) {
        console.error('Error: No se encontró el modal o los botones');
        return;
    }

    // Abrir modal
    btnsAbrir.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('activo');
            document.body.style.overflow = 'hidden';
            // Resetear estado
            form.classList.remove('oculto');
            modalTitulo.classList.remove('oculto');
            mensajeExito.classList.add('oculto');
            form.reset();
        });
    });

    function cerrarModal() {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarModal);
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Manejar envío
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        
        // Cambiar vista
        form.classList.add('oculto');
        modalTitulo.classList.add('oculto');
        mensajeExito.classList.remove('oculto');
        
        // Insertar datos
        mensajeTexto.textContent = `Gracias por participar ${nombre}, te enviaremos los resultados a ${correo}`;
    });
});