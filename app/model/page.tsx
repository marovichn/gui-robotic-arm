/* import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const Model: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    controls: OrbitControls;

  const init = () => {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.width = "100%";

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Load model
    const loader = new OBJLoader();
    loader.load(
      "/arm-model.obj",
      (object: any) => {
        scene.add(object);
      },
      undefined,
      (error) => {
        console.log(error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Event listener for window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  init();

  return <canvas ref={canvasRef} />;
};

export default Model;
 */