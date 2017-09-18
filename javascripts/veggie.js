"use strict";

const requestVeggie = (onVeggieLoad, onVeggieError) => {
	const veggieRequest = new XMLHttpRequest();
	veggieRequest.addEventListener("error", onVeggieError);
	veggieRequest.addEventListener("load", onVeggieLoad);
	veggieRequest.open("GET", "../data/veggie.json");
	veggieRequest.send();
};

module.exports = requestVeggie;