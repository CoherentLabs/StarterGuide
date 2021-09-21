const model = {
	time: getCurrentTime(),
    currentHealth: 100,
    maxHealth: 100,
    shouldShowHealthWarning() {
		return (
			getCurrHealthPercent(this.currentHealth, this.maxHealth) > 25 &&
			getCurrHealthPercent(this.currentHealth, this.maxHealth) < 50
		);
	},
	shouldShowHealthDanger() {
		return getCurrHealthPercent(this.currentHealth, this.maxHealth) <= 25;
	},
    minimap: {
        id: 8,
        x: 100,
        y: 100,
        angle: 90,
        label: "River Bank"
    },
    isPaused: false
};

function getCurrentTime() {
	const date = new Date();

	return `${date.getHours()}:${date.getMinutes()}`;
}

function updateCurrentTime() {
    setInterval(() => {
        PlayerModel.time = getCurrentTime();
        engine.updateWholeModel(PlayerModel);
        engine.synchronizeModels();
    }, 60000)
}

engine.whenReady.then(() => {
	engine.createJSModel("PlayerModel", model);
	engine.synchronizeModels();
    updateCurrentTime();
});
