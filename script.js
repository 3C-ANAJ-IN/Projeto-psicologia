document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');
  
  // Menu acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function() {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });
  
  // Controle de fonte
  const tamanhoOriginal = 1; // valor de referência
  let tamanhoAtualFonte = tamanhoOriginal;
  const maxDeslocamento = 0.5; // 5 cliques de 0.1rem = 0.5rem
  
  function atualizarBotoes() {
    aumentaFonteBotao.disabled = tamanhoAtualFonte >= tamanhoOriginal + maxDeslocamento;
    diminuiFonteBotao.disabled = tamanhoAtualFonte <= tamanhoOriginal - maxDeslocamento;
    
    aumentaFonteBotao.style.opacity = aumentaFonteBotao.disabled ? '0.5' : '1';
    diminuiFonteBotao.style.opacity = diminuiFonteBotao.disabled ? '0.5' : '1';
  }
  
  aumentaFonteBotao.addEventListener('click', function() {
    if (tamanhoAtualFonte < tamanhoOriginal + maxDeslocamento) {
      tamanhoAtualFonte = parseFloat((tamanhoAtualFonte + 0.1).toFixed(1));
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      atualizarBotoes();
    }
  });
  
  diminuiFonteBotao.addEventListener('click', function() {
    if (tamanhoAtualFonte > tamanhoOriginal - maxDeslocamento) {
      tamanhoAtualFonte = parseFloat((tamanhoAtualFonte - 0.1).toFixed(1));
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      atualizarBotoes();
    }
  });
  
  alternaContraste.addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
  });
  
  atualizarBotoes();
});

// ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });













function irParaSecao(secao) {
  window.location.href = "index2nd.html#" + secao;
}