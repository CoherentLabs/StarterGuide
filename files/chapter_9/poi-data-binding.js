class POIHandler {
	constructor() {
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	init(element, value) {
		element.style.left = `${value.x}px`;
		element.style.top = `${value.y}px`;
		element.style.backgroundImage = `url(./assets/map-${
			!value.locked ? value.icon : "locked"
		}-icon.png)`;

		element.addEventListener("mouseenter", this.onMouseEnter);
		element.addEventListener("mouseleave", this.onMouseLeave);
	}

	update(element, value) {
		this._tooltip = this.createTooltip(
			value.title,
			value.description,
			value.locked
		);
		element.innerHTML = "";
		element.appendChild(this._tooltip);
	}

	deinit(element) {
		element.removeEventListener("mouseenter", this.onMouseEnter);
		element.removeEventListener("mouseleave", this.onMouseLeave);
	}

	createTooltip(title, description, locked) {
		const tooltip = document.createElement("div");
		if (!locked) {
			tooltip.classList.add("tooltip");
			tooltip.innerHTML = `<div class="tooltip-title">${title}</div><div class="tooltip-description">${description}</div>`;
		}
		return tooltip;
	}

	onMouseEnter() {
		this._tooltip.style.display = "block";
	}

	onMouseLeave() {
		this._tooltip.style.display = "none";
	}
}
