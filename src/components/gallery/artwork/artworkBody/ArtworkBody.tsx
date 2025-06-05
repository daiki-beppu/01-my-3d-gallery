type artworkBodyConfig = {
	mesh: {
		position: [number, number, number];
		rotation: [number, number, number];
	};
	geometry: {
		args: [number, number];
	};
	material: {
		color: string;
	};
};

type ArtWorkProps = {
	color: string;
};

export const ArtworkBody = (props: ArtWorkProps) => {
	const artworkBodyConfig: artworkBodyConfig = {
		mesh: {
			position: [0, 0, 0.1],
			rotation: [0, 0, 0],
		},
		geometry: {
			args: [2, 1.2],
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
