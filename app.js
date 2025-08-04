// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
 
      pergunta: "Qual era o nome do guerreiro que usava a armadura de pegasus em Os Cavaleiros do Zodíaco?",
      respostas: [
        { opcao: "Hyoga", "correto": false },
        { opcao: "Seiya", "correto": true },
        { opcao: "Shun", "correto": false },
        { opcao: "Shiryu", "correto": false }
      ]
    },
    {
      pergunta: "Em Yu Yu Hakusho, qual é o nome do protagonista que se sacrifica para salvar uma criança e acaba se tornando um detetive espiritual?",
      respostas: [
        { opcao: "Yusuke Urameshi", "correto": true },
        { opcao: "Hiei", "correto": false },
        { opcao: "Kurama", "correto": false },
        { opcao: "Kuwabara", "correto": false }
      ]
    },
    {
      pergunta: "Qual é o nome do anime que mostrava guerreiros enfrentando monstros em lutas digitais usando Digivices?",
      respostas: [
        { opcao: "Pokémon", "correto": false },
        { opcao: "Digimon Adventure", "correto": true },
        { opcao: "Beyblade", "correto": false },
        { opcao: "Medabots", "correto": false }
      ]
    },
    {
      pergunta: "Em Dragon Ball Z, quem foi o primeiro vilão a aparecer na saga dos Sayajins?",
      respostas: [
        { opcao: "Freeza", "correto": false },
        { opcao: "Raditz", "correto": true },
        { opcao: "Vegeta", "correto": false },
        { opcao: "Cell", "correto": false }
      ]
    },
    {
      pergunta: "Qual era o nome da protagonista de Sailor Moon?",
      respostas: [
        { opcao: "Sakura Kinomoto", "correto": false },
        { opcao: "Bulma", "correto": false },
        { opcao: "Serena Tsukino", "correto": true },
        { opcao: "Asuka Langley", "correto": false }
      ]
    },
    {
      pergunta: "Em Samurai X (Rurouni Kenshin), qual era o nome verdadeiro do protagonista antes de se tornar um andarilho?",
      respostas: [
        { opcao: "Kenshin Himura", "correto": true },
        { opcao: "Battousai", "correto": false },
        { opcao: "Shishio Makoto", "correto": false },
        { opcao: "Hajime Saito", "correto": false }
      ]
    },
    {
      pergunta: "Qual desses animes tinha um protagonista com um bastão mágico chamado Bastão Crescente?",
      respostas: [
        { opcao: "Dragon Ball", "correto": true },
        { opcao: "Sakura Card Captors", "correto": false },
        { opcao: "Yu Yu Hakusho", "correto": false },
        { opcao: "InuYasha", "correto": false }
      ]
    },
    {
      pergunta: "Qual é o nome da organização vilanesca que perseguia os protagonistas em Pokémon?",
      respostas: [
        { opcao: "Akatsuki", "correto": false },
        { opcao: "Team Rocket", "correto": true },
        { opcao: "Shishio Gang", "correto": false },
        { opcao: "DigiLords", "correto": false }
      ]
    },
    {
      pergunta: "Em Shurato, qual era o nome do reino espiritual onde se passa grande parte da história?",
      respostas: [
        { opcao: "Nirvana", "correto": false },
        { opcao: "Valhala", "correto": false },
        { opcao: "Yomi", "correto": false },
        { opcao: "Terra Sagrada", "correto": true }
      ]
    },
    {
      pergunta: "Qual era o nome do robô azul que tinha um gato robótico como parceiro em Megaman NT Warrior?",
      respostas: [
        { opcao: "Zero", "correto": false },
        { opcao: "Protoman", "correto": false },
        { opcao: "Megaman", "correto": true },
        { opcao: "Bass", "correto": false }
      ]
    }
  ]


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 0;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
