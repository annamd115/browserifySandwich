"use strict";

const requestBread = (onBreadLoad, onBreadError) => {
	const breadRequest = new XMLHttpRequest();
	breadRequest.addEventListener("error", onBreadError);
	breadRequest.addEventListener("load", onBreadLoad);
	breadRequest.open("GET", "../data/bread.json");
	breadRequest.send();
};

module.exports = requestBread;