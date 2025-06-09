/**
 * Handles automatic camera rotation around the product
 * Requirement 5: Camera Animation
 * - Smooth horizontal rotation around Y-axis
 * - Consistent rotation speed
 * - Manual control override
 */
export class CameraAnimation {
    constructor(camera, controls) {
        this.camera = camera;
        this.controls = controls;
        this.isAutoRotating = true;
        this.rotationSpeed = 0.001; // Radians per frame
        this.radius = 5; // Distance from center
        this.angle = 0;

        // Bind methods to maintain proper 'this' context
        this.update = this.update.bind(this);
        this.toggleAutoRotation = this.toggleAutoRotation.bind(this);

        // Add event listener for manual control override
        this.controls.domElement.addEventListener('mousedown', () => {
            this.isAutoRotating = false;
        });
    }

    update() {
        if (this.isAutoRotating) {
            // Update rotation angle
            this.angle += this.rotationSpeed;
            
            // Calculate new camera position using polar coordinates
            this.camera.position.x = Math.cos(this.angle) * this.radius;
            this.camera.position.z = Math.sin(this.angle) * this.radius;
            
            // Keep camera looking at center
            this.camera.lookAt(0, 0, 0);
        }
    }

    toggleAutoRotation() {
        this.isAutoRotating = !this.isAutoRotating;
    }
} 