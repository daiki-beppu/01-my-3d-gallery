import { GalleryWall } from "./GalleryWall.tsx";

export const GalleryWalls = () => {
	return (
		<>
			<GalleryWall meshPosition={[0, 0, -10]} />
			<GalleryWall meshPosition={[0, 0, 10]} meshRotation={[0, Math.PI, 0]} />
			<GalleryWall
				meshPosition={[-10, 0, 0]}
				meshRotation={[0, Math.PI / 2, 0]}
			/>
			<GalleryWall
				meshPosition={[10, 0, 0]}
				meshRotation={[0, -Math.PI / 2, 0]}
			/>
		</>
	);
};
