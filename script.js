// Variáveis Globais
let indicesUsados = new Set();
let perguntasRespondidas = 0,
    acertos = 0,
    companyState = 50,
    TOTAL_PERGUNTAS = 5,
    perguntaAtual,
    personagemSelecionado = null,
    nomeJogador = "",
    erros = 0,
    MAX_ERROS = 10,
    progresso = 0;

import { perguntas } from "./perguntas.js";

// Sistema de Tema
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || getSystemTheme();
  setTheme(savedTheme);
}

document.getElementById("toggle-theme").addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  this.textContent = newTheme === "dark" ? "🌙" : "🌞";
});

window.addEventListener("DOMContentLoaded", loadTheme);

// Funções do Jogo
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selecionarPergunta() {
  let filtradas;
  if (Math.round(companyState) === 50) filtradas = perguntas;
  else if (companyState >= 70) filtradas = perguntas.filter(p => p.dificuldade === "dificil");
  else if (companyState >= 30) filtradas = perguntas.filter(p => p.dificuldade === "medio");
  else filtradas = perguntas.filter(p => p.dificuldade === "facil");

  let disponiveis = filtradas.filter(p => !indicesUsados.has(perguntas.indexOf(p)));
  if (disponiveis.length === 0) { indicesUsados.clear(); disponiveis = filtradas; }
  const escolha = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  indicesUsados.add(perguntas.indexOf(escolha));
  return escolha;
}

//fluxo de jogo//
function iniciarJogo() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("personagem").classList.remove("hidden");
}

function updateProgress() {
  document.getElementById("progresso").textContent =
    "Pergunta " + (perguntasRespondidas + 1) + " de " + TOTAL_PERGUNTAS;
}

function carregarPergunta() {
  if (perguntasRespondidas >= TOTAL_PERGUNTAS) { exibirResultado(); return; }
  perguntaAtual = selecionarPergunta();
  let alternativas = perguntaAtual.opcoes.map((texto, i) => ({
    texto,
    explicacao: perguntaAtual.explicacoes ? perguntaAtual.explicacoes[i] : null,
    correta: i === perguntaAtual.correta
  }));
  shuffleArray(alternativas);
  perguntaAtual.opcoes = alternativas.map(a => a.texto);
  if (perguntaAtual.explicacoes) { 
    perguntaAtual.explicacoes = alternativas.map(a => a.explicacao); 
  }
  perguntaAtual.correta = alternativas.findIndex(a => a.correta);
  document.getElementById("cenario").textContent = perguntaAtual.cenario;
  document.getElementById("pergunta").textContent = perguntaAtual.pergunta;
  updateProgress();
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";
  perguntaAtual.opcoes.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarResposta(i, btn);
    opcoesDiv.appendChild(btn);
  });
}

function verificarResposta(i, btn) {
  Array.from(document.querySelectorAll("#opcoes button")).forEach(b => b.disabled = true);
  const correta = i === perguntaAtual.correta;
  const casas = document.querySelectorAll("#tabuleiro .casa");

  if (correta) {
    acertos++;
    btn.classList.add("correct");
    casas[progresso].style.background = "green";
    let base = (perguntaAtual.dificuldade === "dificil") ? 15 :
               (perguntaAtual.dificuldade === "medio") ? 10 : 5;
    let fator = ((100 - companyState) / 100) * 0.5 + 0.5;
    companyState += base * fator;
  } else {
    btn.classList.add("incorrect");
    casas[progresso].style.background = "red";
    let base = (perguntaAtual.dificuldade === "facil") ? 10 :
               (perguntaAtual.dificuldade === "medio") ? 5 : 2;
    let fator = (companyState / 100) * 0.5 + 0.5;
    companyState -= base * fator;
    erros++;
  }

  progresso++;
  companyState = Math.min(Math.max(companyState, 0), 100);
  perguntasRespondidas++;

  if (erros >= MAX_ERROS) {
    exibirDerrota();
    return;
  }

  setTimeout(() => {
    let textoExp = perguntaAtual.explicacoes ?
                   perguntaAtual.explicacoes[i] :
                   (correta ? perguntaAtual.detalhesCorreto : perguntaAtual.detalhesIncorreto);
    mostrarExplicacao(textoExp);
  }, 1000);

  // **Aqui movemos a imagem apenas depois de verificar a resposta**
  moverImagem();
}

// Telas e Feedback
function mostrarExplicacao(texto) {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("explicacao").classList.remove("hidden");
  document.getElementById("explicacaoTexto").textContent = texto;
  document.getElementById("btnContinuar").textContent = (perguntasRespondidas >= TOTAL_PERGUNTAS)
    ? "Resultado" : "Próxima Pergunta";
}

function proximaPergunta() {
  document.getElementById("explicacao").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  carregarPergunta();
}

function exibirResultado() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");

    let mensagemFinal = ""; // Variável para armazenar a mensagem final

    if (acertos === TOTAL_PERGUNTAS) {
        mensagemFinal = `${nomeJogador}, gestão impecável! A empresa está prosperando sob sua liderança!`;
    } else if (acertos >= 8) {
        mensagemFinal = `${nomeJogador}, excelente desempenho! Sua gestão trouxe ótimos resultados para a empresa.`;
    } else if (acertos >= 6) {
        mensagemFinal = `${nomeJogador}, bom trabalho! A empresa está estável, mas há espaço para melhorias.`;
    } else if (acertos >= 4) {
        mensagemFinal = `${nomeJogador}, desempenho razoável. A empresa enfrentou alguns desafios, mas se manteve.`;
    } else {
        mensagemFinal = `${nomeJogador}, sua gestão precisa melhorar! A empresa está em dificuldades. Revise suas estratégias!`;
    }


    document.getElementById("mensagem").innerHTML = mensagemFinal; // Usa a mensagem dinâmica
    document.getElementById("pontuacao").textContent =
        "Você acertou " + acertos + " de " + TOTAL_PERGUNTAS + " perguntas.";

    const rankingAntigo = document.getElementById("ranking");
    if (rankingAntigo) rankingAntigo.remove();

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: acertos })
    })
    .then(res => res.json())
    .then(() => fetch('http://localhost:3000/ranking?score=' + acertos))
    .then(res => res.json())
    .then(data => mostrarRanking(data.percentile))
    .catch(err => console.error(err));
}
function exibirDerrota() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("explicacao").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("mensagem").textContent = "Você errou 4 perguntas e perdeu o jogo. Tente novamente!";
  document.getElementById("pontuacao").textContent = "Você acertou " + acertos + " perguntas antes de perder.";
}

function mostrarRanking(percentile) {
  const rankingDiv = document.createElement("div");
  rankingDiv.id = "ranking";
  rankingDiv.innerHTML = `
    <svg width="120" height="120">
      <circle cx="60" cy="60" r="50" stroke="#ddd" stroke-width="10" fill="none" />
      <circle cx="60" cy="60" r="50" stroke="#27AE60" stroke-width="10" fill="none"
         stroke-dasharray="314" stroke-dashoffset="${314 - (percentile / 100) * 314}"
         transform="rotate(-90 60 60)" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="24" fill="#2C3E50">${percentile}%</text>
    </svg>
    <p>Você superou ${percentile}% dos jogadores.</p>
  `;
  document.getElementById("resultado").appendChild(rankingDiv);
}

//Tabuleiro
import { criarTabuleiro, excluirImagem, apagarTabuleiro, moverImagem } from "./tabuleiro.js";

    // Captura o src da imagem do personagem
    personagemSelecionado = card.querySelector('img').src;
  });
});

document.getElementById("btnIniciar").addEventListener("click", iniciarJogo);
document.getElementById("btnReiniciar").addEventListener("click", reiniciarJogo);
document.getElementById("btnContinuar").addEventListener("click", proximaPergunta);

function reiniciarJogo() {
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  document.getElementById("company-bar-container").classList.add("hidden");
  perguntasRespondidas = 0;
  acertos = 0;
  companyState = 50;
  erros = 0;
  progresso = 0;
  indicesUsados.clear();
  apagarTabuleiro();
  excluirImagem();
}
