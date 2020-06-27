/**help */
function log(message) {
  console.log('>' + message);
};

/** app */
const cards = document.querySelectorAll('.card');
// Ele vai pegar todos os elementos que tem a classe .cards;
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
// para cada card...
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  log('Card: Start dragging');
};

function drag() {
  log('Card: is dragging');
};

function dragend() {
  log('Card: Stop drag');
};
