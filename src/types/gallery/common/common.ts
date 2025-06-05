import type { Texture } from "three";

// jsdoc
/**
 * ギャラリーの共通設定を定義する型
 * CommonConfig は、ギャラリーのメッシュ、ジオメトリ、およびマテリアルの設定を含む
 */
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
