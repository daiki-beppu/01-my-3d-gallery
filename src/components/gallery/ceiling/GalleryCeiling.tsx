import { useTexture } from "@react-three/drei";

export const GalleryCeiling = () => {
	const ceilingTexture = useTexture(
		"/textures/gallery/ceiling/marble_01_diff_2k.jpg",
	);
	const ceilingConfig = {
		mesh: {
			position: [0, 10, 0] as const,
			rotation: [Math.PI / 2, 0, 0] as const,
		},
		geometry: {
			args: [20, 20] as const,
		},
		material: {
			color: "#ffffff" as const,
			map: ceilingTexture,
		},
	};
	const { mesh, geometry, material } = ceilingConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<planeGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} map={material.map} />
			</mesh>
		</>
	);
};
