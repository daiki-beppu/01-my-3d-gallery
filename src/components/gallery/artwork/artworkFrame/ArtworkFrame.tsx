import type { ArtworkFrameConfig } from "../../../../types/index..ts";

export const ArtworkFrame = () => {
	const artworkFlameConfig: ArtworkFrameConfig = {
		mesh: {
			position: [0, 0, 0.02],
			rotation: [0, 0, 0],
		},
		geometry: {
			args: [2.2, 1.4],
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
