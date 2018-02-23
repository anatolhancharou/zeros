module.exports = function getZerosCount(number) {
  // your implementation
  var n = 5;
  var zeroCount = 0;
  while (n <= number) {
    zeroCount += Math.floor(number / n);
    n *= 5;
  }
  return zeroCount;
}
