# Group-2C
Given a specified array, return the maximum and minimum numbers
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
