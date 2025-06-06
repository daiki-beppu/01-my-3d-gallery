import { useTexture } from "@react-three/drei";
import type { CeilingConfig } from "../../../types/index.ts";

export const GalleryCeiling = () => {
	const ceilingTexture = useTexture(
		"/textures/gallery/ceiling/marble_01_diff_2k.jpg",
	);

	const ceilingConfig: CeilingConfig = {
		mesh: {
			position: [0, 10, 0],
			rotation: [Math.PI / 2, 0, 0],
		},
		geometry: {
			args: [20, 20],
		},
		material: {
			color: "#ffffff",
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
