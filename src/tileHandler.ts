enum Tiles {
  Tile1 = 1,
  Tile2 = 2,
  Tile3 = 4,
  Tile4 = 8,
  Tile5 = 16,
  Tile6 = 32,
  Tile7 = 64,
  Tile8 = 128,
  Tile9 = 256,
  Tile10 = 512,
  Tile11 = 1024,
  Tile12 = 2048,
  Tile13 = 4096,
  Tile14 = 8192,
  Tile15 = 16384,
  Tile16 = 32768,
}

const getValidNeighbors = (board: number[][], cords: number[]) => {
  const ns = [];
  cords[0] - 1 >= 0 && ns.push([cords[0] - 1, cords[1]]);
  cords[1] - 1 >= 0 && ns.push([cords[0], cords[1] - 1]);
  cords[0] + 1 < board.length && ns.push([cords[0] + 1, cords[1]]);
  cords[1] + 1 < board[0].length && ns.push([cords[0], cords[1] + 1]);
  return ns;
};

const combineArrs = (arr1: number[], arr2: number[]) => {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] | arr2[i];
  }
};

const getRelativeIndex = (curCords: number[], d: number[]) => {
  if (curCords[0] > d[0]) return 0;
  else if (curCords[1] > d[1]) return 1;
  else if (curCords[0] < d[0]) return 2;
  else return 3;
};

const getMatchingFromNeighbors = (board: number[][], cords: number[]) => {
  const ns = getValidNeighbors(board, cords);
  let value = 65535;
  for (let i = 0; i < ns.length; i++) {
    const d = ns[i];
    value =
      value & getMathcingTiles(board[d[0]][d[1]])[getRelativeIndex(d, cords)];
  }
  return value;
};

// Returns what tiles are ok to put in left, top, right and bottom
const getMathcingTiles = (tileValue: number) => {
  const arr = [0, 0, 0, 0];
  if (tileValue & Tiles.Tile1.valueOf())
    combineArrs(arr, [63615, 62079, 62591, 61823]);
  if (tileValue & Tiles.Tile2.valueOf())
    combineArrs(arr, [6091, 4097, 7089, 4097]);
  if (tileValue & Tiles.Tile3.valueOf())
    combineArrs(arr, [4097, 7581, 4097, 7909]);
  if (tileValue & Tiles.Tile4.valueOf())
    combineArrs(arr, [4097, 4097, 7091, 7909]);
  if (tileValue & Tiles.Tile5.valueOf())
    combineArrs(arr, [6059, 4097, 4097, 7909]);
  if (tileValue & Tiles.Tile6.valueOf())
    combineArrs(arr, [6059, 7581, 4097, 4097]);
  if (tileValue & Tiles.Tile7.valueOf())
    combineArrs(arr, [4097, 7581, 7091, 4097]);
  if (tileValue & Tiles.Tile8.valueOf())
    combineArrs(arr, [1994, 3484, 2994, 3812]);
  if (tileValue & Tiles.Tile9.valueOf())
    combineArrs(arr, [1994, 4097, 2994, 3812]);
  if (tileValue & Tiles.Tile10.valueOf())
    combineArrs(arr, [1994, 3484, 2994, 4097]);
  if (tileValue & Tiles.Tile11.valueOf())
    combineArrs(arr, [4097, 3484, 2994, 3812]);
  if (tileValue & Tiles.Tile12.valueOf())
    combineArrs(arr, [1994, 3484, 4097, 3812]);
  if (tileValue & Tiles.Tile13.valueOf())
    combineArrs(arr, [63615, 62079, 62591, 61823]);
  if (tileValue & Tiles.Tile14.valueOf())
    combineArrs(arr, [61441, 61441, 61441, 61441]);
  if (tileValue & Tiles.Tile15.valueOf())
    combineArrs(arr, [61441, 61441, 61441, 61441]);
  if (tileValue & Tiles.Tile16.valueOf())
    combineArrs(arr, [61441, 61441, 61441, 61441]);
  return arr;
};
