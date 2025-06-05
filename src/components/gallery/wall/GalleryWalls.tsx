import { GalleryWall } from "./GalleryWall.tsx";

type WallData = {
	key: string;
	position: [number, number, number];
	rotation: [number, number, number];
};

const wallData: WallData[] = [
	{ key: "wall-01", position: [0, 0, -10], rotation: [0, 0, 0] },
	{ key: "wall-02", position: [0, 0, 10], rotation: [0, Math.PI, 0] },
	{ key: "wall-03", position: [-10, 0, 0], rotation: [0, Math.PI / 2, 0] },
	{ key: "wall-04", position: [10, 0, 0], rotation: [0, -Math.PI / 2, 0] },
];

export const GalleryWalls = () => {
	return (
		<>
			{wallData.map((wall) => (
				<GalleryWall
					key={wall.key}
					position={wall.position}
					rotation={wall.rotation}
				/>
			))}
		</>
	);
};
