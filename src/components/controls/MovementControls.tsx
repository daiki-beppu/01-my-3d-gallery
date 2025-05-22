import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const MovementControls = () => {
	const { camera } = useThree();
	const [keys, setKeys] = useState({
		w: false,
		a: false,
		s: false,
		d: false,
	});

	useFrame(() => {
		const speed = 0.05;

		if (keys.w) {
			// 前に移動
			camera.translateZ(-speed);
		}
		if (keys.s) {
			// 後ろに移動
			camera.translateZ(speed);
		}
		if (keys.a) {
			// 左に移動
			camera.translateX(-speed);
		}
		if (keys.d) {
			// 右に移動
			camera.translateX(speed);
		}
	});

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.code) {
				case "KeyW":
					setKeys((prev) => ({ ...prev, w: true }));
					break;
				case "KeyA":
					setKeys((prev) => ({ ...prev, a: true }));
					break;
				case "KeyS":
					setKeys((prev) => ({ ...prev, s: true }));
					break;
				case "KeyD":
					setKeys((prev) => ({ ...prev, d: true }));
					break;
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			switch (event.code) {
				case "KeyW":
					setKeys((prev) => ({ ...prev, w: false }));
					break;
				case "KeyA":
					setKeys((prev) => ({ ...prev, a: false }));
					break;
				case "KeyS":
					setKeys((prev) => ({ ...prev, s: false }));
					break;
				case "KeyD":
					setKeys((prev) => ({ ...prev, d: false }));
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return null;
};
