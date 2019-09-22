//42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode.  Go to the editor
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function numberOrder(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  } else if (z > y) return "Soft mode";
  else return "Undefinded";
}

console.log(numberOrder(10, 15, 31));
console.log(numberOrder(24, 22, 31));
console.log(numberOrder(50, 21, 15));
