class Button extends Actor {
  constructor(onToggled) {
    super();
    this.onToggled = onToggled;
  }

  init() {
    let e = document.createElement("h1");
    e.setAttribute("class", "display-2 unselectable");
    this.bindElement(e);
    super.init();

    this.inputHandler = new InputHandler();
    this.inputHandler.targetEvents(this.element, {
      click: true
    });

    this.click = this.inputHandler.click;

    this.setLocation({
      y: 5
    })
  }

  setText(text) {
    this.element.innerHTML = text;
  }

  update() {
    this.click = this.inputHandler.click;
    if (this.click) {
      console.log("CLICKED")
      this.onToggled();
    }
  }
}
