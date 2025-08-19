const template = document.createElement('template');
template.innerHTML = `
  <style>
    .defaultClass {
      color: #ff4f1a;
    }
    .highlight {
      color: #6323d1;
    }
  </style>
  <div>
    <p>This is <span class="defaultClass"><slot name="slot1">the default</slot></span> content</p>
  </div>
`;

class StyledTComponent extends HTMLElement {
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
      `StyledTComponent :\n${name} attribute changed from ${oldValue} to ${newValue}.`,
    );
  }

}

customElements.define('styled-tcomponent', StyledTComponent);
