module.exports = function solveEquation(equation) {
  let str = equation;
  let substr1 = str.replace('^2', '');
  let substr2 = substr1.replace(/\s/g, "");
  let ar = substr2.split('*x');

  let a = ar[0];
  let b = ar[1];
  let c = ar[2];

  let diskr = b * b - 4 * a * c;
  let sqrt = Math.sqrt(diskr);
  let findx1 = (-b + Math.sqrt(diskr)) / (2 * a);
  let findx2 = (-b - Math.sqrt(diskr)) / (2 * a);
  let fidnx = -b / (2 * a);

  if (findx1 < findx2) {
    let mas = [Math.round(findx1), Math.round(findx2)];
    return mas;
  } else {
    let mas = [Math.round(findx2), Math.round(findx1)];
    return mas;
  }
}
