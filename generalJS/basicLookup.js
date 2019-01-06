// Setup
function phoneticLookup(val) 
{
    //Using this object to lookup we can substitue the if/else statements and the switch case statements too
    //really nice way to search 
    var result = "";
    var lookup = {
      
      "alpha": result = "Adams",
      "bravo":result = "Boston",
      "charlie": result= "Chicago",
      "delta": result = "Denver",
      "echo":result = "Easy",
      "foxtrot":result = "Frank",
  
    }
    result = lookup[val];
  
    return result;
}
  
  