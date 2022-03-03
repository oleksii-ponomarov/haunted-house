import * as THREE from "three";

import {
  grassColorTexture,
  grassNormalTexture,
  grassRoughnessTexture,
  grassAmbientOcclusionTexture,
} from "../textures";

const land = new THREE.Mesh(
  new THREE.PlaneGeometry(55, 55),
  new THREE.MeshStandardMaterial({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    roughnessMap: grassRoughnessTexture,
    normalMap: grassNormalTexture,
  })
);
land.rotation.x = -Math.PI * 0.5;
land.position.y = 0;
land.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(land.geometry.attributes.uv.array, 2)
);
land.receiveShadow = true;

export default land;
