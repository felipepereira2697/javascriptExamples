//Proxy object is used to define custom behavior when the propety of a target object are accessed
//The Proxy object is used to define custom behavior for fundamental operations
let handler = {
	get (target, key){
		return key in target ? target[key] : 37;
	}
};

let p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a,p.b);
//the output will be --> false 37 <--
//it only happens if you declare the object as a proxy
console.log('c' in p, p.c);


//normal object instantiation
let notProxy = {};
notProxy.a = 1;
notProxy.b = undefined;

console.log(notProxy.a, notProxy.b);
//here you ll get --> false undefined <--
console.log('c' in notProxy, notProxy.c);



//Example 2
let validator = {
	//before setting property to that object, this conditions will be checked
	set: function(obj,prop, value)
	{
		if(prop === 'age')
		{
			if(typeof value !== 'number' || Number.isNaN(value))	
			{
				console.log('Age must be a number');
			}
			if(value < 0)
			{
				console.log('Age must be a positive number');
			}
		}
		obj[prop] = value;
		return true;
	}
}

//Proxies can be helpful to validate data that you re passing to the object
let person = new Proxy({}, validator);
//this will print Age must be a number;
person.age = 'heyyyyyyyy';
console.log(person.age);