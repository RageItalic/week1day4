function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  Math.floor(1 + Math.random() * 6);
  var i = -1;
  /* your code here */

  return function() {
    //for(var i = 0; i < list.length; i++){
      //return list[i];
    //}
    i++;
    return list[i];

    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
