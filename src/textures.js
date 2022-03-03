import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load("/textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("/textures/door/alpha.jpg");
const doorNormalTexture = textureLoader.load("/textures/door/normal.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "/textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("/textures/door/height.jpg");
const doorRoughnessTexture = textureLoader.load("/textures/door/roughness.jpg");
const doorMetalnessTexture = textureLoader.load("/textures/door/metalness.jpg");

const windowColorTexture = textureLoader.load("/textures/window/color.jpg");

const roofColorTexture = textureLoader.load("/textures/roof/color.jpg");
const roofNormalTexture = textureLoader.load("/textures/roof/normal.jpg");
const roofAmbientOcclusionTexture = textureLoader.load(
  "/textures/roof/ambientOcclusion.jpg"
);
const roofRoughnessTexture = textureLoader.load("/textures/roof/roughness.jpg");

const bricksColorTexture = textureLoader.load("/textures/bricks/color.jpg");
const bricksAmbientOcclusionTexture = textureLoader.load(
  "/textures/bricks/ambientOcclusion.jpg"
);
const bricksNormalTexture = textureLoader.load("/textures/bricks/normal.jpg");
const bricksRoughnessTexture = textureLoader.load(
  "/textures/bricks/roughness.jpg"
);

const bushColorTexture = textureLoader.load("/textures/grass/color.jpg");
const bushNormalTexture = textureLoader.load("/textures/grass/normal.jpg");
const bushRoughnessTexture = textureLoader.load(
  "/textures/grass/roughness.jpg"
);
const bushAmbientOcclusionTexture = textureLoader.load(
  "/textures/grass/ambientOcclusion.jpg"
);

const grassColorTexture = textureLoader.load("/textures/grass/color.jpg");
const grassNormalTexture = textureLoader.load("/textures/grass/normal.jpg");
const grassRoughnessTexture = textureLoader.load(
  "/textures/grass/roughness.jpg"
);
const grassAmbientOcclusionTexture = textureLoader.load(
  "/textures/grass/ambientOcclusion.jpg"
);
const bushHeightTexture = textureLoader.load("/textures/bush/height.jpg");

const woodColorTexture = textureLoader.load("/textures/wood/color.jpg");
const woodNormalTexture = textureLoader.load("/textures/wood/normal.jpg");
const woodRoughnessTexture = textureLoader.load("/textures/wood/roughness.jpg");
const woodAmbientOcclusionTexture = textureLoader.load(
  "/textures/wood/ambientOcclusion.jpg"
);

const stoneColorTexture = textureLoader.load("/textures/stone/color.jpg");
const stoneNormalTexture = textureLoader.load("/textures/stone/normal.jpg");
const stoneAmbientOcclusionTexture = textureLoader.load(
  "/textures/stone/ambientOcclusion.jpg"
);

const stoneSideColorTexture = textureLoader.load(
  "/textures/stone/side/color.jpg"
);
const stoneSideNormalTexture = textureLoader.load(
  "/textures/stone/side/normal.jpg"
);
const stoneSideAmbientOcclusionTexture = textureLoader.load(
  "/textures/stone/side/ambientOcclusion.jpg"
);

const stoneUpSideColorTexture = textureLoader.load(
  "/textures/stone/side/colorUp.jpg"
);
const stoneUpSideNormalTexture = textureLoader.load(
  "/textures/stone/side/normalUp.jpg"
);
const stoneUpSideAmbientOcclusionTexture = textureLoader.load(
  "/textures/stone/side/ambientOcclusion.jpg"
);

stoneUpSideColorTexture.repeat.set(3, 1);
stoneUpSideNormalTexture.repeat.set(3, 1);
stoneUpSideAmbientOcclusionTexture.repeat.set(3, 1);

stoneUpSideColorTexture.wrapS = THREE.RepeatWrapping;
stoneUpSideNormalTexture.wrapS = THREE.RepeatWrapping;
stoneUpSideAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.repeat.set(10, 10);
grassNormalTexture.repeat.set(10, 10);
grassRoughnessTexture.repeat.set(10, 10);
grassAmbientOcclusionTexture.repeat.set(10, 10);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;

export {
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
  grassColorTexture,
  grassNormalTexture,
  grassRoughnessTexture,
  grassAmbientOcclusionTexture,
  bushHeightTexture,
  woodColorTexture,
  woodNormalTexture,
  woodRoughnessTexture,
  woodAmbientOcclusionTexture,
  stoneColorTexture,
  stoneNormalTexture,
  stoneAmbientOcclusionTexture,
  stoneSideColorTexture,
  stoneSideNormalTexture,
  stoneSideAmbientOcclusionTexture,
  stoneUpSideColorTexture,
  stoneUpSideNormalTexture,
  stoneUpSideAmbientOcclusionTexture,
};
