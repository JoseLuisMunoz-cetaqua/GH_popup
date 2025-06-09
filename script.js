<!-- JavaScript -->
<script>
    // Mostrar el popup inmediatamente al cargar la página
    window.onload = function() {
        document.getElementById('popup').style.display = 'flex';
    };

    // Función para enviar el correo y ocultar el popup
    function submitEmail() {
        var email = document.getElementById('email').value;
        if (email) {
            alert("Gracias por tu correo: " + email);
            document.getElementById('popup').style.display = 'none';
        } else {
            alert("Por favor ingresa un correo válido.");
        }
    }
</script>