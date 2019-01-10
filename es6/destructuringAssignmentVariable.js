//Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.
const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) 
{	
	//The line below gets the tomorrow property from avgTemperatures, which is an object and assign the tomorrow value property to tempOfTomorrow
	const {tomorrow : tempOfTomorrow } = avgTemperatures;	
	return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); 