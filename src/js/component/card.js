import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = (props) => {
	const {store, actions} = useContext(Context);


	return (
		<div className="card my-3 mx-3 col-3" >
			<img className="card-img-top" src="" alt="Card image cap" />
			<div className="card-body d-flex flex-column align-items-center">
				<h5 className="card-title">{props.itemCard}</h5>
				<p className="card-text">
					{props.firstInfo}
					{props.firstDesc}
				</p>
				<p className="card-text">
					{props.secondInfo}
					{props.secondDesc}
				</p>
				<p className="card-text">
					{props.thirdInfo}
					{props.thirdDesc}
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	itemCard: PropTypes.string,
	firstInfo: PropTypes.string,
	secondInfo: PropTypes.string,
	thirdInfo: PropTypes.string,
	firstDesc: PropTypes.string,
	secondDesc: PropTypes.string,
	thirdDesc: PropTypes.string,
}