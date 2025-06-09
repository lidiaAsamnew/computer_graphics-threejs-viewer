import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Initializes the Three.js scene, camera, renderer, and controls
 * Requirement 1: Scene Setup
 * - PerspectiveCamera
 * - WebGLRenderer with canvas integration
 * - Responsive window handling
 * - OrbitControls for zoom and pan
 */
export function initScene() {
    // Create and configure scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2c3e50); // Professional dark blue-gray background

    // Create and position camera
    const camera = new THREE.PerspectiveCamera(
        75, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near plane
        1000 // Far plane
    );
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);

    // Set up WebGL renderer
    const canvas = document.getElementById('product-viewer');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true // Enable antialiasing for smoother edges
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Add smooth damping effect
    controls.dampingFactor = 0.05;
    controls.maxDistance = 10;
    controls.minDistance = 2;

    // Handle window resize - Requirement: Responsiveness
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer, controls };
} 