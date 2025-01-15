import * as THREE from 'three';
import { useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import image from './new.jpeg'

function NewThree() {
  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('');

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    camera.position.z = 5;
    const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
  image,
  () => {
    console.log('Texture loaded successfully!');
  },
  undefined,
  (error) => {
    console.error('Error loading texture:', error);
  }
);
    const geometry = new THREE.DodecahedronGeometry();
    const material = new THREE.MeshLambertMaterial({
      map:texture,
      emissive:true
    });
    const dodecahedron = new THREE.Mesh(geometry, material);

    // Create the box geometry and material
    const boxGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: '#1C3434',
      emissive: '#1C3434',
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = -1.5;

    // Add objects to the scene
    scene.add(dodecahedron);
    scene.add(box);

    // Add light
    const light = new THREE.SpotLight(0x006769,100); // White light
          light.position.set(1,1,1);
          scene.add(light);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    document.getElementById('canvas')?.appendChild(renderer.domElement);
    
   
    const controls = new OrbitControls(camera,renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = true
    function animate(){
      requestAnimationFrame(animate)
    //   dodecahedron.rotation.x += 0.01
      dodecahedron.rotation.y += 0.01
      
      box.rotation.y+=0.005
      controls.update()
      renderer.render(scene, camera);
    }
    animate()

    window.addEventListener('resize',()=>{
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth / window.innerHeight)

    })
  }, []);

  return (
    <div
      id="canvas"
      style={{
        width: '100%',
        height: '100vh',
      }}
    ></div>
  );
}

export default NewThree;
