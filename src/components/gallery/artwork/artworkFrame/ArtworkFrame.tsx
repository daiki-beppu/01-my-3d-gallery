import type { ArtworkFrameConfig } from "../../../../types/index.ts";

export const ArtworkFrame = () => {
	const artworkFrameConfig: ArtworkFrameConfig = {
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
	const { mesh, geometry, material } = artworkFrameConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<boxGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} />
			</mesh>
		</>
	);
};
