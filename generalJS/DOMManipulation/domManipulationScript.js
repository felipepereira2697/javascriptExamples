var div1 = document.getElementById('div1');

var unicycle = document.getElementsByClassName('unicycle');
var text = "<h1>Hello DOM</h1>";
div1.innerHTML = text;

//We can do this
//only select the element that has class name equals to unicycle and also is inside div1 which is an element that has the id div1
//var unicycle2 = div1.getElementsByClassName('unicycle');

var paragraphs = document.getElementsByTagName('p');

//query selector you can pass a string containing one or more css selectors separated by commas and this will return the first element
//in the document that matches it
var querySelector = document.querySelector('.unicycle');
//now returning an array of elements with querySelectorAll

//return all elements that has class unicycle OR div2 as id
var allElements = document.querySelectorAll('.unicycle, #div2');


