import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./clock.js";
//create your first component

export function Home() {
	let tick = 1000000;
	let tick2 = 100000;
	let tick3 = 10000;
	let tick4 = 1000;

	return (
		<div className="row m-2 justify-content-center mainBox rounded ">
			<div className=" text-center rounded m-1 mt-2 glow">
				<i
					className="fa fa-clock-o fa-3x bg-dark p-3 rounded text-white"
					aria-hidden="true"
				/>
			</div>
			<Counter timer={tick} />
			<Counter timer={tick2} />
			<Counter timer={tick3} />
			<Counter timer={tick4} />
		</div>
	);
}
