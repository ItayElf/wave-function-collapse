// const arr = getBoard();
// iterate(arr);
// const ctx = getCtx();
// drawBoard(ctx, arr);

const prepare = () => {
  const btn = document.querySelector("#generate") as HTMLButtonElement;
  const gridSizeInput = document.querySelector(
    "#grid-size-input"
  ) as HTMLInputElement;
  btn.onclick = () => {
    const gridSize = parseInt(gridSizeInput.value);
    const tileSize = (32 * 32) / gridSize;
    const arr = getBoard(gridSize);
    iterate(arr);
    const ctx = getCtx(gridSize, tileSize);
    drawBoard(ctx, arr, tileSize);
  };
  btn.click();
};

prepare();
