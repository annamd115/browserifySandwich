"use strict";

const requestMeat = (onMeatLoad, onMeatError) => {
	const meatRequest = new XMLHttpRequest();
	meatRequest.addEventListener("error", onMeatError);
	meatRequest.addEventListener("load", onMeatLoad);
	meatRequest.open("GET", "../data/meat.json");
	meatRequest.send();
};

module.exports = requestMeat;