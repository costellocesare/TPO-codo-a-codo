let menu = document.querySelector('#menu');

let menubar = document.querySelector('#menubar');

    menubar.addEventListener('click', function(){
        menu.classList.toggle('menutoggle');
    });
    



window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("scrolled", window.scrollY > 0);
})


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});

    function validarFormulario(event){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        if (nombre.length == 0){
            alert("El nombre no puede estar vacio");
            return;
        }
        let email = document.getElementById("email").value;
        if (email.length == 0){
            alert("El email no puede estar vacio");
            return;
        }
        let mensaje = document.getElementById("mensaje").value;
        if (mensaje.length == 0){
            alert("El mensaje no puede estar vacio");
            return;
        }
        this.submit();
    }