"use strict";

const Character = function (race, name, language) {
	this.race = race;
	this.name = name;
	this.language = language;
};

Character.prototype.speak = function () {
	console.log(this.name, this.language);
};

const Sonic = new Character("Животное", "Соник", "Русский");
Sonic.speak();

const Ork = function (race, name, language, weapon) {
	this.race = race;
	this.name = name;
	this.language = language;
	this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.hit = function () {
	console.log("Удар: " + this.weapon);
};

const Chuba = new Ork("Орк", "Чуба", "Орочий", "Булава");
Chuba.speak();
Chuba.hit();

const Elf = function (race, name, language, spell) {
	this.race = race;
	this.name = name;
	this.language = language;
	this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.cast = function () {
	console.log("Заклинание: " + this.spell);
};

const ChuCha = new Elf("Эльф", "ЧуЧа", "Эльфийский", "Метеоритный дождь");
ChuCha.speak();
ChuCha.cast();
