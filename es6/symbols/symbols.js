//Symbols is a new datatype in es6 they re unique and immutable data type
let symbol = Symbol();
//we can identify the symbol using an string
let identifiedSymbol = Symbol('identified');



//we can prove that symbols are unique
let mySymbol = Symbol("symbol");
let mySymbol2 = Symbol("symbol");

document.getElementById('div1').innerText = (mySymbol === mySymbol2);
//document.getElementById('symbolsParagraph').innerText = symbol + " <-OTHER SYMBOL-> "+identifiedSymbol; TYPE ERROR
//MUST BE EXPLICIT CONVERTED
document.getElementById('symbolsParagraph').innerText = symbol.toString() + " <-OTHER SYMBOL-> "+identifiedSymbol.toString();

//use case -> Symbols as key properties
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 14;
console.log(obj[MY_KEY]);

//also you can use to create objects with specific keys
//REMEMBER: An object key does not need to be a string
const CONSTANT_KEY = Symbol('definedKey');
function objectify(value)
{
    let obj =  
    {
        [CONSTANT_KEY]: value,
        
    }
    return obj;
}

console.log("OBJECTIFY --> ",objectify("oi, eu sou o Goku!"));
