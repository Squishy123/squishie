let s = new Stage(document.getElementById("stage"));
s.start();

let m = new Modal();

s.addObject(m);

function expand() {
  m.expanded = true;
}

function closed() {
  m.expanded = false;
}