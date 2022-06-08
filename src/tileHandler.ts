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

// Returns what tiles are ok to put in left, top, right and bottom
const getMathcingTiles = (tile: Tiles) => {
  switch (tile) {
    case Tiles.Tile1:
      return [65535, 65535, 65535, 65535];
    case Tiles.Tile2:
      return [6091, 4097, 7089, 4097];
    case Tiles.Tile3:
      return [4097, 7581, 4097, 7909];
    case Tiles.Tile4:
      return [4097, 4097, 7091, 7909];
    case Tiles.Tile5:
      return [6059, 4097, 4097, 7909];
    case Tiles.Tile6:
      return [6059, 7581, 4097, 4097];
    case Tiles.Tile7:
      return [4097, 7581, 7091, 4097];
    case Tiles.Tile8:
      return [6059, 7581, 7091, 7909];
    case Tiles.Tile9:
      return [6059, 4097, 7091, 7909];
    case Tiles.Tile10:
      return [6059, 7581, 7091, 4097];
    case Tiles.Tile11:
      return [4097, 7581, 7091, 7909];
    case Tiles.Tile12:
      return [6059, 7581, 4097, 7909];
    case Tiles.Tile13:
      return [65535, 65535, 65535, 65535];
    case Tiles.Tile14:
      return [61441, 61441, 61441, 61441];
    case Tiles.Tile15:
      return [61441, 61441, 61441, 61441];
    case Tiles.Tile16:
      return [61441, 61441, 61441, 61441];
    default:
      throw Error("Invalid tile: " + tile);
  }
};
