function arrayMaxMin() {
	var arrlen = Math.round((Math.random() * 7) + 3);
	var arr = [];
	for (var i = 0; i < arrlen; i++) {
		arr.push(Math.round(Math.random() * 20));
	}
	alert("Maxixmum value in array [" + arr + "] is " + arrayMax(arr));
	alert("; Minimum value is " + arrayMin(arr));

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
}