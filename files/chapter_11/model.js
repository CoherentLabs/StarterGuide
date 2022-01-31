
function getCurrentTime() {
	const date = new Date();

	return `${date.getHours()}:${date.getMinutes()}`;
}

function updateCurrentTime() {
	setInterval(() => {
		PlayerModel.time = getCurrentTime();
		engine.updateWholeModel(PlayerModel);
		engine.synchronizeModels();
	}, 60000);
}

engine.whenReady.then(() => {
	engine.registerBindingAttribute('poi', POIHandler);
	
	engine.createObservableModel("activeItem");
	engine.addSynchronizationDependency(PlayerModel, activeItem);
	
	PlayerModel.time = getCurrentTime();
	updateCurrentTime();
	engine.updateWholeModel(PlayerModel);
	engine.synchronizeModels();
});
