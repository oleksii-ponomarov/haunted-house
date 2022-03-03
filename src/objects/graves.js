import * as THREE from "three";

import {
  stoneColorTexture,
  stoneNormalTexture,
  stoneAmbientOcclusionTexture,
  stoneSideColorTexture,
  stoneSideNormalTexture,
  stoneSideAmbientOcclusionTexture,
  stoneUpSideColorTexture,
  stoneUpSideNormalTexture,
  stoneUpSideAmbientOcclusionTexture,
} from "../textures";

const graves = new THREE.Group();

const graveMaterial = new THREE.MeshStandardMaterial({
  map: stoneColorTexture,
  aoMap: stoneAmbientOcclusionTexture,
  normalMap: stoneNormalTexture,
});
const graveSideMaterial = new THREE.MeshStandardMaterial({
  map: stoneSideColorTexture,
  aoMap: stoneSideAmbientOcclusionTexture,
  normalMap: stoneSideNormalTexture,
});
const graveUpSideMaterial = new THREE.MeshStandardMaterial({
  map: stoneUpSideColorTexture,
  aoMap: stoneUpSideAmbientOcclusionTexture,
  normalMap: stoneUpSideNormalTexture,
});

const graveObject = new THREE.Group();
const graveUp = new THREE.Mesh(
  new THREE.CylinderGeometry(0.35, 0.35, 0.15, 16, 1, false, 0, Math.PI),
  [graveUpSideMaterial, graveMaterial, graveMaterial]
);
graveUp.castShadow = true;
const graveDown = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.5, 0.15), [
  graveSideMaterial,
  graveSideMaterial,
  graveSideMaterial,
  graveSideMaterial,
  graveMaterial,
  graveMaterial,
]);
graveDown.castShadow = true;

graveUp.rotation.z = Math.PI * 0.5;
graveUp.rotation.y = Math.PI * 0.5;
graveUp.position.y = 1.5 / 2;
graveObject.position.y = 1.35 / 2;
graveObject.add(graveUp, graveDown);

for (let i = 0; i < 50; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 5 + 8 * Math.random();
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const grave = graveObject.clone();
  grave.position.x = x;
  grave.position.z = z;
  grave.rotation.y = (Math.random() - 0.5) * Math.PI * 0.25;
  grave.rotation.z = (Math.random() - 0.5) * Math.PI * 0.1;
  graves.add(grave);
}

export default graves;
