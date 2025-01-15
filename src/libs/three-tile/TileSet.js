import Tile from './Tile';

export default class TileSet {
  constructor(json) {
    this.json = json;
    this.rootTile = new Tile(json.root);
  }

  getRootTile() {
    return this.rootTile;
  }
}
