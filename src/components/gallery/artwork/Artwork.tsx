import type { ArtworkFrameProps } from "../../../types/index.ts";
import { ArtworkBody } from "./artworkBody/ArtworkBody.tsx";
import { ArtworkFrame } from "./artworkFrame/ArtworkFrame.tsx";

export const Artwork = (props: ArtworkFrameProps) => {
	return (
		<group position={props.position}>
			<ArtworkFrame />
			<ArtworkBody color={props.color} />
		</group>
	);
};
