import type { ArtworkData } from "../../types/index..ts";
import { Artwork } from "./artwork/Artwork.tsx";
import { GalleryCeiling } from "./ceiling/GalleryCeiling.tsx";
import { GalleryFloor } from "./floor/GalleryFloor.tsx";
import { GalleryWalls } from "./wall/GalleryWalls.tsx";

const artworkPosition: ArtworkData[] = [
	{ key: "artwork-01", position: [0, 2, -9.8], color: "red" },
	{ key: "artwork-02", position: [-4, 2, -9.8], color: "green" },
	{ key: "artwork-03", position: [4, 2, -9.8], color: "blue" },
];

export const Gallery = () => {
	return (
		<>
			<GalleryFloor />
			<GalleryWalls />
			<GalleryCeiling />
			{artworkPosition.map((artwork) => (
				<Artwork
					key={artwork.key}
					position={artwork.position}
					color={artwork.color}
				/>
			))}
		</>
	);
};
