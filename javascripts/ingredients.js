"use strict";


const loadIngredients = (onIngredientsLoad, onIngredientsError) => {
	const ingredientsLoader = new XMLHttpRequest();
	ingredientsLoader.addEventListener('load', onIngredientsLoad);
	ingredientsLoader.addEventListener('error', onIngredientsError);
	ingredientsLoader.open('GET', '../data/ingredients.json');
	ingredientsLoader.send();
};

module.exports = loadIngredients;