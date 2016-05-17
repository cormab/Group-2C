
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
