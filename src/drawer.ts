const TILE_SIZE = (32 * 32) / GRID_SIZE;

const getTileImageName = (value: number) =>
  `./assets/tiles/tile${Math.log2(value) + 1}.svg`;

const getCtx = (gridSize: number, tileSize: number) => {
  const canvas = document.querySelector("canvas#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw Error("No ctx");
  }
  canvas.width = gridSize * tileSize;
  canvas.height = gridSize * tileSize;
  canvas.style.width = `${gridSize * tileSize}px`;
  canvas.style.height = `${gridSize * tileSize}px`;
  const pixelRatio = window.devicePixelRatio;
  ctx.scale(pixelRatio, pixelRatio);
  return ctx;
};

const drawBoard = (
  ctx: CanvasRenderingContext2D,
  board: number[][],
  tileSize: number
) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, i * tileSize, j * tileSize, tileSize, tileSize);
      };
      img.src = getTileImageName(board[i][j]);
    }
  }
};
