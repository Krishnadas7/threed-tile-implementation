import * as THREE from 'three';

export const loadTexture = (url) => {
  const loader = new THREE.TextureLoader();
  return loader.load(url);
};
