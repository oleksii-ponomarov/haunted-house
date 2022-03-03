import * as THREE from "three";

const ghost1 = new THREE.PointLight("#ff0066", 2, 3);
ghost1.position.x = 5;
ghost1.position.y = 1;
ghost1.castShadow = true;
ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 7;

const ghost2 = new THREE.PointLight("#00ffff", 2, 3);
ghost2.position.x = -5;
ghost2.castShadow = true;
ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost2.shadow.camera.far = 7;

const ghost3 = new THREE.PointLight("#66ff00", 2, 3);
ghost3.position.z = 5;
ghost3.castShadow = true;
ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost3.shadow.camera.far = 7;

export default [ghost1, ghost2, ghost3];
