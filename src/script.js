import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

import house from "./objects/house";
import graves from "./objects/graves";
import land from "./objects/land";
import ghosts from "./objects/ghosts";
import { ambientLight, moonLight } from "./environment/lights";

/**
 * Base
 */
// Debug
const gui = new dat.GUI();
gui.hide();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.add(house, graves, land, ambientLight, moonLight);

for (let ghost of ghosts) {
  scene.add(ghost);
}

// Fog
const fog = new THREE.Fog("#262837", 1, 20);
scene.fog = fog;

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 7;
camera.position.y = 4;
camera.position.z = 8;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 20;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#262837");
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update ghosts
  const ghost1Angle = 0.5 * elapsedTime;
  ghosts[0].position.x = 7 * Math.cos(ghost1Angle);
  ghosts[0].position.z = 7 * Math.sin(ghost1Angle);
  ghosts[0].position.y = 4 * Math.sin(ghost1Angle * 2);

  const ghost2Angle = -elapsedTime;
  ghosts[1].position.x = (5 + Math.sin(elapsedTime)) * Math.cos(ghost2Angle);
  ghosts[1].position.z = (5 + Math.sin(elapsedTime)) * Math.sin(ghost2Angle);
  ghosts[1].position.y =
    3 * Math.sin(ghost2Angle * 4) + Math.sin(ghost2Angle * 2.5);

  const ghost3Angle = -0.75 * elapsedTime;
  ghosts[2].position.x =
    (9 + Math.cos(elapsedTime * 2)) * Math.cos(ghost3Angle);
  ghosts[2].position.z =
    (7 + Math.cos(elapsedTime * 2)) * Math.sin(ghost3Angle);
  ghosts[2].position.y = 5 * Math.sin(ghost1Angle * 5);

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
