# A Sort Of Guide On Reusable HTML Components

## Why make my own components

During my training, I had to create a portfolio website without any framework. I ended up with a lot of code repetions inside my html and wished I could have reusable elements.Thus the following exercice! 

I'm not trying to reinvent the wheel, I just think it's a nice learning challenge. These are my notes on how to make your own components. They are by no mean complete and most probably contain some errors. I followed [MDN's Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and highly recommend checking it out to get better explainations.

## A little theory on custom elemnts

Custom elements can be autonomous or customisation of built-in element. Autonomous elements inherit from the `HTMLElement` class and their behaviour has to be implementd from scratch. Customised elemnts inherit from a standart element (e.g. `HTMLParagraphElement`) and extends the behaviour of that element.

### Lifecycle callbacks

- `connectCallback()` : called each time the element is added to the document, the specification recommends implementing the element setup here rather than the constructor
- `disconnectedCallback()` : called each time the element is removed from the document
- `connectedMoveCallback()` : when defined, is called instead of `connectCallback()` and `disconnectedCallback()` when the element is moved to a different place in the DOM via `Element.moveBefore()` to avoid running initialisation/cleanup code
- `adoptedCallback()` : called each time the element is moved to a new document
- `attributeChangedCallback` : called when attributes are changed

### States

Autonomous custom elements allow to define states and select against them using the `:state()` pseudo-class function. To make a state selectable, the element calls `HTMLElement.attachInternals()` in its constructor to attach an `ElementInternals` object providing access to a `CustomStateSet` through its `states` property.

Defining a state is done through a getter and setter. The setter adds an identifier (string) to the `CustomStateSet` when the state is true and removes it when false. The identifier is passed to the `:state()` pseudo-class (e.g. `my-element:state(identifier) { border : solid red }`).

``` js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  get customState() {
    return this._internals.states.has('identifier');
  }

  set customState(flag) {
    if (flag) this._internals.states.add('identifier');
    else (flag) this._internals.states.delete('identifier');
  }
}
```
