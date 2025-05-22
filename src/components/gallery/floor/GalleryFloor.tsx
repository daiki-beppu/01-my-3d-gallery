import { useTexture } from "@react-three/drei";

export const GalleryFloor = () => {
	const floorTexture = useTexture(
		"/textures/gallery/floor/diagonal_parquet_diff_2k.jpg",
	);

	const floorConfig = {
		mesh: {
			position: [0, -2, 0] as const,
			rotation: [-Math.PI / 2, 0, 0] as const,
		},
		geometry: {
			args: [20, 20] as const,
		},
		material: {
			map: floorTexture,
			color: "#ffffff" as const,
		},
	};

	const { mesh, geometry, material } = floorConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<planeGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} map={material.map} />
			</mesh>
		</>
	);
};
