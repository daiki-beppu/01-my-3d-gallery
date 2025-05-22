import { useTexture } from "@react-three/drei";

type GalleryWallProps = {
	meshPosition: [number, number, number];
	meshRotation?: [number, number, number];
};

export const GalleryWall = (props: GalleryWallProps) => {
	const wallTexture = useTexture(
		"/textures/gallery/wall/marble_01_diff_2k.jpg",
	);
	const galleryWallConfig = {
		mesh: {
			position: props.meshPosition,
			rotation: props.meshRotation || ([0, 0, 0] as const),
		},
		geometry: {
			args: [20, 20] as const,
		},
		material: {
			color: "#f0f0f0" as const,
			map: wallTexture,
		},
	};
	const { mesh, geometry, material } = galleryWallConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<planeGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} map={material.map} />
			</mesh>
		</>
	);
};
