class Modal extends Actor {
  constructor() {
    super();
  }

  init() {
    super.init();
    this.width = 400;
    this.height = 300;
    this.setDimensions({
      width: this.width,
      height: this.height
    });
    this.x = this.stage.element.getBoundingClientRect().width / 2 - this.width / 2;
    this.y = this.stage.element.getBoundingClientRect().height / 2 - this.height / 2;
    this.setLocation({
      x: this.x,
      y: this.y
    });

    this.styleElement({
      "background-color": "#ffff6b",
      "opacity": 0.75
    });

    this.expanded = false;


    this.button = new Button(() => {
      this.expanded = this.button.click;
    });
    this.addObject(this.button);
    this.button.setText("Open");
  }

  hide(scalingFactor) {
    if (this.getBounds().height <= 0 && this.getBounds().width <= 0) {}

    if (this.getBounds().height > 300) {
      this.height -= window.innerHeight / scalingFactor;
    }
    if (this.getBounds().width > 400) {
      this.width -= window.innerWidth / scalingFactor;
    }
    this.setDimensions({
      height: this.height,
      width: this.width
    });
  }

  show(scalingFactor) {
    if (this.height >= window.innerHeight && this.width >= window.innerWidth) {
      return;
    }
    if (this.height < window.innerHeight) {
      this.height += window.innerHeight / scalingFactor;
    }
    if (this.width < window.innerWidth) {
      this.width += window.innerWidth / scalingFactor;
    }
    this.setDimensions({
      height: this.height,
      width: this.width
    });
  }

  render() {
    if (this.expanded) {
      //reset button
      this.button.setText("Close");
      this.button.onToggled = () => {
        this.expanded = !this.button.click;
      };
      this.show(10);
    } else if (!this.expanded) {
      //reset button
      this.button.setText("Open");
      this.button.onToggled = () => {
        this.expanded = this.button.click;
      };
      this.hide(10);
    }
  }

  update() {
    this.x = this.stage.element.getBoundingClientRect().width / 2 - this.width / 2;
    this.y = this.stage.element.getBoundingClientRect().height / 2 - this.height / 2;

    this.setLocation({
      x: this.x,
      y: this.y
    });
  }
}
