
/*
This code will fetch the original width of the image and the coordinates in the element and load the correct coordinates based on how big the window is when refreshed or opened. This makes the image map more dynamic and responsive and lets you move it around as you like.

Recipe:
1. Get width of image and coordinates in an array and make sure they are numbers.
2. Divide the coordinates found by the original width of the image to get coordinates per pixel.
2.5. Find the new width of the picture and multiply each coordinate by the new width.
3. Convert the coordinates to strings and set them as attributes to each area in the map.
4. Resize and repeat.

Make sure you ID's and classes match
*/

const picture = document.querySelector("#items")
const mapArr = document.querySelectorAll(".map-area")
let width = picture.naturalWidth

const mapCoordsStr = []
const mapCoordsInt = []

for (x of mapArr) {
  mapCoordsStr.push(x.getAttribute("coords"))
}
for (x of mapCoordsStr) {

  x = x.split(',').map(Number);
  mapCoordsInt.push(x)
}
function updateDimensions() {
  for (let x = 0; x < mapCoordsStr.length;x++) {
    mapCoordsInt[x][0] /= width
    mapCoordsInt[x][1] /= width
    mapCoordsInt[x][2] /= width
  }
  width = picture.clientWidth
  for (x in mapCoordsInt) {
    mapCoordsInt[x][0] *= width
    mapCoordsInt[x][1] *= width
    mapCoordsInt[x][2] *= width
    console.log()
  }
  for (x of mapCoordsInt) {
    x = x.join(",")
  }
  let i = 0
  for (let x = 0; x < mapArr.length; x++) {
    mapArr[x].setAttribute("coords", mapCoordsInt[x])
  }
}
window.onload = updateDimensions
window.onresize = updateDimensions

// Rest of the website
