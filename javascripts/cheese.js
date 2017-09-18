"use strict";

const requestCheese = (onCheeseLoad, onCheeseError) => {
	const cheeseRequest = new XMLHttpRequest();
	cheeseRequest.addEventListener("error", onCheeseError);
	cheeseRequest.addEventListener("load", onCheeseLoad);
	cheeseRequest.open("GET", "../data/cheese.json");
	cheeseRequest.send();
};

module.exports = requestCheese;