const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const scale = 20;
canvas.width = scale * 10;
canvas.height = scale * 20;

context.scale(scale, scale);

// Créer une pièce Tetris aléatoire
function createPiece(type) {
  switch(type) {
    case 'T':
      return [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
    case 'O':
      return [
        [1, 1],
        [1, 1],
      ];
    case 'L':
      return [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ];
    case 'J':
      return [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
    case 'I':
      return [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
    case 'S':
      return [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ];
    case 'Z':
      return [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ];
  }
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = 'green';
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

function draw() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(piece, {x: 5, y: 5});
}

const piece = createPiece('T');

function update() {
  draw();
  requestAnimationFrame(update);
}

update();
