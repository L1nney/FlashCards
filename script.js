const flashcards = [
  {
    q: "Qual é o nome do encanador mais famoso dos videogames?",
    a: "Mario (Super Mario Bros) 🍄"
  },
  {
    q: "Qual jogo popular de construção é composto por blocos?",
    a: "Minecraft ⛏️"
  },
  {
    q: "Em 'The Legend of Zelda', qual é o nome do herói principal?",
    a: "Link (Zelda é a princesa!) 🗡️"
  },
  {
    q: "Qual empresa é a criadora do console PlayStation?",
    a: "Sony 🎮"
  },
  {
    q: "Qual jogo de Battle Royale popular tem construções e dancinhas?",
    a: "Fortnite 🕺"
  }
  const flashcards = [
  // 🎯 VALORANT
  {
    q: "Em Valorant, qual agente é especialista em cura e consegue ressuscitar aliados?",
    a: "Sage 🩺"
  },
  {
    q: "Qual agente do Valorant usa um arco para revelar a posição dos inimigos?",
    a: "Sova 🏹"
  },
  {
    q: "Qual é o nome do dispositivo que os atacantes precisam plantar em Valorant?",
    a: "Spike 💣"
  },

  // 🥷 GENSHIN IMPACT
  {
    q: "Em Genshin Impact, qual é o nome da companheira/mascote do Viajante?",
    a: "Paimon 🧚‍♀️"
  },
  {
    q: "A qual elemento corresponde a visão 'Anemo' em Genshin Impact?",
    a: "Vento 🌪️"
  },
  {
    q: "Qual é o nome da nação governada pelo Arconte Geo (Zhongli) em Genshin Impact?",
    a: "Liyue 🪨"
  },

  // 🎮 PLAYSTATION
  {
    q: "Qual é o nome do lendário 'Bom de Guerra' protagonista de God of War?",
    a: "Kratos 🪓"
  },
  {
    q: "Em 'The Last of Us', qual é o nome da garota imune à infecção que Joel protege?",
    a: "Ellie 👧"
  },
  {
    q: "Qual é o nome da caçadora protagonista da franquia 'Horizon Zero Dawn'?",
    a: "Aloy 🏹"
  },
  {
    q: "Qual é o famoso caçador de tesouros e protagonista da série 'Uncharted'?",
    a: "Nathan Drake 🧭"
  }
];

let currentIndex = 0;
let correctScore = 0;
let wrongScore = 0;

const card = document.getElementById('card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const counterEl = document.getElementById('counter');
const correctScoreEl = document.getElementById('correct-score');
const wrongScoreEl = document.getElementById('wrong-score');

function updateCard() {
  card.classList.remove('flipped');
  setTimeout(() => {
    questionEl.textContent = flashcards[currentIndex].q;
    answerEl.textContent = flashcards[currentIndex].a;
    counterEl.textContent = `Cartão ${currentIndex + 1} de ${flashcards.length}`;
  }, 200);
}

function flipCard() {
  card.classList.toggle('flipped');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

function markCorrect() {
  correctScore++;
  correctScoreEl.textContent = correctScore;
  nextCard();
}

function markWrong() {
  wrongScore++;
  wrongScoreEl.textContent = wrongScore;
  nextCard();
}

// Inicializa o primeiro cartão
updateCard();
