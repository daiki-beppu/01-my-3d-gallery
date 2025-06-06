import type { CommonConfig } from "../common/common.ts";

/**
 * ギャラリーのアートワークのフレームの設定を定義する型
 * ArtworkFlameConfig は、アートワークのフレームのメッシュ、ジオメトリ、およびマテリアルの設定を含む
 */
export type ArtworkFrameConfig = Omit<CommonConfig, "geometry"> & {
	geometry: {
		args: [number, number, number];
	};
};

/**
 * ギャラリーのアートワークのフレームのプロパティを定義する型
 * ArtworkFrameProps は、アートワークのフレームの位置と色を含む
 */
export type ArtworkFrameProps = {
	position: [number, number, number];
	color: string;
};

/**
 * ギャラリーのアートワークのボディの設定を定義する型
 * ArtworkBodyConfig は、アートワークのボディのメッシュ、ジオメトリ、およびマテリアルの設定を含む
 */
export type ArtworkBodyConfig = CommonConfig & {};

/**
 * ギャラリーのアートワークのボディのプロパティを定義する型
 * ArtWorkBodyProps は、アートワークのボディの色を含む
 */
export type ArtworkBodyProps = {
	color: string;
};

/**
 * ギャラリーのアートワークのデータを定義する型
 * ArtworkData は、アートワークのキー、位置、および色を含む
 */
export type ArtworkData = {
	key: string;
	position: [number, number, number];
	color: string;
};
