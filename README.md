# Group-2C
Given a specified array, return the maximum and minimum numbers

var arr = [2, -3, 5, 10, 2, 30];

alert("Max value is " + arrayMaxMin(arr, "Max"));
alert("Min value is " + arrayMaxMin(arr, "Min"));

function arrayMaxMin(array, selector) {

  var val = "";   // variable to hold the current max/min value.

  for (var i = 0; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = arr[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = arr[i];
      }
    }

  }
  return val; 
}
