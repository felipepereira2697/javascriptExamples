//For in will loop through property names and for of property values

let me = {firstName : 'Felipe Alberto', lastName : 'Pereira', age : 21}
let arr = [26,4,14 ];
arr.foo = 'Hey';

let text = "";
for(let value in me)
{
    //Here we re getting the property value accessing me[value] gives the property value
    text+=me[value];


    
}

/*
    FOR OF loops through iterable objects such as array map and sets, while the FOR IN loops through iterable properties
*/
forOfValues = "";
//Here will only display the array values, as the arr.foo is not an array value, is just a user defined value, it WILL NOT DISPLAY
for(let x of arr)
{
    forOfValues += x;
}

let myMap = new Map();
let cruijff = "Johan Cruijff";
let cristiano = "Cristiano Ronaldo";
let messi = "Lionel Messi";
let ronaldo = "Ronaldo Nazario de Lima";
myMap.set(cruijff);
myMap.set(cristiano);
myMap.set(messi);
myMap.set(ronaldo);

let soccerPlayerConcat = "";
for(let item of myMap)
{
    soccerPlayerConcat += item;
}



var element = document.getElementsByTagName('p');

element[0].innerText = text;
element[1].innerText = forOfValues;
//Result -> Johan Cruijff,Cristiano Ronaldo,Lionel Messi,Ronaldo Nazario de Lima,
element[2].innerText = soccerPlayerConcat;

