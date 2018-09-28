module.exports = function solveEquation(equation) {
  // convert string to an array of strings, splitting every element
  const eq = equation.split(/(?:,| )+/);
  const a = eq[0];
  let b = 0;
  // check for sign before the variable, since it is a different element
  eq[3] == '+' ? b = eq[4] : b = -eq[4];
  let c = 0;
  eq[7] == '+' ? c = eq[8] : c = -eq[8];
  const d = Math.pow(b, 2) - 4 * a * c;
  const result1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  const result2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  return [result1, result2].sort (function (a, b) {
      return a - b;
    })
  }
