/**
 * ギャラリーの全体設定を定義するファイル
 * 共通で使用される数値や文字列の一元管理により、調整やカスタマイズを容易にする
 */

export const GALLERY_CONFIG = {
	/** ギャラリー空間の基本寸法 */
	dimensions: {
		/** ギャラリールームのサイズ（20×20単位） */
		roomSize: 20,
		/** 天井の高さ */
		ceilingHeight: 10,
		/** 床のレベル（Y座標） */
		floorLevel: -2,
		/** 壁の位置（中心からの距離） */
		wallDistance: 10,
	},

	/** ユーザー操作関連の設定 */
	controls: {
		/** WASD移動の速度 */
		movementSpeed: 0.05,
	},

	/** テクスチャファイルのパス */
	textures: {
		/** 壁のテクスチャ */
		wall: "/textures/gallery/wall/marble_01_diff_2k.jpg",
		/** 天井のテクスチャ */
		ceiling: "/textures/gallery/ceiling/marble_01_diff_2k.jpg",
		/** 床のテクスチャ */
		floor: "/textures/gallery/floor/diagonal_parquet_diff_2k.jpg",
	},
} as const;

/** 型安全性のための型定義 */
export type GalleryConfig = typeof GALLERY_CONFIG;