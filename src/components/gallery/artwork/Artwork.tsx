import { ArtworkBody } from "./artworkBody/ArtworkBody.tsx";
import { ArtworkFlame } from "./artworkFlame/ArtworkFlame.tsx";

type ArtworkProps = {
	position: [number, number, number];
	color: string;
};

export const Artwork = (props: ArtworkProps) => {
	return (
		<group position={props.position}>
			<ArtworkFlame />
			<ArtworkBody color={props.color} />
		</group>
	);
};
