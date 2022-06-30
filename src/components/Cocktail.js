import React from "react";
import { Link } from "react-router-dom";

// MAIN COMP..
const Cocktail = ({ id, image, name, info, glass }) => {
	// STATE VALUES
	// FUNCTIONS AND SIDE EFFECTS
	// MAIN
	return (
		<article className="cocktail">
			<div className="img-container">
				<img src={image} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
					more info
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
