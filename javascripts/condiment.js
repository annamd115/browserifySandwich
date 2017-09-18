"use strict";

const requestCondiment = (onCondimentLoad, onCondimentError) => {
	const condimentRequest = new XMLHttpRequest();
	condimentRequest.addEventListener("error", onCondimentError);
	condimentRequest.addEventListener("load", onCondimentLoad);
	condimentRequest.open("GET", "../data/condiment.json");
	condimentRequest.send();
};

module.exports = requestCondiment;