import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function MountRef() {
  const myref = useRef(null);

  useEffect(() => {
    if (myref.current) {
      // Create the scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#F0F0F0');

      // Set up the camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5; // Move the camera back to see the tiles

      // Create a common geometry for tiles
      const tileGeometry = new THREE.BoxGeometry(1, 1, 1); // Cubes of size 1x1x1

      // Tile 1 (Red)
      const material1 = new THREE.MeshLambertMaterial({ color: '#FF0000' });
      const tile1 = new THREE.Mesh(tileGeometry, material1);
      tile1.position.set(-2, 0, 0); // Position the tile to the left
      scene.add(tile1);

      // Tile 2 (Blue)
      const material2 = new THREE.MeshLambertMaterial({ color: '#0000FF' });
      const tile2 = new THREE.Mesh(tileGeometry, material2);
      tile2.position.set(0, 0, 0); // Position the tile in the center
      scene.add(tile2);

      // Tile 3 (Green)
      const material3 = new THREE.MeshLambertMaterial({ color: '#00FF00' });
      const tile3 = new THREE.Mesh(tileGeometry, material3);
      tile3.position.set(2, 0, 0); // Position the tile to the right
      scene.add(tile3);

      // Set up the light
      const light = new THREE.DirectionalLight(0xFFFFFF, 1); // White light
      light.position.set(1, 1, 1);
      scene.add(light);

      // Set up the renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      myref.current.appendChild(renderer.domElement); // Add the canvas to the DOM

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the tiles
        tile1.rotation.x += 0.01;
        tile1.rotation.y += 0.01;

        tile2.rotation.x += 0.01;
        tile2.rotation.y += 0.01;

        tile3.rotation.x += 0.01;
        tile3.rotation.y += 0.01;

        // Re-render the scene
        renderer.render(scene, camera);
      };

      animate(); // Start the animation loop

      // Update the camera aspect ratio and renderer size on window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      // Clean up the renderer and event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
        if (myref.current) {
          myref.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return (
    <div ref={myref} style={{ width: '100%', height: '100vh' }}>
      <div style={{ position: 'absolute' }}>ddjk</div>
    </div>
  );
}

export default MountRef;
