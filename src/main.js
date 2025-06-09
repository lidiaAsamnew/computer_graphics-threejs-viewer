import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { Interaction } from './interaction.js';
import { CameraAnimation } from './cameraAnimation.js';

/**
 * Main entry point for the 3D Product Viewer application
 * Initializes all components and starts the animation loop
 * Requirements fulfilled:
 * 1. Scene Setup - initScene()
 * 2. Product Creation - createProduct()
 * 3. Lighting - addLighting()
 * 4. Mouse Interaction - Interaction class
 * 5. Camera Animation - CameraAnimation class
 * 6. Animation Loop - requestAnimationFrame
 */

// Initialize the scene, camera, renderer, and controls
const { scene, camera, renderer, controls } = initScene();

// Create and add the product to the scene
const product = createProduct();
scene.add(product);

// Set up lighting
addLighting(scene);

// Initialize interaction handling
const interaction = new Interaction(camera, scene, renderer);

// Initialize camera animation
const cameraAnimation = new CameraAnimation(camera, controls);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update controls (for damping effect)
    controls.update();

    // Update camera animation
    cameraAnimation.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate(); 