class ButtonComponent extends HTMLElement {
	static observedAttributes = ['id', 'class'];

	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
			<p>Click me</p>
		`;
	}

	attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `ButtonComponent :\n${name} attribute changed from ${oldValue} to ${newValue}.`,
    );
  }

}

customElements.define('button-component', ButtonComponent);
