function arrayMaxMin(arr, selector) {
	result = 0;
	if (selector == "min") {
		result = Math.min.apply(Math, arr); 
	}
	else if (selector == "max") {
		result = Math.max.apply(Math, arr);
	}
	else {
		return -100;
	}
	return result;
}
	
	/* Ata's code:
	+Math.min.apply(Math, [100,13,3,6]); // 3
	+Math.max.apply(Math, [100,13,3,6]); // 100
	*/

	/* Rolake's Code
	function arrayMax(arr) {
		var max = -100;
		for (var i in arr) {
			max = (arr[i] > max) ? arr[i] : max;
			// if(arr[i] > max){arr[i] is new maximum else change nothing}
		}
		return max;
	}
				
	function arrayMin(arr) {
		var min = 100;
		for (var i in arr) {
			min = (arr[i] < min) ? arr[i] : min;
			// if(arr[i] < max){arr[i] is new minimum else change nothing}
		}
		return min;
	}
	*/
	
	/* Wilfred's code
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
	*/