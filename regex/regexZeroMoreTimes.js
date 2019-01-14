//To find a character zero or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);
console.log(result);