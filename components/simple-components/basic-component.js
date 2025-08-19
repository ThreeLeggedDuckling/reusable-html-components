class BasicComponent extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
			<p>A simple component</p>
		`;
	}

}

customElements.define('basic-component', BasicComponent);
