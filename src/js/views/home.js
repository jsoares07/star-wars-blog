import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharCard } from "../component/char-card";
import { PlanCard } from "../component/plan-card";
import { VehiCard } from "../component/vehi-card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
	}, []);



	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Star Wars Universe</h1>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Characters</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
				{store.characters.map((item, index) => {
					return (
						<CharCard
							key={index}
							cardItem={item.name}
							// image={}
							firstInfo={"Year of birth: "}
							secondInfo={"Gender: "}
							thirdInfo={"Eyes Color: "}
							firstDesc={item.birth_year}
							secondDesc={item.gender}
							thirdDesc={item.eye_color}
						/>
					);
				})}
				</div>
			</div>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Vehicles</h3>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.vehicles.map((item, index) => {
					return (
						<VehiCard
							key={index}
							cardItem={item.name}
							// image={}
							firstInfo={"Model: "}
							secondInfo={"Crew: "}
							thirdInfo={"Class: "}
							firstDesc={item.model}
							secondDesc={item.crew}
							thirdDesc={item.vehicle_class}
						/>
					);
				})}
			</div>
			</div>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Planets</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
				{store.planets.map((item, index) => {
					return (
						<PlanCard
							key={index}
							cardItem={item.name}
							// image={}
							firstInfo={"Weather: "}
							secondInfo={"Terrain: "}
							thirdInfo={"Diameter: "}
							firstDesc={item.climate}
							secondDesc={item.terrain}
							thirdDesc={item.diameter}
						/>
					);
				})}
				</div>
			</div>
		</div>
	);
};
