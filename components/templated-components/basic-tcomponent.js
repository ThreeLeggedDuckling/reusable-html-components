const template = document.createElement('template');
template.innerHTML = `
  <div>
    <p>This is <span class="defaultClass"><slot name="slot1">the default</slot></span> content</p>
  </div>
`;

class BasicTComponent extends HTMLElement {
	static observedAttributes = ['id', 'class'];
  
	constructor() {
    super();
	}
	
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(template.content.cloneNode(true));
	}

	attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `BasicTComponent :\n${name} attribute changed from ${oldValue} to ${newValue}.`,
    );
  }

}

customElements.define('basic-tcomponent', BasicTComponent);
