module.exports = function reverse (n) {
    let newN = '';
    n = Math.abs(n);
    n = n.toString();
    let i = n.length - 1;
    while ( i >= 0) {
      newN = newN + `${n[i]}`;
      i = i - 1;
    }
    return Number(newN);
}
