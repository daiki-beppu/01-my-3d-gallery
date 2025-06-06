import type {
	ArtworkBodyConfig,
	ArtworkBodyProps,
} from "../../../../types/index.ts";

export const ArtworkBody = (props: ArtworkBodyProps) => {
	const artworkBodyConfig: ArtworkBodyConfig = {
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
