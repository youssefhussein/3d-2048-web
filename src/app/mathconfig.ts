const boardSize = 8;
const Padding = 0.1;
const tileSize = (boardSize - (boardSize - 1) * Padding) / boardSize;

const m = {
  boardSize: boardSize,
  tileSize: tileSize,
  padding: Padding,
};

export default m;

//x coord = col * (tileSize + padding aka 3*10)
//y coord = row * (tileSize + padding)
