import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

// MAIN COMP..
const SearchForm = () => {
	// STATE VALUES
	const { setSearchTerm } = useGlobalContext();
	const searchValue = React.useRef("");
	// FUNCTIONS AND SIDE EFFECTS
	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};
	useEffect(() => {
		searchValue.current.focus();
	}, []);
	const handleSubmit = e => {
		e.preventDefault();
	};
	// MAIN
	return (
		<section className="section search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">search your favorite cocktail</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;

// NOTES

// WHEN USING THE useRef HOOK WE FIRST OF ALL IMPORT IT
// WE THEN CREATE A NEW VARIABLE FOR IT AND SET THIS VARIABLE EQUAL TO THE useRef AND ALSO SET AN INITIAL OR DEFAULT VALUE FOR IT AS AN ARGUEMENT
// MOST TIMES, THIS VALUE IS NULL
// NEXT WE WILL BIND THIS VARIABLE TO THE ELEMENT WE WANT TO MONITOR
// WE DO THIS BY USING THE ref PROPERTY ON THE ELEMEN WE WANT TO SET IT ON
// WE WILL NOW SET THIS ref PROPERTY'S VALUE TO THAT NEW VARIABLE WHICH HOLDS THE HOOK
// WITH THIS, THE SETUP WOULD BE COMPLETE
// ALL WE NEED TO ACCESS THE ELEMENT IS BY CALLING newVariable.current
