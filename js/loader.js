require("js/webfoot/js/lib/timer.js");
require("js/webfoot/js/lib/refresh.js");
require("js/webfoot/js/lib/quadtree.js");
require("js/webfoot/js/lib/webobject.js");
require("js/webfoot/js/lib/actor.js");
require("js/webfoot/js/lib/stage.js");
require("js/webfoot/js/lib/inputhandler.js");

//This is our stuff
require("js/button.js");
require("js/modal.js");
require("js/main.js");

function require(src) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.async = false;
  document.getElementsByTagName('body')[0].appendChild(script);
}
