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
