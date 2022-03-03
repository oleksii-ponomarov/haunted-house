import * as THREE from "three";

// Ambient light
const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.1);

// Directional light
const moonLight = new THREE.DirectionalLight("#ffffff", 0.1);
moonLight.position.set(7, 8, -4);
moonLight.castShadow = true;
moonLight.shadow.camera.left = -15;
moonLight.shadow.camera.right = 15;
moonLight.shadow.camera.bottom = -10;
moonLight.shadow.camera.top = 10;
moonLight.shadow.camera.far = 25;

export { ambientLight, moonLight };
