export function criarTabuleiro(personagemSelecionado) {
    if (document.getElementById("tabuleiro")) return; // Evita recriação
  
    const container = document.createElement("div");
    container.style.position = "relative"; // Para manter a imagem alinhada ao tabuleiro
  
    const tabuleiro = document.createElement("div");
    tabuleiro.id = "tabuleiro";
  
    for (let i = 1; i <= 10; i++) {
      const casa = document.createElement("div");
      casa.textContent = i;
      casa.classList.add("casa");
      tabuleiro.appendChild(casa);
    }
  
  
  
    // Criar a imagem sobreposta
    const img = document.createElement("img");
    img.src = personagemSelecionado || "default-personagem.png"; // Usa o escolhido
    img.id = "imagem-frente";
    img.style.position = "absolute";
    img.style.transition = "transform 1s ease";
    img.style.width = "40px"; // Ajuste conforme necessário
    img.style.height = "40px";
  
    // Adicionar elementos ao container
    container.appendChild(tabuleiro);
    container.appendChild(img);
  
    document.body.appendChild(container);
  }
  
  export function excluirImagem() {
    const img = document.getElementById("imagem-frente");
    if (img) {
      img.remove(); // Remove a imagem do DOM
    }
  }
  
  export function apagarTabuleiro() {
    const tabuleiro = document.getElementById("tabuleiro");
    if (tabuleiro) {
      tabuleiro.remove();
    }
  }
  
  let index = 0; // Índice global para rastrear a posição da imagem
  
  export function moverImagem() {
    const casas = document.querySelectorAll("#tabuleiro .casa");
    const img = document.getElementById("imagem-frente");
  
    if (index < casas.length) {
      const casa = casas[index];
      const rect = casa.getBoundingClientRect(); // Posição da casa
      const tabuleiroRect = document.getElementById("tabuleiro").getBoundingClientRect(); // Posição do tabuleiro
  
      // Aplica a transformação para mover a imagem
      img.style.transition = "transform 1s ease"; // Animação de transição
      img.style.transform = `translate(${rect.left - tabuleiroRect.left + window.scrollX}px, ${rect.top - tabuleiroRect.top + window.scrollY}px)`;
  
      index++; // Avança para a próxima casa
    }
  }