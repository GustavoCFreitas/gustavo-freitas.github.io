
// script.js - JavaScript livre para pequenas interações e validação do formulário

// Coloca o ano atual nos rodapés
document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById('ano' + (i === 1 ? '' : i));
    if (el) el.textContent = year;
  }

  // Validação simples do formulário de contato (visual)
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // evita envio real
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }
      // Simula sucesso — apenas visual
      alert('Mensagem enviada (simulada). Obrigado, ' + nome + '!');
      form.reset();
    });
  }
});
