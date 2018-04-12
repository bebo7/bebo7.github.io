var src = document.getElementById("jonas");
var srcDim = {width: 278, height: 275};

var c = document.getElementById("jonaslemon");
var ctx = c.getContext("2d");
var canvas = {width: 500, height: 500};

var jonaslemonline = new Array(new Jonas, new Jonas, new Jonas, new Jonas, new Jonas);

function Jonas() {
  this.src=src;
}

function drawJonaslemon() {
  for (var i = 0; i < jonaslemonline.length; i++) {
    ctx.drawImage(jonaslemonline[i].src, (canvas.width-srcDim.width)*((i+1)/jonaslemonline.length), (canvas.height-srcDim.height)*((i+1)/jonaslemonline.length));
  }
}

btnNewJonaslemon.onclick = function() {
  jonaslemonline.push(new Jonas());
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawJonaslemon();
};

drawJonaslemon();
