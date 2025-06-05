import type { CommonConfig } from "../common/common.ts";

/**
 * ギャラリーの壁の設定を定義する型
 * GalleryWallConfig は、ギャラリーの壁のメッシュ、ジオメトリ、およびマテリアルの設定を含む
 */
export type GalleryWallConfig = CommonConfig & {};

/**
 * ギャラリーの壁のプロパティを定義する型
 * GalleryWallProps は、ギャラリーの壁の位置と回転を含む
 */
export type GalleryWallProps = {
	position: [number, number, number];
	rotation?: [number, number, number];
};

/**
 * ギャラリーの壁のデータを定義する型
 * WallData は、壁のキー、位置、および回転を含む
 */
export type WallData = {
	key: string;
	position: [number, number, number];
	rotation: [number, number, number];
};
