import type { ArtworkProps } from "../../../types/gallery/artwork/artwork.ts";
import { ArtworkBody } from "./artworkBody/ArtworkBody.tsx";
import { ArtworkFlame } from "./artworkFlame/ArtworkFlame.tsx";

export const Artwork = (props: ArtworkProps) => {
	return (
		<group position={props.position}>
			<ArtworkFlame />
			<ArtworkBody color={props.color} />
		</group>
	);
};
