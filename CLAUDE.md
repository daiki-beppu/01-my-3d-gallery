# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development Workflow
- `npm run dev` - Start development server (Vite on port 5173)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Check code with Biome linter
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Biome (tab indentation)

### Important Notes
- No test runner configured - manually test in browser
- Uses Biome for both linting and formatting (not ESLint/Prettier)
- TypeScript compilation happens before build (`tsc -b && vite build`)

## 3D Virtual Gallery - Architecture Guide

This is a React-based 3D virtual gallery application built with **React Three Fiber** (R3F) and **Three.js**. The architecture follows a compositional pattern where the 3D scene is constructed from reusable, configurable components representing gallery elements (walls, floor, ceiling, artwork).

### Tech Stack
- **Frontend**: React 19.1.0 + TypeScript 5.8.3
- **3D Engine**: Three.js 0.176.0 + React Three Fiber 9.1.2
- **3D Utilities**: @react-three/drei 10.0.8 (for controls, textures, etc.)
- **Styling**: TailwindCSS 4.1.7 (minimal usage, mostly for layout)
- **Build Tool**: Vite 6.3.5
- **Code Quality**: Biome (linting + formatting)

## Key Architectural Patterns

### 1. Configuration-Driven Component Design
Every 3D component follows a consistent pattern:
- **Configuration Object**: Each component has a TypeScript config interface defining mesh, geometry, and material properties
- **Props Interface**: Components accept minimal props (position, color, etc.)
- **Internal Config Instantiation**: Components create their config objects internally, merging props with defaults

```typescript
// Pattern Example from ArtworkFrame.tsx
const artworkFlameConfig: ArtworkFrameConfig = {
  mesh: { position: [0, 0, 0.02], rotation: [0, 0, 0] },
  geometry: { args: [2.2, 1.4, 0.1] },
  material: { color: "#8B4513" }
};
const { mesh, geometry, material } = artworkFlameConfig;
```

### 2. Type-Safe 3D Positioning System
- All 3D positions use tuple types: `[number, number, number]`
- Consistent coordinate system: Y-up, with gallery floor at Y=-2
- Rotation values use radians (Math.PI patterns for 90/180-degree rotations)

### 3. Data-Driven Scene Construction
Collections of 3D objects are defined as typed data arrays and mapped to components:

```typescript
// Gallery walls defined as data, not hardcoded
const wallData: WallData[] = [
  { key: "wall-01", position: [0, 0, -10], rotation: [0, 0, 0] },
  { key: "wall-02", position: [0, 0, 10], rotation: [0, Math.PI, 0] },
  // ...
];
```

## Component Organization Strategy

### Hierarchical Structure by Gallery Element
```
src/components/gallery/
├── Gallery.tsx              # Main scene orchestrator
├── wall/
│   ├── GalleryWall.tsx     # Individual wall component
│   └── GalleryWalls.tsx    # Wall collection manager
├── floor/GalleryFloor.tsx
├── ceiling/GalleryCeiling.tsx
└── artwork/
    ├── Artwork.tsx         # Artwork container (uses <group>)
    ├── artworkFrame/       # Frame sub-component
    └── artworkBody/        # Canvas/content sub-component
```

### Separation of Concerns
- **Data Layer**: Type definitions in `src/types/gallery/`
- **Component Layer**: React Three Fiber components
- **Control Layer**: Separate `src/components/controls/` for user interaction

## Three.js/React Three Fiber Integration Patterns

### 1. Canvas Setup (App.tsx)
```typescript
<KeyboardControls map={keyboardMap}>
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <PointerLockControls />
    <MovementControls />
    <Gallery />
  </Canvas>
</KeyboardControls>
```

### 2. Texture Loading Pattern
Components use `useTexture` hook from drei for asset loading:
```typescript
const wallTexture = useTexture("/textures/gallery/wall/marble_01_diff_2k.jpg");
```

### 3. Custom Controls Implementation
- **MovementControls**: Custom hook using `useFrame` for smooth movement
- **Dual Control System**: KeyboardControls (drei) + custom movement logic
- **Camera-relative movement**: Uses `camera.translateZ/translateX` for FPS-style controls

### 4. Mesh Component Pattern
Every 3D object follows this JSX structure:
```typescript
<mesh rotation={mesh.rotation} position={mesh.position}>
  <geometryType args={geometry.args} />
  <meshStandardMaterial color={material.color} map={material.map} />
</mesh>
```

## Type System Architecture

### Common Base Types
- **CommonConfig**: Base interface for all gallery elements (mesh, geometry, material)
- **Specialized Extensions**: Each component type extends/modifies CommonConfig
- **Data vs Props**: Separate types for static data arrays vs component props

### Type Inheritance Pattern
```typescript
// Base configuration
export type CommonConfig = {
  mesh: { position: [number, number, number]; rotation: [number, number, number] };
  geometry: { args: [number, number] };
  material: { color: string; map?: Texture };
};

// Specialized extension
export type ArtworkFrameConfig = Omit<CommonConfig, "geometry"> & {
  geometry: { args: [number, number, number] }; // 3D instead of 2D
};
```

## Asset Management

### Texture Organization
```
public/textures/gallery/
├── wall/marble_01_diff_2k.jpg
├── floor/diagonal_parquet_diff_2k.jpg
└── ceiling/marble_01_diff_2k.jpg
```

### Loading Strategy
- **Synchronous Loading**: Components use `useTexture` which suspends rendering until loaded
- **Public Path**: Assets served from `/public/textures/` via Vite static serving

## Development Conventions

### Code Style
- **Biome**: Tab indentation, organized imports, recommended linting rules
- **File Naming**: PascalCase for components, camelCase for utilities
- **Import Style**: Barrel exports from `types/index..ts` (note: double dot is intentional)

### Component Patterns
- **Functional Components**: All components use function declarations
- **Props Destructuring**: Direct parameter destructuring: `(props: Type) => {}`
- **Fragment Usage**: `<></>` for multiple elements
- **Group Components**: Artwork uses `<group>` for compound objects

### Japanese Comments
The codebase uses Japanese JSDoc comments, indicating internationalization considerations:
```typescript
/**
 * ギャラリーの共通設定を定義する型
 * CommonConfig は、ギャラリーのメッシュ、ジオメトリ、およびマテリアルの設定を含む
 */
```

## Key Technical Details

### Scene Hierarchy
1. **Gallery** (main container)
2. **Structural Elements**: Floor (-2 Y), Walls (±10 Z/X), Ceiling
3. **Interactive Elements**: Artwork positioned on walls
4. **Controls**: Overlay movement and pointer lock controls

### Performance Considerations
- **Static Geometry**: Gallery structure uses simple primitives (planes, boxes)
- **Texture Reuse**: Wall and ceiling share same marble texture
- **Minimal State**: Most components are stateless, configuration-driven

### Coordinate System Logic
- **Gallery Dimensions**: 20×20 unit room
- **Wall Positions**: ±10 units from center on X/Z axes
- **Artwork Height**: Y=2 (human eye level)
- **Floor Offset**: Y=-2 (creates 4-unit ceiling height)

This architecture enables easy extension—new gallery elements follow the same config-driven pattern, and the scene can be dynamically modified by changing the data arrays.