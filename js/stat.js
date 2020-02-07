var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var DOUBLE_GAP = 20;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var HISTO_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
//var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomHslSat = function() {
  var sat = Math.floor(Math.random() * 100) +"%";
  return sat;
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";

  ctx.font = "16px PT Mono";
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура вы победили!", CLOUD_X + DOUBLE_GAP, CLOUD_Y + DOUBLE_GAP);
  ctx.fillText("Список результатов:", CLOUD_X + DOUBLE_GAP, CLOUD_Y + DOUBLE_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000";
    ctx.fillText(players[i], CLOUD_X + DOUBLE_GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + (DOUBLE_GAP + FONT_GAP + GAP) * 2 + HISTO_HEIGHT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + DOUBLE_GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + DOUBLE_GAP * 2 + FONT_GAP + (HISTO_HEIGHT - (HISTO_HEIGHT * times[i]) / maxTime));

    var sat_Hsl = "hsl(240, " + getRandomHslSat() + ", 50%)";
    ctx.fillStyle = sat_Hsl;
    if (players[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    }
    ctx.fillRect(CLOUD_X + DOUBLE_GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + (DOUBLE_GAP + FONT_GAP) * 2 + GAP + (HISTO_HEIGHT - (HISTO_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (HISTO_HEIGHT * times[i]) / maxTime);
  }
};
