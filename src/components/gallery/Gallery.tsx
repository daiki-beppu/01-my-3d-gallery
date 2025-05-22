import { Artwork } from "./artwork/Artwork.tsx";
import { GalleryCeiling } from "./ceiling/GalleryCeiling.tsx";
import { GalleryFloor } from "./floor/GalleryFloor.tsx";
import { GalleryWalls } from "./wall/GalleryWalls.tsx";

export const Gallery = () => {
	return (
		<>
			<GalleryFloor />
			<GalleryWalls />
			<GalleryCeiling />
			<Artwork position={[0, 2, -9.8]} color="red" />
			<Artwork position={[-4, 2, -9.8]} color="green" />
			<Artwork position={[4, 2, -9.8]} color="blue" />
		</>
	);
};
