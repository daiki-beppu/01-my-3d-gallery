import type { WallData } from "../../../types/index.ts";
import { GalleryWall } from "./GalleryWall.tsx";

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
