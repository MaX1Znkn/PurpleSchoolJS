"use strict";

let validateAge = (birthday) => {
	let birthdayDate = new Date(birthday);
	let now = new Date();
	if (now.getFullYear() - birthdayDate.getFullYear() < 14) return false;
	if (now.getMonth() < birthdayDate.getMonth()) return false;
	if (now.getDate() < birthdayDate.getDate()) return false;
	return true;
};

console.log(validateAge("2010-01-13"));
