import { Module } from "../core/module";

export class TimerModule extends Module {
	constructor() {
		super("Таймер", "Таймер отсчета");
	}
	trigger() {
		const modalBlock = document.querySelector("#myModal");
		modalBlock.addEventListener("click", this.#clickOnModal.bind(this));
		this.#openModal();
	}

	#clickOnModal(event) {
		if (event.target?.dataset?.second) {
			const second = Number(event.target.dataset.second);
			this.#openTimer(second);
			this.#closeModal();
		}
		if (event.target?.id === "closeModal") {
			this.#closeModal();
		}
	}

	#openTimer(s) {
		setTimeout(() => {
			console.log("open timer");
		}, s * 1000);
	}

	#openModal() {
		const modalBlock = document.querySelector("#myModal");
		modalBlock.style.display = "block";
	}

	#closeModal() {
		const modalBlock = document.querySelector("#myModal");
		modalBlock.style.display = "none";
	}
}

