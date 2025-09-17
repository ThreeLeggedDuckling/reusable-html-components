class ButtonComponent extends HTMLElement {
	static observedAttributes = ['id', 'class'];

	constructor() {
		super();
	}
	
	connectedCallback() {
    this.clickCount = 0;
    this.innerHTML = `
			<p>Click me</p>
		`;
    this.addEventListener('click', this.updateClickCount)
	}
  
  updateClickCount(e) {
    const counter = document.getElementById('clickCount');

    this.clickCount++;
    counter.textContent = `You have clicked the button ${this.clickCount} time${this.clickCount > 1 ? 's' : ''}`;
  }
  
}

customElements.define('button-component', ButtonComponent);
