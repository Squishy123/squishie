class Button extends Actor {
  constructor(onToggled) {
    super();
    this.onToggled = onToggled;
  }

  init() {
    super.init();
    let e = document.createElement("button");
    e.setAttribute("class", "btn");
    this.bindElement(e);

    this.inputHandler = new InputHandler();
    this.inputHandler.targetEvents(this.element, {
      click: true
    });

    this.click = this.inputHandler.click;
  }

  setText(text) {
    this.element.innerHTML = text;
  }

  update() {
    this.setLocation({x: this.stage.element.getBoundingClientRect().width/2})
    this.click = this.inputHandler.click;
    if (this.click) {
      this.onToggled();
    }
  }
}
