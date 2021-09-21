const model = {
	time: getCurrentTime(),
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
