var controls = {
  mt: false,
  mb: false,
  ml: false,
  mr: false,
  tl: false,
  tr: false,
  bl: false,
  br: false,
  mtr: false
}

function drawRectangle(target, left, top) {
  var rect = new fabric.Rect({
    left,
    top,
    fill: 'red',
    width: 54,
    height: 108,
    angle: 0,
    snapAngle,
    selectable: (target === puzzle) ? false : true
  });
  rect.setControlsVisibility(controls);
  target.add(rect)
}

function drawHexagon(target, left, top) {
  var hexagon = new fabric.Polygon(regularPolygonPoints(6, 54), {
    left,
    top,
    fill: 'blue',
    snapAngle,
    selectable: (target === puzzle) ? false : true
  })
  hexagon.setControlsVisibility(controls)
  target.add(hexagon)
}

function drawTriangle(target, left, top) {
  var triSide = 54
  var triangle = new fabric.Triangle({
    left,
    top,
    fill: 'goldenrod',
    height: triSide,
    width: triSide * 2,
    snapAngle,
    selectable: (target === puzzle) ? false : true
  })
  triangle.setControlsVisibility(controls)
  target.add(triangle)
}

function drawTrapezoid(target, left, top) {
  // trapezoid
  var mult = 2 * grid
  var trapezoid = new fabric.Polygon(
    [
      { x: 1 * mult, y: 1 * mult },
      { x: 3 * mult, y: 1 * mult },
      { x: 2.5 * mult, y: 2 * mult },
      { x: 1.5 * mult, y: 2 * mult }
    ],
    {
      left,
      top,
      fill: 'yellow',
      snapAngle,
      selectable: (target === puzzle) ? false : true
    }
  )
  trapezoid.setControlsVisibility(controls)
  target.add(trapezoid)
}

function drawPentagon(target, left, top) {
  var pentagon = new fabric.Polygon(regularPolygonPoints(5, 54), {
    left,
    top,
    fill: 'violet',
    snapAngle,
    selectable: (target === puzzle) ? false : true
  })
  pentagon.setControlsVisibility(controls)
  target.add(pentagon)
}

function drawRhombus(target, left, top) {
  var mult = grid * 2
  var rhombus = new fabric.Polygon([
    { x: 2 * mult, y: 1 * mult },
    { x: 3 * mult, y: 1 * mult },
    { x: 2.5 * mult, y: 2 * mult },
    { x: 1.5 * mult, y: 2 * mult }
  ], {
    left,
    top,
    fill: 'teal',
    snapAngle, 
    selectable: (target === puzzle) ? false : true
  })
  rhombus.setControlsVisibility(controls)
  target.add(rhombus)
}

/*
* polygon generator
* https://stackoverflow.com/a/29320278/2312657 
*/
function regularPolygonPoints(sideCount, radius){
  var sweep = Math.PI*2/sideCount;
  var cx = radius;
  var cy = radius;
  var points = [];
  for(var i = 0; i < sideCount; i++){
      var x = cx + radius * Math.cos(i * sweep);
      var y = cy + radius * Math.sin(i * sweep);
      points.push({ x, y });
  }
  return(points);
}