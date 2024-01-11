"use strict";

let dice = (n) => {
	let max = Number(n.slice(1));
	let result = Math.round(Math.random() * (max - 1) + 1);
	console.log(result);
};

dice("d3");
