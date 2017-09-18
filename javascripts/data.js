"use strict";

const loadIngredients = require('./ingredients');
const loadCategories = require('./categories');

let ingredientsArray = [];

const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

const whenIngredientsLoad = function(){
	ingredientsArray = JSON.parse(this.responseText).ingredients;
	loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function(){
	let categoryArray = JSON.parse(this.responseText).categories;
	combineArrays(categoryArray);
};

// const combineArrays = (categories) => {
// 	categories.forEach((category) => {
// 		ingredientsArray.forEach((gif) => {
// 			if (gif.category === category.id) {
// 				gif.categoryName = category.name;
// 				gif.categoryDataName = category.dataName;
// 			}
// 		});
// 	});
// 	printToDom(ingredientsArray);
// };

const initializer = () => {
	loadIngredients(whenIngredientsLoad, errorFunction);
};

const getIngredients = () => {
	return ingredientsArray;
};

module.exports = {initializer, getIngredients};