import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Database</span>
			</Link>
			<Link to="/characters">
				<button className="btn btn-success mx-2">Character</button>
			</Link>
			<Link to="/vehicles">
				<button className="btn btn-success mx-2">Vehicles</button>
			</Link>
			<Link to="/planets">
				<button className="btn btn-success mx-2">Planets</button>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropleft">
					<button type="button" className="btn btn-warning dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Favorites
					</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
   						 		<li><a className="dropdown-item" href="#">Item 1</a></li>
    							<li><a className="dropdown-item" href="#">Item 2</a></li>
   				 				<li><a className="dropdown-item" href="#">Item 3</a></li>
  						</ul>
				</div>
			</div>
		</nav>
	);
};
