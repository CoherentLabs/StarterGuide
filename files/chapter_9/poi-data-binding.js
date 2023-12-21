class POIHandler {
    constructor() {
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    init(element, value) {
        element.parentNode.style.left = `${value.x}%`;
        element.parentNode.style.top = `${value.y}%`;
        element.style.backgroundImage = `url(./assets/map-${!value.locked ? value.icon : 'locked'}-icon.png)`;

        this._tooltip = this.createTooltip(value.title, value.description, value.locked);
        element.appendChild(this._tooltip);

        element.addEventListener('mouseenter', this.onMouseEnter);
        element.addEventListener('mouseleave', this.onMouseLeave);
    }

    update(element, value) {
        if (value.locked) return;

        this._tooltip.innerHTML = `<div class="tooltip-title">${value.title}</div><div class="tooltip-description">${value.description}</div>`;
    }

    deinit(element) {
        element.removeEventListener('mouseenter', this.onMouseEnter);
        element.removeEventListener('mouseleave', this.onMouseLeave);
    }

    createTooltip(title, description, locked) {
        const tooltip = document.createElement('div');
        if (!locked) {
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `<div class="tooltip-title">${title}</div><div class="tooltip-description">${description}</div>`;
        }
        return tooltip;
    }

    onMouseEnter() {
        this._tooltip.style.display = 'block';
    }

    onMouseLeave() {
        this._tooltip.style.display = 'none';
    }
}
