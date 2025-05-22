import { Canvas } from "@react-three/fiber";
import "./styles/global.css";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import { MovementControls } from "./components/controls/MovementControls.tsx";
import { Gallery } from "./components/gallery/Gallery.tsx";

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
];

export default function App() {
	return (
		<KeyboardControls map={keyboardMap}>
			<div className="w-full h-screen">
				<Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />

					<PointerLockControls />
					<MovementControls />

					<Gallery />
				</Canvas>
			</div>
		</KeyboardControls>
	);
}
