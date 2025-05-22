type ArtWorkProps = {
	color: string;
};

export const ArtworkBody = (props: ArtWorkProps) => {
	const artworkBodyConfig = {
		mesh: {
			position: [0, 0, 0.1] as const,
			rotation: [0, 0, 0] as const,
		},
		geometry: {
			args: [2, 1.2] as const,
		},
		material: {
			color: props.color,
		},
	};
	const { mesh, geometry, material } = artworkBodyConfig;
	return (
		<mesh rotation={mesh.rotation} position={mesh.position}>
			<planeGeometry args={geometry.args} />
			<meshStandardMaterial color={material.color} />
		</mesh>
	);
};
