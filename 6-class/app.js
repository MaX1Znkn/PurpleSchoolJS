"use strict";

class Car {
	#mark;
	#model;
	#run;

	constructor(mark, model, run) {
		this.#mark = mark;
		this.#model = model;
		this.#run = run;
	}

	set changeRun(run) {
		this.#run = run;
	}

	info() {
		console.log(this.#mark, this.#model, this.#run);
	}
}

const Nissan = new Car("Nissan", "Skyline", "5000");
Nissan.info();
Nissan.changeRun = "1000";
console.log(Nissan);
