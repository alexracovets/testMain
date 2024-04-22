import * as THREE from 'three';

const params = {
    modelSize: 10,
    gridSize: 0.2
};

const rayCaster = new THREE.Raycaster();
const reusableVector3 = new THREE.Vector3();
const direction = new THREE.Vector3(0, 0, 1);

function isInsideMesh(pos, mesh) {
    rayCaster.set(pos, direction);
    const intersects = rayCaster.intersectObject(mesh, false);
    return intersects.length % 2 === 1;
}

function collectMeshes(scene) {
    const meshes = [];
    scene.traverse(child => {
        if (child instanceof THREE.Mesh) {
            child.material.side = THREE.DoubleSide;
            meshes.push(child);
        }
    });
    return meshes;
}

function adjustSceneScaleAndPosition(scene, boundingBox, scaleFactor) {
    const center = boundingBox.getCenter(new THREE.Vector3()).multiplyScalar(-scaleFactor);
    scene.scale.multiplyScalar(scaleFactor);
    scene.position.copy(center);
}

function voxelizeModel(importedScene, count, gridSize) {
    const importedMeshes = collectMeshes(importedScene);
    const boundingBox = new THREE.Box3().setFromObject(importedScene);
    const size = boundingBox.getSize(new THREE.Vector3());
    const scaleFactor = params.modelSize / size.length();

    adjustSceneScaleAndPosition(importedScene, boundingBox, scaleFactor);

    function voxelizer(gridSize, count) {
        const positions = new Float32Array(count * 3);
        let posIndex = 0;
        const newPosition = [];
        boundingBox.setFromObject(importedScene);
        boundingBox.min.y += 0.5 * gridSize;

        for (let i = boundingBox.min.x; i <= boundingBox.max.x; i += gridSize) {
            for (let j = boundingBox.min.y; j <= boundingBox.max.y; j += gridSize) {
                for (let k = boundingBox.min.z; k <= boundingBox.max.z; k += gridSize) {
                    reusableVector3.set(i, j, k);
                    for (const mesh of importedMeshes) {
                        if (isInsideMesh(reusableVector3, mesh)) {
                            positions[posIndex++] = i;
                            positions[posIndex++] = j;
                            positions[posIndex++] = k;
                            newPosition.push([i, j, k]);
                        }
                    }
                }
            }
        }

        return positions;
    }

    return voxelizer(gridSize, count);
}

export default voxelizeModel;
