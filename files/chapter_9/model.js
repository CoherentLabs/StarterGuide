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
		label: "River Bank",
	},
	isPaused: false,
	activePauseMenu: "settings",
	inventoryItems: [
		{
			title: 'Sharp Spear',
			count: 1,
			image: 'spear',
			description: 'A thrusting or throwing weapon with long shaft and sharp head or blade. Great for medium to long range combat'
		},
		null,
		null,
		null,
		null,
		null,
		{
			title: 'Horned Helmet',
			count: 1,
			image: 'helmet',
			description: 'Head covering made of a hard material to resist impact with two sharp horns on the side'
		},
		{
			title: 'Axe',
			count: 1,
			image: 'axe',
			description: 'Cutting tool that consists of a heavy edged head fixed to a handle with the edge parallel to the handle and that is used especially for felling trees and chopping and splitting wood or your enemies.'
		},
		{
			title: 'Longbow',
			count: 1,
			image: 'bow',
			description: 'Hand-drawn wooden bow held vertically and used especially by medieval English archers'
		},
		{
			title: 'Arrow',
			count: 5,
			image: 'arrow',
			description: 'Shot from a bow and usually having a slender shaft, a pointed head, and feathers at the butt'
		},
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			title: 'Beer',
			count: 2,
			image: 'beer',
			description: 'Carbonated, fermented alcoholic beverage that is usually made from malted cereal grain (especially barley) and is flavored with hops'
		},
		null,
		null,
		null,
		null,
		null,
		null
	],
	selectedItem: 0,
	itemSelect: (index) => {
		PlayerModel.selectedItem = index;
		engine.updateWholeModel(PlayerModel);
		activeItem.item = PlayerModel.inventoryItems[PlayerModel.selectedItem];

		engine.synchronizeModels();
	},
	
};

const map = {
	zoom: 1,
	x: 0,
	y: 0,
	pointsOfInterest: [
		{
			x: 120,
			y: 429,
			icon: 'village',
			title: 'Village',
			description: 'The village where you were raised.',
			locked: false
		},
		{
			x: 289,
			y: 121,
			icon: 'town',
			title: 'Town',
			description: 'The town of Málhildur.',
			locked: false
		},
		{
			x: 968,
			y: 409,
			icon: 'statue',
			title: 'Statue of Freya',
			description: 'Statue of the goddess Freya. Only thing left from a sunken village.',
			locked: true
		}
	],
	mapTiles: Array.from(Array(64))
}

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

	if (typeof PlayerModel === 'undefined') {
		engine.createJSModel("PlayerModel", model);
	}
	else {
		PlayerModel.time = getCurrentTime();
		engine.updateWholeModel(PlayerModel);
	}

	if (typeof MapModel === 'undefined') {
		engine.createJSModel("MapModel", map);
	}

	engine.createObservableModel("activeItem");
	activeItem.item = PlayerModel.inventoryItems[PlayerModel.selectedItem];

	engine.synchronizeModels();
	updateCurrentTime();
});
