var num = {"x": 15, "y": 10};
var watercolors;
var start_values = [];

function setup() {
  createCanvas(1080, 720);
  background(255);
  
  watercolors = [color(68,88,148), color(58,144,171), color(62,190,155), color(143,217,155)];
  
  for (var i = 0; i < num.x; i++) {
    row = [];
    for(var j = 0; j < num.y; j++) {
      append(row, {r: random(-1, 1), t: random(-1, 1)});
    }
    append(start_values, row);
  }
  
  frameRate(24);
}

function draw() {
  background(color(54,55,102));
  
  for (var j = 0; j < num.y; j++){
    for (var i = 0; i < num.x; i++) {
      var r = start_values[i][j].r*sin(frameCount / 10.0);
      strokeWeight(3);
      stroke(0,255);
      fill(watercolors[int(j*(frameCount % 100.0)/100.0) % 4]);
      push();
  
      var t = start_values[i][j].t * sin(frameCount / 10.0);
      translate( i*60+75+t*j*2,j*60+75 + t*j*3);
      rotate(PI/80*j*r);
  
      rect(-25,-25, 50, 50);
      pop();
    }
  }
}