const boardSize = 8; // 8x8  world units is stupid
const Padding = 0.1; //padding is 5% of 8m 
const tileSize = 1.8; // minum tile size keep in mind padding on all sides
const fullTileSize = tileSize + Padding; //should equate to 2

const m = {
  boardSize: boardSize,
  tileSize: tileSize,
  padding: Padding,
  fullTileSize: fullTileSize,
};

export default m;

//x coord = col * (tileSize + padding aka 3*10)
//y coord = row * (tileSize + padding)
