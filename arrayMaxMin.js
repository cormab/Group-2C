/**
	Given a specified array, return the maximum and minimum numbers
	Algorithm for creating a function arrayMaxMin which accepts two parameters: 
	 - an array conataining numbers 
	 - a selector specifying if max or min should be returned 
	and returns the highest value
	
	1.create variable called result that will hold the value to be returned
	2.Check which selector was sent as a parameter:
		if 'max' was sent as selector value, call inbuilt function to get max value of the array
		if 'min' was sent as selector value, call inbuilt function to get min value of the array
	3.returns the calculated value - result
**/

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
	
	//Ata's code:
	/* 
	+Math.min.apply(Math, [100,13,3,6]); // 3
	+Math.max.apply(Math, [100,13,3,6]); // 100
	*/

	// Rolake's Code
	/* 
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
	
	// Wilfred's code
	/*
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
	
	//Liasu's Code
	/*
	Array.max = function( array ){
		return Math.max.apply( Math, array );
	};
	Array.min = function( array ){
		return Math.min.apply( Math, array );
	};
	}
	*/
	
	//Richard's code
	/**Given a specified array, return the maximum and minimum numbers
	Algorithm for creating a function getMaxValue which accepts an array conataining numbers and returns the highest value
	1.create variable called largest to hold the first item of the array
	2.loop through the array:
		if largest < current item of the array
			set largest = current item
		if current item = the last item of the list
			return largest
			break out of the loop. 
	3.returns the maximum number in the array**/
	//code
	/*
	function getMinValue(list)
	{
	  var smallest=list[0];
	  for (i=0;i<list.length;i++)
	  {
		if (smallest<list[i])
		{
		  smallest=list[i];
		}
		if (list[i]==list.length)
		{
		  return smallest;
		  break;
		}
	  }
	}
	function getMaxValue(list)
	{
		var largest=list[0];
		for (i=0; i<list.length;i++)
		{
			if (largest<list[i])
			{
				largest=list[i];
			}
			if (list[i]==list.length)
			{
				return largest;
				break;
			}
		}
	}
*/