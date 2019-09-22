var minAreaRect = function(points) {
  var pointsSet = {};
  var min = 0,
    ans;
  for (var i = 0; i < points.length; i++) {
    pointsSet[points[i]] = 1;
  }

  for (i = 0; i < points.length; i++) {
    for (var j = 0; j < points.length; j++) {
      // Ayni kordinatlari atla
      if (
        points[i] != points[j] && // bak Digerki dikgortgenin kordinati degil diye
        pointsSet[[points[i][0], points[j][1]]] == 1 &&
        pointsSet[[points[j][0], points[i][1]]] == 1 // Dikdortgen ise
      ) {
        // dikdortgen alani heapla
        ans = Math.abs(
          (Math.abs(points[i][0]) - Math.abs(points[j][0])) * // Carpip alani hesapliyo
            (Math.abs(points[i][1]) - Math.abs(points[j][1])) // Abs her rakami positive ceker
        );

        if (ans != 0 && (min == 0 || min > ans)) {
          min = ans;
        }
      }
    }
  }

  return min;
};

let res = minAreaRect([[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]);
console.log(res);
