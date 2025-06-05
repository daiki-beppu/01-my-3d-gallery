# 3D Virtual Gallery

A immersive 3D virtual art gallery built with React, Three.js, and React Three Fiber. Walk through a beautifully rendered gallery space and view artwork in an interactive 3D environment.

## 📖 Table of Contents

- [3D Virtual Gallery](#3d-virtual-gallery)
  - [📖 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🎮 Controls](#-controls)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📦 Installation](#-installation)
  - [🎨 Gallery Structure](#-gallery-structure)
  - [📁 Project Structure](#-project-structure)
  - [🔧 Available Scripts](#-available-scripts)
  - [🎯 Customization](#-customization)
    - [Adding New Artworks](#adding-new-artworks)
    - [Changing Textures](#changing-textures)
    - [Modifying Gallery Size](#modifying-gallery-size)
  - [🚀 Performance Optimization](#-performance-optimization)
  - [🔮 Future Enhancements](#-future-enhancements)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)
- [3D バーチャルギャラリー 日本語はこちら](#3d-バーチャルギャラリー-日本語はこちら)
  - [📖 目次](#-目次)
  - [✨ 機能](#-機能)
  - [🎮 操作方法](#-操作方法)
  - [🛠️ 技術スタック](#️-技術スタック)
  - [📦 インストール](#-インストール)
  - [🎨 ギャラリー構造](#-ギャラリー構造)
  - [📁 プロジェクト構造](#-プロジェクト構造)
  - [🔧 利用可能なスクリプト](#-利用可能なスクリプト)
  - [🎯 カスタマイズ](#-カスタマイズ)
    - [新しいアートワークの追加](#新しいアートワークの追加)
    - [テクスチャの変更](#テクスチャの変更)
    - [ギャラリーサイズの変更](#ギャラリーサイズの変更)
  - [🚀 パフォーマンス最適化](#-パフォーマンス最適化)
  - [🔮 今後の機能拡張](#-今後の機能拡張)
  - [🤝 コントリビューション](#-コントリビューション)
  - [📄 ライセンス](#-ライセンス)
  - [🙏 謝辞](#-謝辞)


## ✨ Features

- **3D Gallery Environment**: Fully rendered 3D gallery with textured walls, floor, and ceiling
- **Interactive Navigation**: First-person movement controls using WASD keys
- **Mouse Look**: Pointer lock controls for smooth camera rotation
- **Artwork Display**: Multiple artworks displayed on gallery walls with frames
- **Realistic Textures**: Marble textures for walls/ceiling and parquet flooring
- **Responsive Design**: Built with modern React and TypeScript

## 🎮 Controls

- **W/A/S/D Keys**: Move forward/left/backward/right
- **Mouse**: Look around (click to enable pointer lock)
- **Arrow Keys**: Alternative movement controls

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-virtual-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Gallery Structure

The gallery features:
- **4 walls** with marble texture
- **Parquet wooden floor**
- **Marble ceiling**
- **3 framed artworks** (red, green, blue) on the front wall

## 📁 Project Structure

```
src/
├── components/
│   ├── controls/
│   │   └── MovementControls.tsx    # WASD movement implementation
│   └── gallery/
│       ├── artwork/                # Artwork components
│       │   ├── artworkBody/
│       │   ├── artworkFrame/
│       │   └── Artwork.tsx
│       ├── ceiling/
│       │   └── GalleryCeiling.tsx  # Textured ceiling
│       ├── floor/
│       │   └── GalleryFloor.tsx    # Parquet floor
│       ├── wall/
│       │   ├── GalleryWall.tsx     # Individual wall
│       │   └── GalleryWalls.tsx    # All 4 walls
│       └── Gallery.tsx             # Main gallery component
├── types/                          # TypeScript type definitions
└── styles/
    └── global.css                  # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Biome

## 🎯 Customization

### Adding New Artworks

Edit the `artworkPosition` array in `src/components/gallery/Gallery.tsx`:

```typescript
const artworkPosition: ArtworkData[] = [
  { key: "artwork-01", position: [0, 2, -9.8], color: "red" },
  { key: "artwork-02", position: [-4, 2, -9.8], color: "green" },
  { key: "artwork-03", position: [4, 2, -9.8], color: "blue" },
  // Add more artworks here
];
```

### Changing Textures

Update texture paths in the respective components:
- **Walls/Ceiling**: `/textures/gallery/ceiling/marble_01_diff_2k.jpg`
- **Floor**: `/textures/gallery/floor/diagonal_parquet_diff_2k.jpg`

### Modifying Gallery Size

Adjust the dimensions in the wall configuration:
- Gallery size: 20x20 units
- Wall height: 20 units
- Ceiling height: 10 units

## 🚀 Performance Optimization

The application is optimized with:
- TypeScript for type safety
- Biome for fast linting and formatting
- Efficient Three.js rendering
- Component-based architecture for reusability

## 🔮 Future Enhancements

Potential improvements:
- [ ] Add more diverse artwork types (paintings, sculptures)
- [ ] Implement artwork information panels
- [ ] Add lighting effects and shadows
- [ ] Support for custom artwork uploads
- [ ] Multiple gallery rooms
- [ ] Audio ambience
- [ ] VR support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Three.js community for excellent 3D graphics library
- React Three Fiber team for seamless React-Three.js integration
- Texture resources for realistic gallery materials


# 3D バーチャルギャラリー 日本語はこちら

React、Three.js、React Three Fiberで構築された没入型の3Dバーチャル美術館です。美しくレンダリングされたギャラリー空間を歩き回り、インタラクティブな3D環境でアートワークを鑑賞できます。

## 📖 目次

- [機能](#機能)
- [操作方法](#操作方法)
- [技術スタック](#技術スタック)
- [インストール](#インストール)
- [ギャラリー構造](#ギャラリー構造)
- [プロジェクト構造](#プロジェクト構造)
- [利用可能なスクリプト](#利用可能なスクリプト)
- [カスタマイズ](#カスタマイズ)
  - [新しいアートワークの追加](#新しいアートワークの追加)
  - [テクスチャの変更](#テクスチャの変更)
  - [ギャラリーサイズの変更](#ギャラリーサイズの変更)
- [パフォーマンス最適化](#パフォーマンス最適化)
- [今後の機能拡張](#今後の機能拡張)
- [コントリビューション](#コントリビューション)
- [ライセンス](#ライセンス)
- [謝辞](#謝辞)

## ✨ 機能

- **3Dギャラリー環境**: テクスチャ付きの壁、床、天井を持つ完全レンダリング3Dギャラリー
- **インタラクティブナビゲーション**: WASDキーによる一人称視点の移動操作
- **マウスルック**: スムーズなカメラ回転のためのポインターロック制御
- **アートワーク展示**: フレーム付きの複数のアートワークをギャラリーの壁に展示
- **リアルなテクスチャ**: 壁/天井用の大理石テクスチャとパーケットフローリング
- **レスポンシブデザイン**: モダンなReactとTypeScriptで構築

## 🎮 操作方法

- **W/A/S/Dキー**: 前進/左/後退/右移動
- **マウス**: 視点移動（クリックでポインターロックを有効化）
- **矢印キー**: 代替移動操作

## 🛠️ 技術スタック

- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Three.js** - 3Dグラフィックスライブラリ
- **React Three Fiber** - Three.js用Reactレンダラー
- **React Three Drei** - R3F用便利ヘルパー
- **Tailwind CSS** - スタイリング
- **Vite** - ビルドツール＆開発サーバー

## 📦 インストール

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd 3d-virtual-gallery
```

2. 依存関係をインストール:
```bash
npm install
```

3. 開発サーバーを起動:
```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` にアクセス

## 🎨 ギャラリー構造

ギャラリーの特徴:
- **4つの壁** - 大理石テクスチャ
- **パーケット木製床**
- **大理石天井**
- **3つのフレーム付きアートワーク**（赤、緑、青）が正面の壁に展示

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── controls/
│   │   └── MovementControls.tsx    # WASD移動実装
│   └── gallery/
│       ├── artwork/                # アートワークコンポーネント
│       │   ├── artworkBody/
│       │   ├── artworkFrame/
│       │   └── Artwork.tsx
│       ├── ceiling/
│       │   └── GalleryCeiling.tsx  # テクスチャ付き天井
│       ├── floor/
│       │   └── GalleryFloor.tsx    # パーケット床
│       ├── wall/
│       │   ├── GalleryWall.tsx     # 個別の壁
│       │   └── GalleryWalls.tsx    # 4つの壁すべて
│       └── Gallery.tsx             # メインギャラリーコンポーネント
├── types/                          # TypeScript型定義
└── styles/
    └── global.css                  # グローバルスタイル
```

## 🔧 利用可能なスクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番用ビルド
- `npm run preview` - 本番ビルドのプレビュー
- `npm run lint` - リンター実行
- `npm run lint:fix` - リンティング問題の修正
- `npm run format` - Biomeでコード整形

## 🎯 カスタマイズ

### 新しいアートワークの追加

`src/components/gallery/Gallery.tsx` の `artworkPosition` 配列を編集:

```typescript
const artworkPosition: ArtworkData[] = [
  { key: "artwork-01", position: [0, 2, -9.8], color: "red" },
  { key: "artwork-02", position: [-4, 2, -9.8], color: "green" },
  { key: "artwork-03", position: [4, 2, -9.8], color: "blue" },
  // ここに新しいアートワークを追加
];
```

### テクスチャの変更

各コンポーネントでテクスチャパスを更新:
- **壁/天井**: `/textures/gallery/ceiling/marble_01_diff_2k.jpg`
- **床**: `/textures/gallery/floor/diagonal_parquet_diff_2k.jpg`

### ギャラリーサイズの変更

壁の設定で寸法を調整:
- ギャラリーサイズ: 20x20単位
- 壁の高さ: 20単位
- 天井の高さ: 10単位

## 🚀 パフォーマンス最適化

アプリケーションは以下で最適化されています:
- 型安全性のためのTypeScript
- 高速リンティング・整形のためのBiome
- 効率的なThree.jsレンダリング
- 再利用性のためのコンポーネントベースアーキテクチャ

## 🔮 今後の機能拡張

潜在的な改良点:
- [ ] より多様なアートワークタイプの追加（絵画、彫刻）
- [ ] アートワーク情報パネルの実装
- [ ] ライティング効果と影の追加
- [ ] カスタムアートワークアップロードのサポート
- [ ] 複数のギャラリールーム
- [ ] 音響環境
- [ ] VRサポート

## 🤝 コントリビューション

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを開く

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細はLICENSEファイルを参照してください。

## 🙏 謝辞

- 優れた3DグラフィックスライブラリのThree.jsコミュニティ
- シームレスなReact-Three.js統合のReact Three Fiberチーム
- リアルなギャラリー素材のテクスチャリソース