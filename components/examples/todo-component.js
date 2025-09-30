class ToDoComponent extends HTMLElement {
	constructor() {
    super();

    // Attach shadow tree
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // Create container for the component
    const listContainer = document.createElement('div');

    // Get attributes values
    const title = this.title;
    const addItemText = this.addItemText;
    const listItems = this.items;

    // Create element's inner HTML
    listContainer.innerHTML = `
      <style>
        li, div > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .icon {
          background-color: #f7f7f7;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
        }
      </style>

      <h3>${title}</h3>
      <ul class="item-list">
        ${listItems.map(item => `
          <li>${item}
            <button class="todo-remove-item icon">&#10003;</button>
          </li>
        `).join('')}
      </ul>
      <div>
        <label>${addItemText}</label>
        <input class="add-new-list-item-input" type="text" size=50>
        <button class="todo-add-item icon">&#43;</button>
      </div>
    `;

    // Bind methods
    this.addListItem = this.addListItem.bind(this);
    this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(this);
    this.removeListItem = this.removeListItem.bind(this);

    // Append container to the shadow DOM
    shadowRoot.appendChild(listContainer);
	}

  addListItem(e) {
    const textInput = this.shadowRoot.querySelector('.add-new-list-item-input');

    if (textInput.value) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      const childrenLength = this.itemList.children.length;

      li.textContent = textInput.value;
      btn.classList.add('todo-remove-item', 'icon');
      btn.innerHTML = '&#10003;';

      this.itemList.appendChild(li);
      this.itemList.children[childrenLength].appendChild(btn);
      this.handleRemoveItemListeners([btn]);

      textInput.value = '';
    }
  }
	
	connectedCallback() {
		const removeElementButtons = [...this.shadowRoot.querySelectorAll('.todo-remove-item')];
    const addElementButton = this.shadowRoot.querySelector('.todo-add-item');

    this.itemList = this.shadowRoot.querySelector('.item-list');

    this.handleRemoveItemListeners(removeElementButtons);
    addElementButton.addEventListener('click', this.addListItem, false);
	}

  get title() {
    return this.getAttribute('title') || '';
  }

  get items() {
    const items = [];

    [...this.attributes].forEach(attr => {
      if (attr.name.includes('list-item')) items.push(attr.value);
    })

    return items;
  };

  get addItemText() {
    return this.getAttribute('add-item-text') || '';
  }

  handleRemoveItemListeners(array) {
    array.forEach(elem => {
      elem.addEventListener('click', this.removeListItem, false);
    });
  }

  removeListItem(e) {
    e.target.parentNode.remove();
  }

}

customElements.define('todo-component', ToDoComponent);
