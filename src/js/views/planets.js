import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";

import { Context } from "../store/appContext";



export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-2 border rounded">
			<h3 className="text-centre">Planets</h3>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.planets.map((item, index) => {
					return (
						<Card
							key={index}
							itemCard={item.name}
							// image={}
							firstInfo={"Weather: "}
							secondInfo={"terrain: "}
							thirdInfo={"Diameter: "}
							firstDesc={item.climate}
							secondDesc={item.terrain}
							thirdDesc={item.diameter}
						/>
					);
				})}
			</div>
		</div>
	);
};
