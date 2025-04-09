// Seleciona o formulário pelo ID 'form-contato' e adiciona um ouvinte de evento para o envio (submit)
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

  const form = e.target; // Captura o formulário que disparou o evento
  const button = form.querySelector('button'); // Seleciona o botão dentro do formulário

  button.disabled = true;            // Desabilita o botão para evitar múltiplos envios
  button.textContent = 'Enviando...'; // Altera o texto do botão para feedback visual

  // Simula o envio da mensagem com um pequeno atraso de 1,5 segundos
  setTimeout(() => {
    const msgAntiga = form.querySelector('.mensagem-sucesso'); // Verifica se já existe uma mensagem de sucesso anterior
    if (msgAntiga) msgAntiga.remove(); // Remove a mensagem anterior se existir

    const mensagem = document.createElement('p');               // Cria um novo parágrafo
    mensagem.textContent = 'Mensagem enviada com sucesso!';     // Define o texto da mensagem
    mensagem.classList.add('mensagem-sucesso');                 // Adiciona uma classe para identificar essa mensagem
    mensagem.style.color = 'green';                             // Define a cor do texto como verde
    form.appendChild(mensagem);                                 // Adiciona a mensagem no final do formulário

    form.reset();            // Limpa todos os campos do formulário
    button.disabled = false; // Habilita novamente o botão
    button.textContent = 'Enviar'; // Restaura o texto original do botão

    // Após 5 segundos, remove a mensagem de sucesso automaticamente
    setTimeout(() => mensagem.remove(), 5000);
  }, 1500);
});

// Seleciona o botão de alternância de tema pelo ID
const toggle = document.getElementById('toggle-tema');

// Verifica no localStorage se o modo escuro estava ativado na última visita
const isDark = localStorage.getItem('modo') === 'escuro';

// Se estiver ativado, adiciona a classe 'dark-mode' ao <body>
if (isDark) {
  document.body.classList.add('dark-mode');          // Ativa modo escuro
  toggle.textContent = '☀️ Modo Claro';              // Altera o texto do botão para modo claro
}

// Adiciona um ouvinte de evento de clique no botão de tema
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');       // Alterna entre claro e escuro
  const darkAtivo = document.body.classList.contains('dark-mode'); // Verifica qual modo está ativo

  // Atualiza o texto do botão conforme o modo atual
  toggle.textContent = darkAtivo ? '☀️ Modo Claro' : '🌙 Modo Escuro';

  // Salva no localStorage o modo escolhido (escuro ou claro)
  localStorage.setItem('modo', darkAtivo ? 'escuro' : 'claro');
});
