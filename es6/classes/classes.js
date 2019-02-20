//Create objects with more clear
class Animal
{
	constructor(name,eyes, tail, legs, arms, yearBorn)
	{
		this.name = name;
		this.eyes = eyes;
		this.tail = tail;
		this.legs = legs;
		this.arms = arms;
		this.yearBorn = yearBorn;
	}

	get age()
	{
		return this.calcAge();
	}

	calcAge()
	{
		return new Date().getFullYear() - this.yearBorn; 		
	}

	meeting()
	{
		let meeting = "Hey, I am "+this.name+" and I am "+ this.age +" years old";
		console.log(meeting);
		document.getElementById("div1").innerText = meeting;
	}
}

let dog = new Animal("Arya", 2,1,4,0,2015);
dog.meeting();
//Unamed classes
var Person = class {
	constructor(name, age)
	{
		this.name 	= name;
		this.age 	= age;
	}
}

//named classes
var House = class House
{
	constructor(roof, ground)
	{
		this.roof 	= roof;
		this.ground = ground;
	}
}