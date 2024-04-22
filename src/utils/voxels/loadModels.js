import { GLTFLoader } from "three/examples/jsm/Addons.js";
import voxelizeModel from "./voxelizeModel";

const models = [
    '/models/logo.glb',
    '/models/about.gltf',
    '/models/services.gltf',
    '/models/industries.gltf'
];
const loadModels = (modelIndex, count, gridSize) => {
    const loader = new GLTFLoader();
    loader.load(models[modelIndex], (gltf) => {
        const voxels = voxelizeModel(gltf.scene, count, gridSize);
        console.log(JSON.stringify(voxels));
    }, undefined, (error) => {
        console.error('Failed to load the model:', error);
    });
};

export default loadModels