const GRID_SIZE = 32;

const getBoard = (gridSize: number) => {
  const arr = [];
  for (let i = 0; i < gridSize; i++) {
    const subarr = [];
    for (let j = 0; j < gridSize; j++) {
      subarr.push(65535);
    }
    arr.push(subarr);
  }
  return arr;
};

const countTiles = (value: number) => {
  let count = 0;
  while (value > 0) {
    count++;
    value = value & (value - 1);
  }
  return count;
};

const isCollapsed = (board: number[][]) => {
  let res = true;
  board.forEach((sub) =>
    sub.forEach((v) => (countTiles(v) != 1 ? (res = false) : (res = res)))
  );
  return res;
};

const getMinTileLocation = (board: number[][]) => {
  let mins: number[][] = [];
  let min = 16;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const c = countTiles(board[i][j]);
      if (c < min && c > 1) {
        min = c;
        mins = [[i, j]];
      } else if (c == min) {
        mins.push([i, j]);
      }
    }
  }
  return mins[Math.floor(Math.random() * mins.length)];
};

const getTileValues = (cell: number) => {
  const tiles = [];
  for (let t in Tiles) {
    const value = Number(t);
    if ((cell & value) != 0) {
      tiles.push(value);
    }
  }
  return tiles;
};

const collapseAt = (board: number[][], cords: number[]) => {
  const tiles = getTileValues(board[cords[0]][cords[1]]);
  board[cords[0]][cords[1]] = tiles[Math.floor(Math.random() * tiles.length)];
};

const isInStack = (stack: number[][], cords: number[]) => {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === cords[0] && stack[i][1] === cords[1]) return true;
  }
  return false;
};

const propagate = (board: number[][], cords: number[]) => {
  const stack = [cords];

  while (stack.length > 0) {
    const curCords = stack.pop();
    if (!curCords) continue;
    const ns = getValidNeighbors(board, curCords);
    for (let j = 0; j < ns.length; j++) {
      const d = ns[j];
      let dValue = board[d[0]][d[1]];
      const dValueBackup = dValue;
      const valid = getMatchingFromNeighbors(board, d);
      dValue = (dValue & valid) === 0 ? 1 : dValue & valid;
      if (dValue != dValueBackup && !isInStack(stack, d)) {
        stack.push(d);
      }
      board[d[0]][d[1]] = dValue;
    }
  }
};

const iterate = (board: number[][]) => {
  while (!isCollapsed(board)) {
    const cords = getMinTileLocation(board);
    collapseAt(board, cords);
    propagate(board, cords);
  }
};
