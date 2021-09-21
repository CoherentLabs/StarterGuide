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

let offsetY, startX, startY, limitX, limitY;

function mapDragStart(event) {
	const mapWrapper = event.currentTarget;
	const map = event.currentTarget.firstChild;

	offsetY = mapWrapper.getBoundingClientRect().y;

	limitX =
		map.getBoundingClientRect().width -
		mapWrapper.getBoundingClientRect().width;
	limitY =
		map.getBoundingClientRect().height -
		mapWrapper.getBoundingClientRect().height;

	startX = event.clientX;
	startY = event.clientY - offsetY;

	document.addEventListener("mousemove", mapDrag);
	document.addEventListener("mouseup", mapDragEnd);
}

function mapDrag(event) {
	MapModel.x = clamp(MapModel.x + event.clientX - startX, -limitX, 0);
	MapModel.y = clamp(
		MapModel.y + event.clientY - startY - offsetY,
		-limitY,
		0
	);

	startX = event.clientX;
	startY = event.clientY - offsetY;

	engine.updateWholeModel(MapModel);
	engine.synchronizeModels();
}

function mapDragEnd() {
	document.removeEventListener("mousemove", mapDrag);
	document.removeEventListener("mouseup", mapDragEnd);
}

function clamp(value, min, max) {
	return Math.min(Math.max(min, value), max);
}

function zoom(event) {
	const mapWrapper = event.currentTarget;
	const map = event.currentTarget.firstChild;

	offsetY = mapWrapper.getBoundingClientRect().y;

	const initialScale = MapModel.zoom;

	MapModel.zoom = clamp(MapModel.zoom + event.deltaY * -0.01, 1, 3);

	limitX =
		map.getBoundingClientRect().width * (MapModel.zoom / initialScale) -
		mapWrapper.getBoundingClientRect().width;
	limitY =
		map.getBoundingClientRect().height * (MapModel.zoom / initialScale) -
		mapWrapper.getBoundingClientRect().height;

	MapModel.x = clamp(
		MapModel.x + event.clientX * (MapModel.zoom - initialScale) * -1,
		-limitX,
		0
	);
	MapModel.y = clamp(
		MapModel.y + (event.clientY - offsetY) * (MapModel.zoom - initialScale) * -1,
		-limitY,
		0
	);

	engine.updateWholeModel(MapModel);
	engine.synchronizeModels();
}
