// scripts.js

// Exemplo de funcionalidade para um menu móvel (opcional)
// Este código pressupõe que você tenha um botão para alternar o menu em dispositivos móveis

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-menu');
    const navLinks = document.querySelector('nav ul');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
