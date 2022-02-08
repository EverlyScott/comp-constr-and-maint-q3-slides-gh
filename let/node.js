let variable = "string";

console.log(variable); // Will print "string" to the console

variable = "other string";

console.log(variable); // Will print "other string" to the console

{
  let otherVariable = "third string";

  console.log(otherVariable); // Will print "third string" to the console
}

console.log(otherVariable); // Will throw the following error because we're trying to access it outside of it's context:
/*
  console.log(otherVariable);
              ^

  ReferenceError: otherVariable is not defined
*/
