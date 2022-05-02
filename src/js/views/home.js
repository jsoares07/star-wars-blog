import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
	}, []);



	return (
		<div className="text-center mt-5">
			<h1 className="text-white">List of favorites</h1>
			<div className="container my-2 border rounded">
			<h3 className="text-centre">Characters</h3>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.characters.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							// image={}
							firstInfo={"Year of birth: "}
							secondInfo={"Gender: "}
							thirdInfo={"Eyes Color: "}
							firstDesc={item.birth_year}
							secordDesc={item.gender}
							thirdDesc={item.eye_color}
						/>
					);
				})}
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
