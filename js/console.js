const consoles = [
  { name: 'Game Boy', year: 1989, img: 'img/gameboy.jpg' },
  { name: 'Game Boy Color', year: 1998, img: 'img/gameboycolor.jpg' },
  { name: 'Game Boy Advance', year: 2001, img: 'img/gameboyadvance.jpg' },
  { name: 'Nintendo DS', year: 2004, img: 'img/nintendods.jpg' },
  { name: 'Nintendo 3DS', year: 2011, img: 'img/nintendo3ds.jpg' },
  { name: 'Nintendo Switch Lite', year: 2019, img: 'img/switchlite.jpg' }
];

let shuffledConsoles = [...consoles].sort(() => Math.random() - 0.5);

function createPuzzle() {
  const puzzleContainer = document.getElementById('console-puzzle');
  puzzleContainer.innerHTML = '';
  shuffledConsoles.forEach((console, index) => {
    const consoleDiv = document.createElement('div');
    consoleDiv.classList.add('console-item');
    consoleDiv.dataset.year = console.year;
    consoleDiv.draggable = true;
    consoleDiv.dataset.index = index;
    consoleDiv.innerHTML = `<img src="${console.img}" alt="${console.name}"><p>${console.name}</p>`;
    puzzleContainer.appendChild(consoleDiv);
  });
  addDragAndDropEvents();
}

function addDragAndDropEvents() {
  const items = document.querySelectorAll('.console-item');
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
  });
}

let draggedItem = null;

function handleDragStart(event) {
  draggedItem = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragging');
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  if (draggedItem !== this) {
    const puzzleContainer = document.getElementById('console-puzzle');
    const items = Array.from(puzzleContainer.children);
    const draggedIndex = items.indexOf(draggedItem);
    const targetIndex = items.indexOf(this);

    if (draggedIndex > targetIndex) {
      puzzleContainer.insertBefore(draggedItem, this);
    } else {
      puzzleContainer.insertBefore(draggedItem, this.nextSibling);
    }
  }
  draggedItem.classList.remove('dragging');
  draggedItem = null;
}

function checkOrder() {
  const items = document.querySelectorAll('.console-item');
  let correct = true;
  items.forEach((item, index) => {
    if (parseInt(item.dataset.year) !== consoles[index].year) {
      correct = false;
    }
  });
  if (correct) {
    alert('Bravo ! Vous avez mis les consoles dans le bon ordre !');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    alert('Dommage, réessayez !');
  }
}

window.onload = () => {
  createPuzzle();
  document.getElementById('validate-order').addEventListener('click', checkOrder);
};
