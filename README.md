Lidia Asamnew  
UGR/2984/15  
Section 3

# Interactive 3D Product Viewer

A Three.js-based interactive 3D product viewer that demonstrates basic mesh composition, lighting, and user interaction.

## Features

- Interactive 3D chair model built from basic Three.js geometries
- Orbit controls for manual camera manipulation
- Automatic camera rotation around the product
- Interactive parts highlighting and information display
- Responsive design that adapts to window resizing
- Professional lighting setup with ambient and directional lights

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Usage

- **View the Product**: The chair will automatically rotate for a complete view
- **Manual Control**: Click and drag to rotate the camera manually (this will pause auto-rotation)
- **Zoom**: Use the mouse wheel to zoom in/out
- **Part Information**: Hover over different parts of the chair to see their names
- **Interaction**: Click on parts to see a scale animation effect

## Project Structure

- `src/initScene.js` - Scene, camera, and renderer setup
- `src/createProduct.js` - 3D product (chair) creation
- `src/addLighting.js` - Lighting setup
- `src/interaction.js` - Mouse interaction and raycasting
- `src/cameraAnimation.js` - Automatic camera animation
- `src/main.js` - Main entry point and animation loop

## Technologies Used

- Three.js - 3D graphics library
- Vite - Build tool and development server
