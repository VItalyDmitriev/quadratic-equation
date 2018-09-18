module.exports = function solveEquation(equation) {
  var delete_space = equation.replace(/\s/g, "");
  var result = delete_space.match(/\(+|-?[^\^][\d]+/g);
  var D = Math.pow(result[1], 2) - 4*result[0]*result[2];
  if(D>0){
    var x1 = (-result[1] + Math.sqrt(D))/(2*result[0]);
    var x2 = (-result[1] - Math.sqrt(D))/(2*result[0]);
    return [Math.round(x1),Math.round(x2)].sort(compareNumbers);
  }
  else if(D==0){
    var x = -result[1]/(2*result[0]);
    return [x];
  }
  else{
    return NULL;
  }
  function compareNumbers(a, b) {
    return a - b;
  }
}
