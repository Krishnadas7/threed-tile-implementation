// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OpenStreetMapsProvider } from 'three-tile';
// // import Map from 'three-tile'; // Correct for default exports

// const MapComponent = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//     camera.position.z = 5;

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     mountRef.current.appendChild( renderer.domElement );

//     // Create Three-Tile Map object
//     const mapProvider = new OpenStreetMapsProvider(); // Example: OpenStreetMap
//     const map = new MapView(MapView.PLANAR, mapProvider); 
//     scene.add(map);

//     // Scale the map (optional)
//     map.scale.set(0.001, 0.001, 0.001); 

//     // Render loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render( scene, camera );
//     };

//     animate();

//     // Cleanup on component unmount
//     return () => {
//       renderer.dispose(); 
//     };
//   }, []);

//   return (
//     <div ref={mountRef} />
//   );
// };

// export default MapComponent;