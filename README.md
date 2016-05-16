# Group-2C
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
