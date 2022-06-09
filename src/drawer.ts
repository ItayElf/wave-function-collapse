const TILE_SIZE = 32;

const getTileImageName = (value: number) =>
  `./assets/tiles/tile${Math.log2(value) + 1}.png`;

const getCtx = () => {
  const canvas = document.querySelector("canvas#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw Error("No ctx");
  }
  canvas.width = GRID_SIZE * TILE_SIZE;
  canvas.height = GRID_SIZE * TILE_SIZE;
  const pixelRatio = window.devicePixelRatio;
  ctx.scale(pixelRatio, pixelRatio);
  return ctx;
};

const drawBoard = (ctx: CanvasRenderingContext2D, board: number[][]) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      };
      img.src = getTileImageName(board[i][j]);
    }
  }
};
