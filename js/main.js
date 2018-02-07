let stage = new Stage(document.querySelector("#stage"));
stage.start(120, 120);

let info = new InfoBox();
info.setHTML("<h1>Hey Jude</h1>")

stage.addActor(info);