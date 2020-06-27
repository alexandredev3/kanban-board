/**help */
function log(message) {
  console.log('>' + message);
};

/** app */
const cards = document.querySelectorAll('.card');
// Ele vai pegar todos os elementos que tem a classe .cards;
const dropzones = document.querySelectorAll('.dropzone');

/* Cards */
cards.forEach(card => {
// para cada card...
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  //this = card.
  // log('Card: Start dragging');
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

  this.classList.add('is-dragging');
  this.style.cursor = 'move';
  this.style.opacity = '0.5';
};

function drag() {
  // log('Card: is dragging');
};

function dragend() {
  // log('Card: Stop drag');
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

  this.classList.remove('is-dragging');
  this.removeAttribute('style');
};

/* Feature Drog Cards */

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragenter() {
  // this = dropzone
  // log('Dropzone: Enter in zone');
};

function dragover() {
  // this = dropzone
  // log('Dropzone: In the zone');
  this.style.background = '#4cd13711';

  /**pega o cardão que esta sendo arrastado */
  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
  // ele vai ser colocado como filho no dropzone.
};

function dragleave() {
  // this = dropzone
  // log('Dropzone: Leave zone');

  this.removeAttribute('style');
};

function drop() {
  // this = dropzone
  // log('Dropzone: Dropped');
  this.removeAttribute('style');
};