import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {


	return (
		<div className="text-center mt-5">
			<h1 className="text-white">List of favorites</h1>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Characters</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					<Card/>
				</div>
			</div>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Vehicles</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					<Card/>
				</div>
			</div>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Planets</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					<Card/>
				</div>
			</div>
		</div>
	);
};
