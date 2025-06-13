import * as THREE from 'three';

/**
 * Creates a 3D product (desk) using basic Three.js geometries
 * Returns a THREE.Group containing all product meshes with
 * interactive parts for raycasting
 */
export function createProduct() {
    const group = new THREE.Group();

    const deskTopMaterial = new THREE.MeshStandardMaterial({
        color: 0x2c3e50,
        metalness: 0.2,
        roughness: 0.3
    });

    const legsMaterial = new THREE.MeshStandardMaterial({
        color: 0xe8e8e8,
        metalness: 0.8,
        roughness: 0.2
    });

    const drawerMaterial = new THREE.MeshStandardMaterial({
        color: 0x34495e,
        metalness: 0.2,
        roughness: 0.4
    });

    const handleMaterial = new THREE.MeshStandardMaterial({
        color: 0xc0c0c0,
        metalness: 0.9,
        roughness: 0.1
    });

    const desktop = new THREE.Mesh(
        new THREE.BoxGeometry(4, 0.1, 2),
        deskTopMaterial
    );
    desktop.position.y = 1.5;
    desktop.castShadow = true;
    desktop.receiveShadow = true;
    desktop.name = "Desk Top";

    const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5);
    const legPositions = [
        [1.8, 0.75, 0.8],
        [-1.8, 0.75, 0.8],
        [1.8, 0.75, -0.8],
        [-1.8, 0.75, -0.8]
    ];

    legPositions.forEach((pos, index) => {
        const leg = new THREE.Mesh(legGeometry, legsMaterial);
        leg.position.set(...pos);
        leg.castShadow = true;
        leg.name = `Desk Leg ${index + 1}`;
        group.add(leg);
    });

    const drawerUnit = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1, 1.6),
        drawerMaterial
    );
    drawerUnit.position.set(-1, 1, 0);
    drawerUnit.castShadow = true;
    drawerUnit.name = "Drawer Unit";

    const drawerFrontGeometry = new THREE.BoxGeometry(1, 0.3, 0.05);
    const drawerPositions = [0.3, 0, -0.3];

    drawerPositions.forEach((y, index) => {
        const drawer = new THREE.Mesh(drawerFrontGeometry, drawerMaterial);
        drawer.position.set(-1, y + 1, 0.8);
        drawer.castShadow = true;
        drawer.name = `Drawer ${index + 1}`;

        const handle = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 0.3),
            handleMaterial
        );
        handle.rotation.z = Math.PI / 2;
        handle.position.set(0, 0, 0.1);
        handle.castShadow = true;
        handle.name = `Drawer ${index + 1} Handle`;
        drawer.add(handle);

        group.add(drawer);
    });

    group.add(desktop);

    group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.userData.isInteractive = true;
        }
    });

    return group;
} 