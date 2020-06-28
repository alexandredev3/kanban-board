0/** app */
const cardElements = document.querySelectorAll('.card');
const dropzoneContainer = document.querySelector('.dropzone');
// Ele vai pegar todos os elementos que tem a classe .cards;
const input = document.querySelector('input');
const button = document.querySelector('button');
const dropzones = document.querySelectorAll('.dropzone');

const cards = JSON.parse(localStorage.getItem('card_list')) || [];

button.addEventListener('click', event => event.preventDefault())

function renderCards() {
  dropzoneContainer.innerHTML = '';

  for (let card of cards) {
    const cardElement = document.createElement('div');
    const cardText = document.createTextNode(card);

    cardElement.setAttribute('class', 'card');
    cardElement.setAttribute('draggable', 'true')
    
    cardElement.appendChild(cardText);
    dropzoneContainer.appendChild(cardElement);

    cardElement.addEventListener('dragstart', dragstart)
    cardElement.addEventListener('drag', drag)
    cardElement.addEventListener('dragend', dragend)

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
  }
}

renderCards();

function addCard() {
  const cardText = input.value;

  if (cardText.length === 0) {
    return alert('Campo obrigatório!')
  }

  cards.push(cardText);
  input.value = '';
  renderCards();
  saveToStorage();
};

button.onclick = addCard;

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

function saveToStorage() {
  localStorage.setItem('card_list', JSON.stringify(cards));
}
