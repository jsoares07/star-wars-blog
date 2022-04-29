import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h3>Characters</h3>
		</div>
	);
};
