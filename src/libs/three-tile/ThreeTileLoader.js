import * as THREE from 'three';
import TileSet from './TileSet';

export class ThreeTileLoader {
  constructor() {
    this.manager = new THREE.LoadingManager();
  }

  load(url, onLoad, onProgress, onError) {
    // Load the tileset
    const loader = new THREE.FileLoader(this.manager);
    loader.load(
      url,
      (data) => {
        if(!data){
            console.log('err');
            
        }
        console.log(data);
        
        const json = JSON.parse(data);
        const tileSet = new TileSet(json);
        onLoad(tileSet.getRootTile());
      },
      onProgress,
      onError
    );
  }
}

export default ThreeTileLoader;
