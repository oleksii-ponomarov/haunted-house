import * as THREE from "three";

import {
  doorColorTexture,
  doorAlphaTexture,
  doorNormalTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorRoughnessTexture,
  doorMetalnessTexture,
  windowColorTexture,
  roofColorTexture,
  roofNormalTexture,
  roofAmbientOcclusionTexture,
  roofRoughnessTexture,
  bricksColorTexture,
  bricksAmbientOcclusionTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
  bushColorTexture,
  bushNormalTexture,
  bushRoughnessTexture,
  bushAmbientOcclusionTexture,
  bushHeightTexture,
  woodColorTexture,
  woodNormalTexture,
  woodRoughnessTexture,
  woodAmbientOcclusionTexture,
} from "../textures";

const house = new THREE.Group();

// Walls
const wallsWidth = 4;
const wallsHeight = 3;
const wallsDepth = 4;
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
  new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    normalMap: bricksNormalTexture,
    aoMap: bricksAmbientOcclusionTexture,
    roughnessMap: bricksRoughnessTexture,
  })
);
walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.position.y = wallsHeight / 2;
walls.castShadow = true;
walls.receiveShadow = true;
house.add(walls);

// Roof
const roofHeight = 2;
const roof = new THREE.Group();
house.add(roof);
const roofUp = new THREE.Mesh(
  new THREE.ConeGeometry(wallsDepth - 0.5, roofHeight, 4, 1),
  new THREE.MeshStandardMaterial({
    map: roofColorTexture,
    normalMap: roofNormalTexture,
    aoMap: roofAmbientOcclusionTexture,
    roughnessMap: roofRoughnessTexture,
  })
);
roofUp.rotation.y = Math.PI * 0.25;
roofUp.position.y = wallsHeight + roofHeight / 2;
roofUp.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(roofUp.geometry.attributes.uv.array, 2)
);
const roofDown = new THREE.Mesh(
  new THREE.PlaneGeometry(wallsDepth + 1, wallsDepth + 1),
  new THREE.MeshStandardMaterial({
    map: woodColorTexture,
    aoMap: woodAmbientOcclusionTexture,
    normalMap: woodNormalTexture,
    roughnessMap: woodRoughnessTexture,
  })
);
roofDown.rotation.x = Math.PI * 0.5;
roofDown.position.y = wallsHeight - 0.001;
roofDown.receiveShadow = true;
roofUp.castShadow = true;
roofDown.castShadow = true;
roof.add(roofUp, roofDown);

// Door
const doorHeight = 2.5;
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.5, doorHeight, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    alphaMap: doorAlphaTexture,
    transparent: true,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);
door.material.displacementScale = 0.1;
door.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);
door.position.z = wallsDepth / 2 + 0.001;
door.position.y = doorHeight / 2 - 0.1;
house.add(door);

// Window
const aperture = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1.5),
  new THREE.MeshStandardMaterial({
    map: windowColorTexture,
  })
);
aperture.rotation.y = Math.PI / 2;
aperture.position.x = wallsWidth / 2 + 0.001;
aperture.position.y = wallsHeight / 2;
aperture.material.metalness = 0.3;
aperture.material.roughness = 0.6;
house.add(aperture);

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 32, 32);
const bushMaterial = new THREE.MeshStandardMaterial({
  map: bushColorTexture,
  roughnessMap: bushRoughnessTexture,
  normalMap: bushNormalTexture,
  aoMap: bushAmbientOcclusionTexture,
  displacementMap: bushHeightTexture,
});
bushMaterial.displacementScale = 0.5;
bushGeometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bushGeometry.attributes.uv.array, 2)
);

const bushes = [
  { scale: 0.5, x: 1.75, z: 3 },
  { scale: 0.25, x: 2.25, z: 3 },
  { scale: 0.75, x: -1.5, z: 3 },
  { scale: 0.35, x: -1.75, z: 3.75 },
];

for (let { scale, x, z } of bushes) {
  const bush = new THREE.Mesh(bushGeometry, bushMaterial);
  bush.castShadow = true;
  bush.receiveShadow = true;
  bush.position.set(x, scale, z);
  bush.scale.set(scale, scale, scale);
  house.add(bush);
}

// Door light
const doorLight = new THREE.PointLight("#ff7d46", 1, 7);
doorLight.position.set(0, 2.8, 2.3);
doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
house.add(doorLight);

export default house;
