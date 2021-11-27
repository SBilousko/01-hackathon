import { setInterval } from "core-js";
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

	#openModal() {
		const modalBlock = document.querySelector("#myModal");
		modalBlock.style.display = "block";
	}

	#closeModal() {
		const modalBlock = document.querySelector("#myModal");
		modalBlock.style.display = "none";
	}

	#openMessage() {
		const modalBlock = document.querySelector("#myMessage");
		modalBlock.style.display = "block";
	}

	#closeMessage() {
		const messageBlock = document.querySelector("#myMessage");
		messageBlock.style.display = "none";
	}

	#openTimer(s) {
		let timeInSeconds = s;
		let min = 0; let sec = 0;
		const timerBlock = document.querySelector("#myTimer");
		timerBlock.style.display = "block";
		const minBlock = document.querySelector("#minute");
		const secBlock = document.querySelector("#second");
		const dsBlock = document.querySelector("#ds");

		let myTimer = setInterval(() => {
			let ds = 10;
			if (timeInSeconds > 0) {
				--timeInSeconds;
				min = Math.floor(timeInSeconds / 60);
				sec = timeInSeconds % 60;
				minBlock.innerText = "0" + min;
				if (sec < 10) {
					secBlock.innerText = "0" + sec;
				}
				else { secBlock.innerText = sec; }

				let dsInterval = setInterval(() => {
					if (ds > 9) {
						dsBlock.innerText = ds;
						--ds;
					}
					else if (ds >= 0) {
						dsBlock.innerText = "0" + ds;
						--ds;
					}
					else if (ds < 0) {
						clearInterval(dsInterval);
					}
				}, 100);
			}
			else {
				clearInterval(myTimer);
				timerBlock.style.display = "none";
				this.#openMessage();
				setTimeout(() => { this.#closeMessage(); }, 2000);
			}

		}, 1000);
	}
}
const timer = new TimerModule();
timer.trigger();

