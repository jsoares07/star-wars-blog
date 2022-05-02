import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";

import { Context } from "../store/appContext";



export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="container my-2 border rounded">
        <h3 className="text-white text-center">Vehicles</h3>
        <div className="overflow-auto row flex-row flex-nowrap">
				{store.vehicles.map((item, index) => {
					return (
						<Card
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
	);
};
