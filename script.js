// script.js - Vainilla JS para scroll suave y formulario
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 70,
          behavior: 'smooth'
        });
      }
    });
  });

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

      // Aquí podrías integrar envío real (fetch a API). Por ahora mostramos agradecimiento.
      alert('¡Gracias por tu mensaje! Sofia se pondrá en contacto contigo pronto.');

      // Reset form
      form.reset();
    });
  }
});
