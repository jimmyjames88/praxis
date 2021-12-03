function drawSquareGrid(target){
  for (var i = 0; i < (target.width / grid * 2); i++) {
    target.add(new fabric.Line([i * grid * 4, 0, i * grid * 4, target.width], {
      stroke: '#ccc',
      selectable: false
    }));
    target.add(new fabric.Line([i * grid + (grid / 3 * i), 0, i * grid + (grid / 3 * i), canvas.width], {
      stroke: '#eee',
      selectable: false,
      strokeDashArray: [3, 3],
      strokeWidth: 1,
    }));
    target.add(new fabric.Line([0, i * grid * 4, target.width, i * grid * 4], {
      stroke: '#ccc',
      selectable: false
    }))
    target.add(new fabric.Line([0, i * grid + (grid / 3 * i), canvas.width, i * grid + (grid / 3 * i)], {
      stroke: '#ccc',
      selectable: false,
      strokeDashArray: [3, 3],
      strokeWidth: 1,
    }))
  }
}

function drawTriangleGrid(target) {
  for (var i = 0; i < (target.width / grid * 2); i++) {
    target.add(new fabric.Line([ grid * i, 0, grid * i, canvas.width], {
      stroke: '#ccc',
    }))
    target.add(new fabric.Line([ 0, grid * i, canvas.width, grid * i], {
      stroke: '#ccc',
    }))
    target.add(new fabric.Line([ grid * i, 0, grid * i, canvas.width], {
      stroke: '#ccc',
      angle: 45
    }))
    target.add(new fabric.Line([ 0, grid * i, canvas.width, grid * i], {
      stroke: '#ccc',
      angle: 45
    }))
  }
}