//Maximum  & Minimum Value of An Array
var num = [1, 2, 3, 4, 5];

var max = Math.max.apply(null, num);

var min = Math.max.apply(null, num);

max = -Infinity, min = +Infinity;

for (var i = 0; i < num.length; i++) {
  if (num[i] > max) {
  max = num[i];
  }
  if (num[i] < min) {
  min = num[i];
  }
}
