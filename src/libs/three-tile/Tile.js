import * as THREE from 'three';

export default class Tile {
  constructor(tileData) {
    console.log(tileData);
    
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  getMesh() {
    return this.mesh;
  }
}
