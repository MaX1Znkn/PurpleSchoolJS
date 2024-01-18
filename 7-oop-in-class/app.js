"use strict";

class Character {
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;
	}
	speak() {
		console.log(`Меня зовут ${this.name}! Родной язык: ${this.language}`);
	}
}

class Ork extends Character {
	constructor(race, name, language, weapon) {
		super(race, name, language);
		this.weapon = weapon;
	}

	speak() {
		console.log(
			`Я ${this.race}! Меня зовут ${this.name}! Родной язык: ${this.language}`
		);
	}

	hit() {
		console.log("Удар: " + this.weapon);
	}
}

class Elf extends Character {
	constructor(race, name, language, spell) {
		super(race, name, language);
		this.spell = spell;
	}

	speak() {
		console.log(
			`Я ${this.race}! Меня зовут ${this.name}! Родной язык: ${this.language}`
		);
	}

	cast() {
		console.log("Заклинание: " + this.spell);
	}
}

const Sonic = new Character("Животное", "Соник", "Русский");
Sonic.speak();

const Chuba = new Ork("Орк", "Чуба", "Орочий", "Булава");
Chuba.speak();
Chuba.hit();

const ChuCha = new Elf("Эльф", "ЧуЧа", "Эльфийский", "Метеоритный дождь");
ChuCha.speak();
ChuCha.cast();
