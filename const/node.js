// To define any variable, you can just write the type of variable you want (const, var, or let), then type the name of the variable, after that you do an equal signs (=), and then write the contents of the variable at the end.
const constant = "string";

console.log(constant); // Will print "string" to console

constant = "other string"; // Will throw the following error because a constant cannot be reassigned:
/*
  constant = "other string";
           ^

  TypeError: Assignment to constant variable.
*/
