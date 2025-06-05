import { useTexture } from "@react-three/drei";
import type { FloorConfig } from "../../../types/index..ts";

export const GalleryFloor = () => {
	const floorTexture = useTexture(
		"/textures/gallery/floor/diagonal_parquet_diff_2k.jpg",
	);

	const floorConfig: FloorConfig = {
		mesh: {
			position: [0, -2, 0],
			rotation: [-Math.PI / 2, 0, 0],
		},
		geometry: {
			args: [20, 20],
		},
		material: {
			map: floorTexture,
			color: "#ffffff",
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
