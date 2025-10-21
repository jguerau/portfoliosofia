// script.js - Vainilla JS para scroll suave y formulario mejorado
document.addEventListener('DOMContentLoaded', function() {

  // Función para obtener el offset de la navbar dinámicamente
  function getNavbarOffset() {
    const root = document.documentElement;
    const navHeight = getComputedStyle(root).getPropertyValue('--navbar-height');
    // Convertir de '60px' a 60 (asumiendo que siempre termina en 'px')
    return parseFloat(navHeight) || 60; 
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const offset = getNavbarOffset(); // Offset dinámico
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Función de validación de formato de email con regex
  function isValidEmail(email) {
      // Regex simple pero robusta para la validación de email
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // Simple form handling
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Por favor completa todos los campos del formulario.');
        return;
      }
      
      // Nueva validación de email
      if (!isValidEmail(email)) {
          alert('Por favor introduce un formato de email válido.');
          return;
      }

      // Aquí podrías integrar envío real (fetch a API). Por ahora mostramos agradecimiento.
      alert('¡Gracias por tu mensaje! Sofia se pondrá en contacto contigo pronto.');

      // Reset form
      form.reset();
    });
  }
});