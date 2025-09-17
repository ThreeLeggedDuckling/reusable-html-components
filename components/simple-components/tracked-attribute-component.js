class TrackedAttributeComponent extends HTMLElement {
	static observedAttributes = ['class'];

	constructor() {
		super();
	}
	
	connectedCallback() {
    this.className = 'tracked';
    this.innerHTML = `
      <p>A simple component with its class attribute tracked</p>
    `;
	}

	attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `TrackedAttributeComponent :\n${name} changed from '${oldValue}' to '${newValue}'.`,
    );
  }

}

customElements.define('tracked-attribute-component', TrackedAttributeComponent);
