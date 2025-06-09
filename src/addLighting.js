import * as THREE from 'three';

/**
 * Sets up the lighting for the scene
 * Requirement 3: Lighting
 * - Ambient light for base illumination
 * - Directional lights for highlights and shadows
 * - Professional lighting setup with warm/cool contrast
 */
export function addLighting(scene) {
    // Base ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Main directional light (warm tone) with shadows
    const mainLight = new THREE.DirectionalLight(0xfff0dd, 1);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    
    // Configure shadow properties for better quality
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 500;
    scene.add(mainLight);

    // Fill light (cool tone) for contrast and detail
    const fillLight = new THREE.DirectionalLight(0xb4c7ff, 0.4);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Rim light for edge definition
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, -5, 0);
    scene.add(rimLight);

    return { ambientLight, mainLight, fillLight, rimLight };
} 