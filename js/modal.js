class Modal extends Actor {
  constructor() {
    super();
  }

  init() {
    super.init();
    //TODO FIX OFFSETS
    this.offsetX = 0;
    this.offsetY = 0;
    this.width = 100;
    this.height = 100;
    this.setDimensions({
      width: this.width,
      height: this.height
    });

    this.x = this.stage.element.getBoundingClientRect().width / 2 - this.width / 2 - this.offsetX;
    this.y = this.stage.element.getBoundingClientRect().height / 2 - this.height / 2 + this.offsetY;
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
    this.button.setDimensions({
      width: this.width,
      height: this.height
    });
  }

  hide(scalingFactor) {
    let deltaWidth = this.width;
    let deltaHeight = this.height;
    if (this.getBounds().height <= 100 + this.offsetY && this.getBounds().width <= 100 + this.offsetX) {
      this.width = 100;
      this.height = 100;
      this.setDimensions({
        height: this.height,
        width: this.width
      });
      return;
    }

    if (this.getBounds().height > 100 + this.offsetY) {
      this.height -= window.innerHeight / scalingFactor;
    }
    if (this.getBounds().width > 100 + this.offsetX) {
      this.width -= window.innerWidth / scalingFactor;
    }
    this.setDimensions({
      height: this.height,
      width: this.width
    });
    //Move towards the center
    this.setLocation({
      x: this.x + (deltaWidth - this.width) / 2,
      y: this.y + (deltaHeight - this.height) / 2
    });
  }

  show(scalingFactor) {
    let deltaWidth = this.width;
    let deltaHeight = this.height;
    if (this.height >= window.innerHeight && this.width >= window.innerWidth) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.setDimensions({
        height: this.height,
        width: this.width
      });
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

    //Move towards the center
    this.setLocation({
      x: this.x + (deltaWidth - this.width) / 2,
      y: this.y + (deltaHeight - this.height) / 2
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
    this.x = this.stage.element.getBoundingClientRect().width / 2 - this.width / 2 - this.offsetX;
    this.y = this.stage.element.getBoundingClientRect().height / 2 - this.height / 2 + this.offsetY;

    this.setLocation({
      x: this.x,
      y: this.y
    });
  }
}
