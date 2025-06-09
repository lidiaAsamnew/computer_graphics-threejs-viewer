import * as THREE from 'three';

/**
 * Handles all mouse interactions with the 3D product
 * Requirement 4: Mouse Interaction
 * - Raycasting for detecting mouse interactions
 * - Hover feedback (material change)
 * - Click animation (scale effect)
 * - Information display for part names
 */
export class Interaction {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.selectedObject = null;
        this.originalMaterials = new Map();
        this.infoPanel = document.getElementById('info-panel');

        // Bind methods to maintain proper 'this' context
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onClick = this.onClick.bind(this);

        // Add event listeners
        renderer.domElement.addEventListener('mousemove', this.onMouseMove);
        renderer.domElement.addEventListener('click', this.onClick);
    }

    onMouseMove(event) {
        // Update mouse position in normalized device coordinates (-1 to +1)
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // Find intersected objects that are marked as interactive
        const intersects = this.raycaster.intersectObjects(this.scene.children, true)
            .filter(intersect => intersect.object.userData.isInteractive);

        // Reset previous hover state if exists
        if (this.selectedObject) {
            if (this.originalMaterials.has(this.selectedObject)) {
                this.selectedObject.material = this.originalMaterials.get(this.selectedObject);
                this.originalMaterials.delete(this.selectedObject);
            }
            this.selectedObject = null;
            this.infoPanel.style.display = 'none';
        }

        // Set new hover state if intersecting with an object
        if (intersects.length > 0) {
            this.selectedObject = intersects[0].object;
            
            // Store original material and apply hover effect
            if (!this.originalMaterials.has(this.selectedObject)) {
                this.originalMaterials.set(
                    this.selectedObject,
                    this.selectedObject.material.clone()
                );
                const hoverMaterial = this.selectedObject.material.clone();
                hoverMaterial.emissive.setHex(0x333333);
                this.selectedObject.material = hoverMaterial;
            }

            // Update and show info panel with part name
            this.infoPanel.style.display = 'block';
            this.infoPanel.textContent = this.selectedObject.name;
            this.infoPanel.style.left = event.clientX + 'px';
            this.infoPanel.style.top = event.clientY + 'px';
        }
    }

    onClick(event) {
        // Animate the clicked object if one is selected
        if (this.selectedObject) {
            const targetScale = 1.2;
            const duration = 200;

            // Scale up
            this.selectedObject.scale.set(targetScale, targetScale, targetScale);

            // Scale back down after duration
            setTimeout(() => {
                this.selectedObject.scale.set(1, 1, 1);
            }, duration);
        }
    }

    // Cleanup method to remove event listeners
    dispose() {
        this.renderer.domElement.removeEventListener('mousemove', this.onMouseMove);
        this.renderer.domElement.removeEventListener('click', this.onClick);
    }
} 