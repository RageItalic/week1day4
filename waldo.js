// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, index){
  //for (var i = 0; i < arr.length; i++) {
    if (name === "Waldo") {
      found(index);   // execute callback
      //console.log(arr.indexOf("Waldo"));
    }
  });
}

function actionWhenFound(here) {
  console.log("Found him!" + here) /*arr.indexOf("Waldo")*/
}

/*function anotherActionWhenFound(here) {

}*/

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
/*findWaldo(["Alice", "Bob", "Waldo", "Winston"], anotherActionWhenFound);*/
