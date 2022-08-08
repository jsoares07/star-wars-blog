import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";


export const CharDescription = (props) => { 

	const {store,actions} = useContext(Context);

    return (
		<div>
			<div className="container">

				<div className="d-flex">
							
						<div>
							<h3>Character{store.character.name}</h3>
						</div>
						<br></br>
						<img src="#" />
						<div>

							<h4 className="description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam a nulla malesuada tincidunt sit amet eget eros. 
							Integer elementum porttitor enim. Maecenas suscipit metus a sem iaculis, in posuere ex hendrerit. 
							Aliquam sed rhoncus nunc, eu faucibus nisi. Fusce pulvinar finibus porttitor. 
							Praesent ullamcorper nunc neque, vitae ornare sem egestas sit amet. Nam ultrices mi in sem viverra fringilla. 
							Cras massa fercu, malesuada id viverra dapibus, bibendum eu justo. 
							Pellentesque ut lis, hendrerit id hendrerit at, egestas id magna. 
							Curabitur leo avelit orci. Etiam ultrices commodo bibendum. Sed dignissim dignissim pharetra. 
							Nam malesuada euismod diam.
							</h4>
							
						</div>

				</div>

				<hr className="breakline" />

				<div className="d-flex  justify-content-between">

					<div className="info">
						<h3>Birth Year</h3> <br /> <h6>{store.character.birth_year} </h6>
					</div>

					<div className="info">
						<h3>Eye Color</h3> <br /> <h6> {store.character.eye_color}</h6>
					</div>
					<div className="info">
						<h3>Gender</h3> <br /> <h6>{store.character.gender}</h6>
					</div>
					<div className="info">
						<h3>Hair Color</h3> <br /> <h6>{store.character.hair_color}</h6>
					</div>
					<div className="info">
						<h3>Height</h3> <br /> <h6>{store.character.height}</h6>
					</div>
				</div>
				<br />
			
				<Link to="/">
				<p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
						Back home
					</p>
				</Link>
			
			</div>
		</div>

	);
};