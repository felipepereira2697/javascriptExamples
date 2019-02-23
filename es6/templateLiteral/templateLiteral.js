//will print the white spaces
console.log(`string line 1






	string line 2`);

//expression interpolation

let a = 4;
let b = 10;
console.log(`Adding ${a} to ${b} is equal to ${a+b}`);

//tagged template literals
//pass a template literal to a function

function tag(strings, ...values)
{
	console.log(strings);
	console.log(values);
	console.log(strings.length);
	console.log(values.length);


	return "JS Nuggets";
}

//pass template literal to a function
console.log(tag` the correct answer is ${a+b} not ${a*b}`);
//the example above inputs two arrays --> 1 for the strings and other to template literal values
// [" the correct answer is ", " not ", ""] values of strings
// [14, 40] ...values of array


