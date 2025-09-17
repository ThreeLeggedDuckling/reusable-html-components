class AttributeCustomisedComponent extends HTMLElement {
	constructor() {
		super();
	}
  
  connectedCallback() {
    const t = this.title;
    this.innerHTML = `
      <style>
        .value {
          color: #58b913;
        }
        .na {
          font-style: italic;
        }
      </style>
      <p>Title : <span class=${t ? "value" : "na"}>${t ? t : "no title"}</span></p>
    `;
	}

  get title() {
    return this.getAttribute('title');
  }

}

customElements.define('attribute-customised-component', AttributeCustomisedComponent);