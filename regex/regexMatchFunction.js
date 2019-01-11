let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //here we are saying that we will look at any twinkle no matter if it has upper or lowercase
let result = twinkleStar.match(starRegex); //this returns an array
//prints out twinkle and Twinkle
console.log(result);