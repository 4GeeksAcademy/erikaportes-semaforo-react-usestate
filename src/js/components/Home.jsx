import React from "react";
import { useState } from "react";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState(" ");

	return (
		<>

			<div className="contenedor">
				<div className="stickSemaforo"></div>
				<div className="baseSemaforo">

					<div onClick={() => setSelectedColor("rojo")}
						className={"light rojo" + (selectedColor === "rojo" ? " glow" : "")}>
					</div>

					<div onClick={() => setSelectedColor("amarillo")}
						className={`light amarillo ${selectedColor === "amarillo" ? " glow" : ""}`}>
					</div>

					<div onClick={() => setSelectedColor("verde")}
						className={"light verde" + (selectedColor === "verde" ? " glow" : "")}>
					</div>

				</div>
			</div>

		</>
	);
};
