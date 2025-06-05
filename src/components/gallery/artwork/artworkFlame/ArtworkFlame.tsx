type ArtworkFlameConfig = {
	mesh: {
		position: [number, number, number];
		rotation: [number, number, number];
	};
	geometry: {
		args: [number, number, number];
	};
	material: {
		color: string;
	};
};

export const ArtworkFlame = () => {
	const artworkFlameConfig: ArtworkFlameConfig = {
		mesh: {
			position: [0, 0, 0.02],
			rotation: [0, 0, 0],
		},
		geometry: {
			args: [2.2, 1.4, 0.1],
		},
		material: {
			color: "#8B4513",
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
