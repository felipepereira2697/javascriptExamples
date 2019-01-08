//At this example, we can use the argument ... this is called rest operator so we can pass different number of arguments 
//also we can use the reduce function, the reduce function executes a reducer(function provided by you) , in this example, we sum all the arguments
const sum = (function() 
{
    return function sum(...args) 
    {
        //the  function (a,b) => a+b is our reducer
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));