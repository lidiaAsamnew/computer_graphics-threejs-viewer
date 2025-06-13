import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { Interaction } from './interaction.js';
import { CameraAnimation } from './cameraAnimation.js';

/**
 * Main entry point for the 3D Product Viewer application
 * Initializes scene components and starts the animation loop
 */

const { scene, camera, renderer, controls } = initScene();
const product = createProduct();
scene.add(product);
addLighting(scene);

const interaction = new Interaction(camera, scene, renderer);
const cameraAnimation = new CameraAnimation(camera, controls);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    cameraAnimation.update();
    renderer.render(scene, camera);
}

animate(); 