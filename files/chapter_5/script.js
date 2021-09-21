function getCurrHealthPercent(current, max) {
	return (current * 100) / max;
}

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
});
