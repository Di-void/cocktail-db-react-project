import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// MAIN COMP..
const SingleCocktail = () => {
	// STATE VALUES
	const [loading, setLoading] = React.useState(false);
	const [cocktail, setCocktail] = React.useState(null);
	const { id } = useParams();
	// FUNCTIONS AND SIDE EFFECTS

	React.useEffect(() => {
		setLoading(true);
		async function getCocktail() {
			try {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];

					// INGREDIENTS ARRAY
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];

					// NEW OBJECT FOR ALL OF THE ABOVE DESTRUCTURING
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
		getCocktail();
	}, [id]);

	// MAIN
	if (loading) {
		return <Loading />;
	}
	if (!cocktail) {
		return <h2 className="section-title">no cocktail to display</h2>;
	}

	const { name, image, info, category, glass, instructions, ingredients } =
		cocktail;
	return (
		<section className="section cocktail-section">
			<Link to="/" className="btn btn-primary">
				Back Home
			</Link>
			<h2 className="section-title">{name}</h2>
			<div className="drink">
				<img src={image} alt={name} />
				<div className="drink-info">
					<p>
						<span className="drink-data">name :</span>
						{name}
					</p>
					<p>
						<span className="drink-data">category :</span>
						{category}
					</p>
					<p>
						<span className="drink-data">info :</span>
						{info}
					</p>
					<p>
						<span className="drink-data">glass :</span>
						{glass}
					</p>
					<p>
						<span className="drink-data">instructions :</span>
						{instructions}
					</p>
					<p>
						<span className="drink-data">ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}>{item}</span> : null;
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;

// NOTES

// WHEN DEALING WITH AJAX OR HTTP REQUESTS, YOU HAVE TO DO A PROPER ERROR HANDLING
// HANDLE CASES FOR WHEN THE RESULT IS NOT RETURNED ADEQUATELY TO AVOID BREAKING OF YOUR APPLICATION
// FOR THIS SCRIPT, IF THE REQUEST WASN'T ABLE TO COMPLETE, WE WOULD SET THE STATE VALUE OF cocktail BACK TO NULL
// IF WE DON'T HANDLE THIS CASE IN OUR CONDITIONAL RENDERING, OUR APPLICATION WILL BREAK CAUSE WE LATER GO ON TO USE THE cocktail STATE VALUE TO DISPLAY CONTENT TO USER.
