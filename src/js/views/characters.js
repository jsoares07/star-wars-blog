import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";

import { Context } from "../store/appContext";



export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-2 border rounded">
			<h3 className="text-centre">Characters</h3>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.characters.map((item, index) => {
					return (
						<Card
							key={index}
							cardItem={item.name}
							// image={}
							firstInfo={"Birth Year: "}
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
	);
};
