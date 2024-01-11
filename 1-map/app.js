"use strict";

let array = [
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 1, name: "Вася" },
];
let arrayResult = [];

let set = new Set(array.map((elem) => elem.id));
set.forEach((setElem) =>
	arrayResult.push(array.find((arrayElem) => arrayElem.id == setElem))
);

console.log(arrayResult);
