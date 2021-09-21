function getCurrHealthPercent(current, max) {
	return (current * 100) / max;
}

let attached = false;

document.addEventListener("keydown", (e) => {
	//Escape Key
	if (e.keyCode === 27) {
		engine.trigger("pause_toggle");
	}
});

engine.on("pause_toggle", () => {
	PlayerModel.isPaused = !PlayerModel.isPaused;
	engine.updateWholeModel(PlayerModel);
	engine.synchronizeModels();

	if (PlayerModel.activePauseMenu === "settings" && PlayerModel.isPaused) {
		attachSliderListeners();
	}
});

function changeScreen(event) {
	if (event.target.classList.contains("tab")) {
		engine.trigger("change_menu", event.target.textContent.toLowerCase());
	}
}

engine.on("change_menu", (menu) => {
	PlayerModel.activePauseMenu = menu;
	engine.updateWholeModel(PlayerModel);
	engine.synchronizeModels();

	if (menu === "settings") {
		attachSliderListeners();
	}
});

function attachSliderListeners() {
	const sliderVolume = document.querySelector(".slider-volume");
	const volumeValue = document.querySelector(".volume-value");

	sliderVolume.addEventListener("sliderupdate", (e) => {
		volumeValue.textContent = e.detail;
	});

	const sliderDifficulty = document.querySelector(".slider-difficulty");
	const difficultyValue = document.querySelector(".difficulty-value");

	sliderDifficulty.addEventListener("sliderupdate", (e) => {
		difficultyValue.textContent = e.detail;
	});
}
