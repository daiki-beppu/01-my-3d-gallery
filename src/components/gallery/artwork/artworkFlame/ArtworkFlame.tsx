export const ArtworkFlame = () => {
	const artworkFlameConfig = {
		mesh: {
			position: [0, 0, 0.02] as const,
			rotation: [0, 0, 0] as const,
		},
		geometry: {
			args: [2.2, 1.4, 0.1] as const,
		},
		material: {
			color: "#8B4513" as const,
		},
	};
	const { mesh, geometry, material } = artworkFlameConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<boxGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} />
			</mesh>
		</>
	);
};
