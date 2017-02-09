function myOwnMap (arrayToMap, callBackFunction){
  var output = [];
  for (var i = 0; i < arrayToMap.length; i++){

    output.push(callBackFunction(arrayToMap[i], i));
  }
  return output;
}

var p = myOwnMap([1,2,3,4,8], function (a, b){
  return a*7;
})
console.log(p);