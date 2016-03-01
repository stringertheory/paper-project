var polygon = new Path.RegularPolygon({
  center: view.center,
  sides: 6,
  radius: 80,
  strokeWidth: 5,
  strokeColor: "blue",
  fillColor: "lightblue",
});

var label = new PointText({
  point: view.center,
  content: "hello\nworld",
  justification: "center",
  fillColor: "blue",
  fontWeight: "bold",
  fontSize: 30,
});

function onResize(event) {
  polygon.position = view.center;
  label.position = view.center;
}
