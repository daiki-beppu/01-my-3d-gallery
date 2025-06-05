import { useTexture } from "@react-three/drei";
import type { Texture } from "three";

type GalleryWallConfig = {
	mesh: {
		position: [number, number, number];
		rotation: [number, number, number];
	};
	geometry: {
		args: [number, number];
	};
	material: {
		color: string;
		map: Texture;
	};
};

type GalleryWallProps = {
	position: [number, number, number];
	rotation?: [number, number, number];
};

export const GalleryWall = (props: GalleryWallProps) => {
	const wallTexture = useTexture(
		"/textures/gallery/wall/marble_01_diff_2k.jpg",
	);
	const galleryWallConfig: GalleryWallConfig = {
		mesh: {
			position: props.position,
			rotation: props.rotation || [0, 0, 0],
		},
		geometry: {
			args: [20, 20],
		},
		material: {
			color: "#f0f0f0",
			map: wallTexture,
		},
	};
	const { mesh, geometry, material } = galleryWallConfig;
	return (
		<>
			<mesh rotation={mesh.rotation} position={mesh.position}>
				<planeGeometry args={geometry.args} />
				<meshStandardMaterial color={material.color} map={material.map} />
			</mesh>
		</>
	);
};
