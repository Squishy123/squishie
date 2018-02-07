class InfoBox extends Actor {
    constructor() {
        super(document.createElement('div'));
        let obj = this;
        (function () {
            var throttle = function (type, name, obj) {
                obj = obj || window;
                var running = false;
                var func = function () {
                    if (running) {
                        return;
                    }
                    running = true;
                    requestAnimationFrame(function () {
                        obj.dispatchEvent(new CustomEvent(name));
                        running = false;
                    });
                };
                obj.addEventListener(type, func);
            };

            /* init - you can init any event */
            throttle("resize", "optimizedResize");
        })();

        // handle event
        window.addEventListener("optimizedResize", function () {
            console.log("Resized");
            obj.setBounds({
                width: this.stage.windowWidth * 0.75,
                height: 500
            });
            //recenter
            obj.center();
        });
    }

    preload() {
        this.styleElement({
            "position": 'absolute',
            "text-align": 'center'
        });

        this.setBounds({
            width: window.innerWidth * 0.75,
            height: 500
        });

        //center it first
        this.center();
    }

    setHTML(html) {
        this.element.innerHTML = html;
    }

    center() {
        if (this.stage)
            //let [width, height] = [window.innerWidth, window.innerHeight];
            this.setBounds({
                x: this.stage.windowWidth / 2 - this.getBounds().width / 2,
                y: this.stage.windowHeight / 2 - this.getBounds().height / 2
            });
    }
}