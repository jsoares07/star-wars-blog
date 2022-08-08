import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const VehiCard = (props) => {
	const {store, actions} = useContext(Context);


	return (
		<div className="card my-3 mx-3 col-3" >
			<img className="card-img-top" src="" alt="Card image cap" />
			<div className="card-body d-flex flex-column align-items-center">
				<h5 className="card-title">{props.cardItem}</h5>
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
			<div className="d-flex justify-content-between">
                        <Link to={"/sinplan/" + props.name}>
                            <button href="#" className="btn btn-outline-primary">
                                Learn More!
                            </button>
                        </Link>

                        <button
                            id="heart"
                            className="btn"
                            onClick={() => {
                                actions.addFavorite(props.name);
                            }}
                        >
                        <a href="#" className="btn btn-primary">❤️</a>
                        </button>   
                    </div> 
		</div>
	);
};

VehiCard.propTypes = {
	image: PropTypes.string,
	cardItem: PropTypes.string,
	firstInfo: PropTypes.string,
	secondInfo: PropTypes.string,
	thirdInfo: PropTypes.string,
	firstDesc: PropTypes.string,
	secondDesc: PropTypes.string,
	thirdDesc: PropTypes.string,
}