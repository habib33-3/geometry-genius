function calculateTriangleArea() {
  //    Get Triangle base value
  const baseField = document.getElementById("triangle-base");
  const base = parseFloat(baseField.value);

  //  Get Triangle height value
  const heightField = document.getElementById("triangle-height");
  const height = parseFloat(heightField.value);

  const area = 0.5 * base * height;

  //   Show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

function calculateRectangleArea() {
  //    Get Rectangle base value
  const widthField = document.getElementById("rectangle-width");
  const width = parseFloat(widthField.value);

  //  Get Rectangle height value
  const heightField = document.getElementById("rectangle-length");
  const height = parseFloat(heightField.value);

  const area = width * height;

  //   Show Rectangle area
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;
}
