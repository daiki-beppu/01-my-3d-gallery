import type { Texture } from "three";

export type CommonConfig = {
	mesh: {
		position: [number, number, number];
		rotation: [number, number, number];
	};
	geometry: {
		args: [number, number];
	};
	material: {
		color: string;
		map?: Texture;
	};
};
