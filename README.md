Lidia Asamnew  
UGR/2984/15  
Section 3

# Interactive 3D Product Viewer (Desk Model)

An interactive 3D product viewer built with Three.js that showcases a modern desk model created using basic geometries. The application features smooth camera animations, interactive parts, and professional lighting.

## Features

### 1. Scene Setup

- Implemented PerspectiveCamera with optimal field of view and positioning
- WebGLRenderer with antialiasing and shadow mapping
- Responsive canvas that adapts to window resizing
- OrbitControls for intuitive zoom and pan functionality

### 2. 3D Product (Modern Desk)

- Constructed using basic Three.js geometries:
  - Desktop surface (BoxGeometry)
  - Cylindrical legs for modern aesthetic
  - Drawer unit with interactive drawers
  - Metallic handles using cylinders
- Professional materials with:
  - Varied metalness and roughness properties
  - Shadow casting and receiving
  - Named components for interaction

### 3. Professional Lighting Setup

- Ambient light for base illumination (0x404040)
- Main directional light with warm tone (0xfff0dd)
- Fill light with cool tone for contrast (0xb4c7ff)
- Rim light for edge definition
- Configured shadow mapping for realistic shadows

### 4. Interactive Features

- Raycasting for precise part detection
- Hover effects:
  - Material emissive color change
  - Information panel showing part name
- Click animations:
  - Scale effect on clicked parts
  - Smooth transition back to original size

### 5. Camera Animation

- Smooth automatic rotation around the desk
- Consistent rotation speed using polar coordinates
- Manual override: rotation pauses on user interaction
- Camera always focused on the product center

### 6. Performance

- Efficient animation loop using requestAnimationFrame
- Optimized material and geometry usage
- Responsive design with window resize handling

## Project Structure

```
threejs-viewer/
├── src/
│   ├── main.js           # Application entry point
│   ├── initScene.js      # Scene, camera, and renderer setup
│   ├── createProduct.js  # Desk model creation
│   ├── addLighting.js    # Lighting configuration
│   ├── interaction.js    # Mouse interaction handling
│   └── cameraAnimation.js# Camera rotation animation
├── style.css            # Application styling
├── index.html           # Main HTML file
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Development mode:

```bash
npm run dev
```

Building for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Dependencies

- Three.js: ^0.162.0
- Vite: ^5.1.4

## Browser Support

Works best in modern browsers that support WebGL:

- Chrome
- Firefox
- Safari
- Edge

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
